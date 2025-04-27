// components/ItemSelector.js
"use client";

import Image from 'next/image';

export default function ItemSelector({ items, selectedItems, onSelect }) {
  return (
    <div className="space-y-6">
      {Object.entries(items).map(([categoryId, category]) => (
        <div key={categoryId} className="border-b pb-4">
          <h2 className="text-lg font-semibold mb-2">{category.name}</h2>
          
          <div className="grid grid-cols-2 gap-2">
            {category.options.map(option => (
              <button
                key={option.id}
                className={`p-2 border rounded-lg transition-all ${
                  selectedItems[categoryId] === option.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                onClick={() => onSelect(categoryId, option.id)}
              >
                <div className="aspect-square relative mb-1 bg-white">
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={option.thumbnailUrl || option.imageUrl}
                      alt={option.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
                <p className="text-sm text-center">{option.name}</p>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}