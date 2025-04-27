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
          position: { pitch: -10, yaw: 0 } // Center of the room, slightly below eye level
        },
        {
          id: "sofa-2",
          name: "Classic Sofa",
          imageUrl: "/sofa.png",
          thumbnailUrl: "/sofa.png",
          position: { pitch: -10, yaw: 90 } // Right side of the room
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
          position: { pitch: 45, yaw: 0 } // Ceiling center
        },
        {
          id: "lamp-2",
          name: "Floor Lamp",
          imageUrl: "/light.png",
          thumbnailUrl: "/light.png",
          position: { pitch: -5, yaw: 180 } // Back wall
        },
        {
          id: "lamp-3",
          name: "Table Lamp",
          imageUrl: "/light.png",
          thumbnailUrl: "/light.png",
          position: { pitch: -5, yaw: 270 } // Left side of the room
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
          position: { pitch: 0, yaw: 180 } // Back wall at eye level
        },
        {
          id: "art-2",
          name: "Landscape Painting",
          imageUrl: "/wallart.png",
          thumbnailUrl: "/wallart.png",
          position: { pitch: 0, yaw: 90 } // Right wall at eye level
        },
        {
          id: "art-3",
          name: "Photo Gallery",
          imageUrl: "/wallart.png",
          thumbnailUrl: "/wallart.png",
          position: { pitch: 0, yaw: 270 } // Left wall at eye level
        }
      ]
    }
  };