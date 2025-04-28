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
          position: { pitch: -15, yaw: 0 },
          size: 400 // Large size for main furniture
        },
        {
          id: "sofa-2",
          name: "Modern Sectional",
          imageUrl: "/sofa.png",
          thumbnailUrl: "/sofa.png",
          position: { pitch: -15, yaw: -45 },
          size: 450 // Slightly larger for sectional
        },
        {
          id: "chair-1",
          name: "Accent Chair",
          imageUrl: "/sofa.png",
          thumbnailUrl: "/sofa.png",
          position: { pitch: -15, yaw: 45 },
          size: 300 // Smaller for chairs
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
          position: { pitch: 0, yaw: -90 },
          size: 150 // Small size for table lamps
        },
        {
          id: "light-2",
          name: "Floor Lamp",
          imageUrl: "/light.png",
          thumbnailUrl: "/light.png",
          position: { pitch: 0, yaw: -60 },
          size: 200 // Taller for floor lamps
        },
        {
          id: "light-3",
          name: "Pendant Light",
          imageUrl: "/light.png",
          thumbnailUrl: "/light.png",
          position: { pitch: 30, yaw: 0 },
          size: 175 // Medium size for hanging lights
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
          position: { pitch: 0, yaw: 90 },
          size: 300 // Large for statement art
        },
        {
          id: "art-2",
          name: "Gallery Wall",
          imageUrl: "/wallart.png",
          thumbnailUrl: "/wallart.png",
          position: { pitch: 0, yaw: 60 },
          size: 400 // Larger for gallery collection
        },
        {
          id: "art-3",
          name: "Small Print",
          imageUrl: "/wallart.png",
          thumbnailUrl: "/wallart.png",
          position: { pitch: 0, yaw: 30 },
          size: 200 // Smaller for accent pieces
        }
      ]
    }
  };