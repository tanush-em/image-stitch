// app/page.js
"use client";

import { useEffect, useState } from 'react';
import RoomVisualizer from '@/components/RoomVisualizer';
import ItemSelector from '@/components/ItemSelector';
import { items } from '@/data/items';

export default function Home() {
  const [selectedItems, setSelectedItems] = useState({});
  
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
          position: categoryData.position
        });
      }
    });
    
    return result;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col lg:flex-row w-full flex-grow">
        <div className="lg:w-3/4 w-full h-[500px] lg:h-screen relative">
          <RoomVisualizer 
            panoramaUrl="/panorama.jpg" 
            selectedItems={getSelectedItemsData()} 
          />
        </div>
        
        <div className="lg:w-1/4 w-full p-4 bg-gray-100 overflow-y-auto">
          <h1 className="text-2xl font-bold mb-4">Customize Your Room</h1>
          <ItemSelector 
            items={items} 
            selectedItems={selectedItems} 
            onSelect={handleItemSelect} 
          />
        </div>
      </main>
    </div>
  );
}