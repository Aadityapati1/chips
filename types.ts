
export interface FarmerData {
  batchId: string;
  farmerName: string;
  location: string;
  farmStory: string;
  harvestDate: string;
  variety: string;
  flavour: 'Peri-Peri' | 'Cream & Onion';
  processSteps: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export interface ProductFlavour {
  name: string;
  description: string;
  color: string;
  image: string;
}
