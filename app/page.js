// app/page.js
"use client";

import { useEffect, useState } from 'react';
import RoomVisualizer from '@/components/RoomVisualizer';
import ItemSelector from '@/components/ItemSelector';
import { items } from '@/data/items';

export default function Home() {
  const [selectedItems, setSelectedItems] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedImageUrl, setGeneratedImageUrl] = useState(null);
  
  // Initialize with default selections
  useEffect(() => {
    const defaults = {};
    Object.keys(items).forEach(category => {
      defaults[category] = items[category].options[0].id;
    });
    setSelectedItems(defaults);
  }, []);

  const handleItemSelect = (category, itemId) => {
    setSelectedItems(prev => ({
      ...prev,
      [category]: itemId
    }));
    // Reset submission state when items change
    setIsSubmitted(false);
    setGeneratedImageUrl(null);
  };

  const handleSubmit = async () => {
    setIsSubmitted(true);
    // In a real implementation, you would call an API to generate the image
    // For now, we'll use a placeholder image
    setGeneratedImageUrl("/final_panorama.jpg");
  };

  // Convert selected item IDs to the format needed by the visualizer
  const getSelectedItemsData = () => {
    const result = [];
    
    Object.entries(selectedItems).forEach(([category, itemId]) => {
      const categoryData = items[category];
      const selectedOption = categoryData.options.find(opt => opt.id === itemId);
      
      if (selectedOption) {
        result.push({
          id: selectedOption.id,
          imageUrl: selectedOption.imageUrl,
          position: selectedOption.position
        });
      }
    });
    
    return result;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col lg:flex-row w-full flex-grow">
        <div className="room-visualizer-container lg:w-3/4 w-full">
          {isSubmitted && generatedImageUrl ? (
            <RoomVisualizer 
              panoramaUrl={generatedImageUrl} 
              selectedItems={getSelectedItemsData()} 
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
              <div className="text-center">
                <p className="text-gray-600 mb-4">Select your items and click submit to generate the room visualization</p>
              </div>
            </div>
          )}
        </div>
        
        <div className="lg:w-1/4 w-full p-4">
          <ItemSelector 
            items={items} 
            selectedItems={selectedItems} 
            onSelect={handleItemSelect} 
          />
          <div className="mt-4">
            <button
              onClick={handleSubmit}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Generate Room Visualization
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}