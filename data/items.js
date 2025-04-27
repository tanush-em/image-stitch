// data/items.js
export const items = {
    furniture: {
      name: "Furniture",
      options: [
        {
          id: "sofa-3",
          name: "Sectional Sofa",
          imageUrl: "/sofa.png",
          thumbnailUrl: "/sofa.png",
          position: { pitch: -20, yaw: 0 } // Center front, floor level
        },
        {
          id: "sofa-2",
          name: "Classic Sofa",
          imageUrl: "/sofa.png",
          thumbnailUrl: "/sofa.png",
          position: { pitch: -20, yaw: 30 } // Slightly right, floor level
        }
      ]
    },
    lighting: {
      name: "Lighting",
      options: [
        {
          id: "lamp-1",
          name: "Pendant Light",
          imageUrl: "/light.png",
          thumbnailUrl: "/light.png",
          position: { pitch: 40, yaw: 0 } // Center front, ceiling
        },
        {
          id: "lamp-2",
          name: "Floor Lamp",
          imageUrl: "/light.png",
          thumbnailUrl: "/light.png",
          position: { pitch: 0, yaw: -45 } // Left wall, eye level
        },
        {
          id: "lamp-3",
          name: "Table Lamp",
          imageUrl: "/light.png",
          thumbnailUrl: "/light.png",
          position: { pitch: 0, yaw: 45 } // Right wall, eye level
        }
      ]
    },
    wallDecor: {
      name: "Wall Decor",
      options: [
        {
          id: "art-1",
          name: "Abstract Art",
          imageUrl: "/wallart.png",
          thumbnailUrl: "/wallart.png",
          position: { pitch: 0, yaw: 0 } // Center front, eye level
        },
        {
          id: "art-2",
          name: "Landscape Painting",
          imageUrl: "/wallart.png",
          thumbnailUrl: "/wallart.png",
          position: { pitch: 0, yaw: -60 } // Left wall, eye level
        },
        {
          id: "art-3",
          name: "Photo Gallery",
          imageUrl: "/wallart.png",
          thumbnailUrl: "/wallart.png",
          position: { pitch: 0, yaw: 60 } // Right wall, eye level
        }
      ]
    }
  };