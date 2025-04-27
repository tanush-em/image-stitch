// data/items.js
export const items = {
    furniture: {
      name: "Furniture",
      position: { pitch: -15, yaw: 0 }, // Position in the panorama where furniture appears
      options: [
        {
          id: "sofa-3",
          name: "Sectional Sofa",
          imageUrl: "/light.png",
          thumbnailUrl: "/light.png"
        },
        {
          id: "sofa-2",
          name: "Classic Sofa",
          imageUrl: "/items/sofa-2.png",
          thumbnailUrl: "/thumbnails/sofa-2.jpg"
        }
      ]
    },
    lighting: {
      name: "Lighting",
      position: { pitch: 10, yaw: 45 }, // Position for lighting fixtures
      options: [
        {
          id: "lamp-1",
          name: "Pendant Light",
          imageUrl: "/sofa.png",
          thumbnailUrl: "/sofa.jpg"
        },
        {
          id: "lamp-2",
          name: "Floor Lamp",
          imageUrl: "/items/lamp-2.png",
          thumbnailUrl: "/thumbnails/lamp-2.jpg"
        },
        {
          id: "lamp-3",
          name: "Table Lamp",
          imageUrl: "/items/lamp-3.png",
          thumbnailUrl: "/thumbnails/lamp-3.jpg"
        }
      ]
    },
    wallDecor: {
      name: "Wall Decor",
      position: { pitch: 0, yaw: -30 }, // Position for wall decor
      options: [
        {
          id: "art-1",
          name: "Abstract Art",
          imageUrl: "/wallart.png",
          thumbnailUrl: "/wallart.jpg"
        },
        {
          id: "art-2",
          name: "Landscape Painting",
          imageUrl: "/items/art-2.png",
          thumbnailUrl: "/thumbnails/art-2.jpg"
        },
        {
          id: "art-3",
          name: "Photo Gallery",
          imageUrl: "/items/art-3.png",
          thumbnailUrl: "/thumbnails/art-3.jpg"
        }
      ]
    }
  };