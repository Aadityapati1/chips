
import { FarmerData, ProductFlavour } from './types';

export const BATCH_DATA: Record<string, FarmerData> = {
  '12345': {
    batchId: '12345',
    farmerName: 'The Farmer of Burhanpur',
    location: 'Phophnar Cluster, Burhanpur, MP',
    farmStory: 'Inspired by the fertile Tapti river basin, our farmer dedicated this harvest to purity and crunch. Every banana used in this batch was hand-selected at the perfect stage of maturity to ensure the natural sweetness of the Cavendish variety shines through without heavy processing.',
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