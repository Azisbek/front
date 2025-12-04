export interface Partner {
  id: string;
  name: string;
  logo: string;
  category: 'partner' | 'client';
}

export const partners: Partner[] = [
  {
    id: '1',
    name: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    category: 'partner'
  },
  {
    id: '2',
    name: 'Amazon Web Services',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    category: 'partner'
  },
  {
    id: '3',
    name: 'Google Cloud',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg',
    category: 'partner'
  },
  {
    id: '4',
    name: 'IBM',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    category: 'partner'
  },
  {
    id: '5',
    name: 'Oracle',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg',
    category: 'partner'
  },
  {
    id: '6',
    name: 'SAP',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg',
    category: 'partner'
  }
];

export const clients: Partner[] = [
  {
    id: '1',
    name: 'Siemens',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Siemens-logo.svg',
    category: 'client'
  },
  {
    id: '2',
    name: 'Deutsche Bank',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Deutsche_Bank_logo_without_wordmark.svg',
    category: 'client'
  },
  {
    id: '3',
    name: 'Volkswagen',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Volkswagen_logo_2019.svg',
    category: 'client'
  },
  {
    id: '4',
    name: 'Coca-Cola',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg',
    category: 'client'
  },
  {
    id: '5',
    name: 'Mercedes-Benz',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg',
    category: 'client'
  },
  {
    id: '6',
    name: 'BMW',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/BMW_logo_%28gray%29.svg',
    category: 'client'
  }
];
