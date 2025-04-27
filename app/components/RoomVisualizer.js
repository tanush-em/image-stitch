// components/RoomVisualizer.js
"use client";

import { useEffect, useRef } from 'react';

export default function RoomVisualizer({ panoramaUrl, selectedItems }) {
  const viewerContainerRef = useRef(null);
  const viewerInstanceRef = useRef(null);

  // Initialize or update Pannellum viewer
  useEffect(() => {
    if (!viewerContainerRef.current) return;
    
    // Wait for pannellum to be available
    if (typeof window !== 'undefined' && !window.pannellum) {
      const checkPannellum = setInterval(() => {
        if (window.pannellum) {
          clearInterval(checkPannellum);
          initializePannellum();
        }
      }, 100);
      
      return () => clearInterval(checkPannellum);
    } else if (typeof window !== 'undefined' && window.pannellum) {
      initializePannellum();
    }
    
    function initializePannellum() {
      // Only initialize once
      if (!viewerInstanceRef.current) {
        try {
          viewerInstanceRef.current = window.pannellum.viewer(
            viewerContainerRef.current.id,
            {
              type: 'equirectangular',
              panorama: panoramaUrl,
              autoLoad: true,
              showControls: false,
              hotSpotDebug: false
            }
          );
        } catch (err) {
          console.error('Failed to initialize Pannellum viewer:', err);
        }
      }
    }
    
    return () => {
      // Clean up viewer on component unmount
      if (viewerInstanceRef.current) {
        try {
          viewerInstanceRef.current.destroy();
          viewerInstanceRef.current = null;
        } catch (err) {
          console.error('Failed to destroy Pannellum viewer:', err);
        }
      }
    };
  }, [panoramaUrl]);

  // Update hotspots when selected items change
  useEffect(() => {
    const viewer = viewerInstanceRef.current;
    if (!viewer || !selectedItems || selectedItems.length === 0) return;

    // Remove all existing hotspots
    try {
      const hotspots = viewer.getHotSpots();
      if (hotspots) {
        hotspots.forEach(hotspot => {
          viewer.removeHotSpot(hotspot.id);
        });
      }
    } catch (err) {
      console.error('Failed to remove hotspots:', err);
    }

    // Add new hotspots for each selected item
    selectedItems.forEach(item => {
      try {
        viewer.addHotSpot({
          id: `item-${item.id}`,
          pitch: item.position.pitch,
          yaw: item.position.yaw,
          type: 'info',
          cssClass: 'custom-item-hotspot',
          createTooltipFunc: (hotSpotDiv) => {
            // Create an image element for the item
            const imgElement = document.createElement('img');
            imgElement.src = item.imageUrl;
            imgElement.className = 'item-overlay';
            // You might need to adjust size based on the item
            if (item.scale) {
              imgElement.style.width = `${item.scale}px`;
            }
            hotSpotDiv.appendChild(imgElement);
          }
        });
      } catch (err) {
        console.error(`Failed to add hotspot for item ${item.id}:`, err);
      }
    });
  }, [selectedItems]);

  return (
    <div className="w-full h-full">
      <div 
        id="panorama-viewer" 
        ref={viewerContainerRef} 
        className="w-full h-full"
      />
      <style jsx global>{`
        .custom-item-hotspot {
          background: transparent;
        }
        .item-overlay {
          position: absolute;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}