// data/items.js
export const items = {
    furniture: {
      name: "Furniture",
      options: [
        {
          id: "sofa-1",
          name: "Classic Sofa",
          imageUrl: "/sofa.png",
          thumbnailUrl: "/sofa.png",
          position: { pitch: -15, yaw: 0 } // Center, slightly below eye level
        }
      ]
    },
    lighting: {
      name: "Lighting",
      options: [
        {
          id: "light-1",
          name: "Table Lamp",
          imageUrl: "/light.png",
          thumbnailUrl: "/light.png",
          position: { pitch: 0, yaw: -90 } // Left wall, eye level
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
          position: { pitch: 0, yaw: 90 } // Right wall, eye level
        }
      ]
    }
  };