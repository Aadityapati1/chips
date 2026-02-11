
import { FarmerData, ProductFlavour } from './types';

export const BATCH_DATA: Record<string, FarmerData> = {
  '12345': {
    batchId: '12345',
    farmerName: 'Mohan Patil',
    location: 'Tarkheda, Burhanpur, MP',
    farmStory: `Meet The Farmer Behind Your Chips – Mohan Patil

Every crispy bite of your banana chips begins its journey in the fertile lands of Tarkheda, Burhanpur, at the farm of Mr. Mohan Patil, a dedicated farmer whose life revolves around the soil he nurtures.

At 48 years old, Mohan Patil carries forward a farming legacy passed down by his father, Mr. Ramesh Patil. Farming wasn’t just a profession he chose, it was a responsibility he embraced early in life. Due to challenging financial circumstances, Mohan could only continue his education until the 10th standard, after which he stepped into farming to support his family and carry forward his father’s hard work.

Despite sacrificing his own academic dreams, Mohan strongly believes in the power of education. Determined to give his children opportunities he never had, he ensured his sons received quality education. Today, his elder son is a software engineer, while his younger son is walking the same path, making Mohan immensely proud.

Spread across 12 acres of land, Mohan’s farm is a place where dedication meets patience. For him, banana farming is not just cultivation, it is an emotional journey. As Mohan beautifully describes it:

“For a farmer, a banana plant is like a child. We nurture it for almost a year, protect it, pray for its growth, and celebrate when it finally bears fruit.”

Farming is filled with uncertainties, unpredictable weather, fluctuating market prices, and physical challenges. Yet, Mohan continues his work with quiet resilience and satisfaction, finding happiness in nurturing life from the soil and feeding countless families through his produce.

⸻

❤️ 

From Mohan’s Farm To Your Packet

When you enjoy these banana chips, you are not just tasting a snack - you are becoming part of Mohan Patil’s story, his dedication, and his year-long journey of care and commitment.`,
    images: [
      // '/assets/farmers/12345/mohan1.jpeg',
      '/assets/farmers/12345/mohan2.jpeg',
      '/assets/farmers/12345/mohanfarm1.jpeg'

      
    ],
    harvestDate: 'December 2025',
    variety: 'Grand Naine Cavendish',
    flavour: 'Peri-Peri',
    processSteps: [
      {
        title: 'Hand Selection',
        description: 'Our farmer walks the groves daily, picking only the bananas that meet our strict size and quality standards.',
        icon: '🍌'
      },
      {
        title: 'Sun-Drenched Care',
        description: 'Cultivated under the Burhanpur sun with traditional organic-leaning practices passed down through generations.',
        icon: '☀️'
      },
      {
        title: 'Fresh Slicing',
        description: 'Processed within hours of harvest to maintain the structural integrity and freshness of the fruit.',
        icon: '🔪'
      },
      {
        title: 'Precision Frying',
        description: 'Cooked in small batches to achieve the perfect golden hue and that signature Safary snap.',
        icon: '🔥'
      }
    ]
  }
};

export const FLAVOURS: ProductFlavour[] = [
  {
    name: 'Peri-Peri',
    description: 'Irresistible Spicy Flavour. Made with Raw Banana, Vegetable Oil, and signature Peri-Peri spices.',
    color: 'bg-[#911b1b]', // Darker red matching the pack
    image: 'https://storage.googleapis.com/static.aistudio.google.com/content/file-01-j9p70z6n6h1v8'
  },
  {
    name: 'Cream & Onion',
    description: 'Irresistible Creamy Flavour. A perfect blend of savory spring onion and smooth cream.',
    color: 'bg-[#3b8a1e]', // Vibrant green matching the pack
    image: 'https://storage.googleapis.com/static.aistudio.google.com/content/file-01-j9p70z6n6m9y1'
  }
];