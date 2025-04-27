// components/RoomVisualizer.js
"use client";

import { useEffect, useRef, useState } from 'react';

export default function RoomVisualizer({ panoramaUrl, selectedItems }) {
  const viewerContainerRef = useRef(null);
  const viewerInstanceRef = useRef(null);
  const [error, setError] = useState(null);
  const [isViewerReady, setIsViewerReady] = useState(false);

  // Initialize or update Pannellum viewer
  useEffect(() => {
    if (!viewerContainerRef.current || !panoramaUrl) return;
    
    // Clean up existing viewer if it exists
    if (viewerInstanceRef.current) {
      try {
        viewerInstanceRef.current.destroy();
        viewerInstanceRef.current = null;
        setIsViewerReady(false);
      } catch (err) {
        console.error('Failed to destroy existing Pannellum viewer:', err);
      }
    }
    
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
      try {
        viewerInstanceRef.current = window.pannellum.viewer(
          viewerContainerRef.current.id,
          {
            type: 'equirectangular',
            panorama: panoramaUrl,
            autoLoad: true,
            showControls: true,
            hotSpotDebug: true,
            compass: true,
            autoRotate: -2,
            onLoad: () => {
              setIsViewerReady(true);
              setError(null);
              console.log('Pannellum viewer loaded successfully');
            },
            onError: (error) => {
              console.error('Pannellum error:', error);
              setError('Failed to load panorama image. Please check the image path.');
            }
          }
        );
      } catch (err) {
        console.error('Failed to initialize Pannellum viewer:', err);
        setError('Failed to initialize the viewer. Please try refreshing the page.');
      }
    }
    
    return () => {
      // Clean up viewer on component unmount
      if (viewerInstanceRef.current) {
        try {
          viewerInstanceRef.current.destroy();
          viewerInstanceRef.current = null;
          setIsViewerReady(false);
        } catch (err) {
          console.error('Failed to destroy Pannellum viewer:', err);
        }
      }
    };
  }, [panoramaUrl]);

  // Update hotspots when selected items change
  useEffect(() => {
    if (!isViewerReady || !viewerInstanceRef.current || !selectedItems || selectedItems.length === 0) {
      return;
    }

    const viewer = viewerInstanceRef.current;
    
    try {
      // Remove all existing hotspots
      const hotspots = viewer.getHotSpots();
      if (hotspots && Array.isArray(hotspots)) {
        hotspots.forEach(hotspot => {
          try {
            viewer.removeHotSpot(hotspot.id);
          } catch (err) {
            console.warn(`Failed to remove hotspot ${hotspot.id}:`, err);
          }
        });
      }

      // Add new hotspots for each selected item
      selectedItems.forEach(item => {
        if (!item.position || typeof item.position.pitch !== 'number' || typeof item.position.yaw !== 'number') {
          console.warn(`Invalid position for item ${item.id}:`, item.position);
          return;
        }

        try {
          const hotspotId = `item-${item.id}`;
          console.log(`Adding hotspot for item ${item.id} at position:`, item.position);
          
          // Create hotspot element
          const hotspotElement = document.createElement('div');
          hotspotElement.className = 'custom-item-hotspot';
          hotspotElement.style.position = 'absolute';
          hotspotElement.style.transform = 'translate(-50%, -50%)';
          hotspotElement.style.width = '150px';
          hotspotElement.style.height = 'auto';
          hotspotElement.style.zIndex = '1000';
          
          // Create and append image
          const img = document.createElement('img');
          img.src = item.imageUrl;
          img.style.width = '100%';
          img.style.height = 'auto';
          img.style.display = 'block';
          hotspotElement.appendChild(img);
          
          // Add hotspot to viewer
          viewer.addHotSpot({
            id: hotspotId,
            pitch: item.position.pitch,
            yaw: item.position.yaw,
            type: 'info',
            cssClass: 'custom-item-hotspot',
            createTooltipFunc: () => hotspotElement
          });
          
          console.log(`Successfully added hotspot ${hotspotId}`);
        } catch (err) {
          console.error(`Failed to add hotspot for item ${item.id}:`, err);
        }
      });
    } catch (err) {
      console.error('Failed to update hotspots:', err);
    }
  }, [selectedItems, isViewerReady]);

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100">
        <div className="text-red-500 text-center p-4">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <div 
        id="panorama-viewer" 
        ref={viewerContainerRef} 
        className="w-full h-full"
      />
      <style jsx global>{`
        .custom-item-hotspot {
          background: transparent !important;
          cursor: pointer;
          pointer-events: auto !important;
          z-index: 1000 !important;
        }
        .pnlm-hotspot-base {
          z-index: 1000 !important;
        }
        .pnlm-container {
          position: relative !important;
        }
      `}</style>
    </div>
  );
}