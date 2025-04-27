// data/items.js
export const items = {
    furniture: {
      name: "Furniture",
      position: { pitch: -15, yaw: 0 }, // Position in the panorama where furniture appears
      options: [
        {
          id: "sofa-1",
          name: "Modern Sofa",
          imageUrl: "/items/sofa-1.png",
          thumbnailUrl: "/thumbnails/sofa-1.jpg"
        },
        {
          id: "sofa-2",
          name: "Classic Sofa",
          imageUrl: "/items/sofa-2.png",
          thumbnailUrl: "/thumbnails/sofa-2.jpg"
        },
        {
          id: "sofa-3",
          name: "Sectional Sofa",
          imageUrl: "/items/sofa-3.png",
          thumbnailUrl: "/thumbnails/sofa-3.jpg"
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
          imageUrl: "/items/lamp-1.png",
          thumbnailUrl: "/thumbnails/lamp-1.jpg"
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
          imageUrl: "/items/art-1.png",
          thumbnailUrl: "/thumbnails/art-1.jpg"
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