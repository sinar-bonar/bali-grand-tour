export interface Tour {
  slug: string;
  title: string;
  location: string;
  image: string;
  description: string;
  highlights: string[];
}

export const tours: Tour[] = [
  {
    slug: 'ubud-monkey-forest-tour',
    title: 'Ubud Monkey Forest Tour',
    location: 'Bali, Indonesia',
    image: 'https://img.rezio.io/mip1/6d7e09fb-b34d-48be-88f1-37dd5ba447bc/abc5a9ec-a1b9-4460-a48e-39d6eb3db36d.jpeg',
    description: 'Explore the famous Ubud Monkey Forest, a sanctuary for hundreds of long-tailed macaques. Walk through lush tropical jungle and discover ancient temple ruins surrounded by nature. A perfect half-day tour to experience Bali\'s unique wildlife and spiritual atmosphere.',
    highlights: [
      'Visit the sacred Monkey Forest sanctuary',
      'See ancient Hindu temple ruins',
      'Walk through lush tropical jungle',
      'Meet hundreds of friendly macaques',
      'Guided tour with knowledgeable local guide',
    ],
  },
  {
    slug: 'private-beautiful-beach-tour',
    title: 'PRIVATE DAY TOUR - Beautiful Beach Tour',
    location: 'Bali, Indonesia',
    image: 'https://img.rezio.io/mip1/6d7e09fb-b34d-48be-88f1-37dd5ba447bc/36bce347-6bec-4802-8c02-a5e698c6c1ba.jpeg',
    description: 'Discover Bali\'s most beautiful beaches on this private day tour. From golden sands to dramatic cliffside coves, experience the best coastal scenery Bali has to offer. Perfect for beach lovers and photographers.',
    highlights: [
      'Visit multiple stunning beaches',
      'Swim in crystal clear waters',
      'Photo stops at scenic viewpoints',
      'Private tour with flexible itinerary',
      'Hotel pickup and drop-off included',
    ],
  },
  {
    slug: 'private-bedugul-waterfall-tour',
    title: 'PRIVATE DAY TOUR - Bedugul Waterfall Tour',
    location: 'Bedugul, Indonesia',
    image: 'https://img.rezio.io/mip1/6d7e09fb-b34d-48be-88f1-37dd5ba447bc/d3bb0fea-830c-449f-81d7-7ce702a14001.png',
    description: 'Escape to the cool highlands of Bedugul and discover breathtaking waterfalls hidden in the jungle. This private tour takes you to the most spectacular cascades in the Bedugul region, surrounded by lush tropical forest.',
    highlights: [
      'Visit stunning hidden waterfalls',
      'Cool mountain climate escape',
      'Swim in natural pools',
      'Photo opportunities at every stop',
      'Private guide and transportation',
    ],
  },
  {
    slug: 'private-kintamani-full-day-tour',
    title: 'PRIVATE DAY TOUR - Kintamani Full Day Tour',
    location: 'Kintamani, Indonesia',
    image: 'https://img.rezio.io/mip1/6d7e09fb-b34d-48be-88f1-37dd5ba447bc/10d3bfeb-d5a0-4130-8a30-be7496e01e54.png',
    description: 'Experience the majestic beauty of Mount Batur and Lake Batur on this full day Kintamani tour. Witness stunning volcanic landscapes, visit traditional villages, and enjoy panoramic views of Bali\'s most iconic volcano.',
    highlights: [
      'Panoramic views of Mount Batur',
      'Visit Lake Batur',
      'Explore traditional Balinese villages',
      'Coffee plantation visit',
      'Full day private tour experience',
    ],
  },
  {
    slug: 'private-nusa-penida-tour',
    title: 'PRIVATE DAY TOUR - Nusa Penida Tour',
    location: 'Bali, Indonesia',
    image: 'https://img.rezio.io/mip1/6d7e09fb-b34d-48be-88f1-37dd5ba447bc/5fb274fc-c519-4ecd-8590-6e2fe8228c0f.png',
    description: 'Take a speedboat to the stunning island of Nusa Penida. Explore dramatic cliff formations, pristine beaches, and crystal clear waters. Home to the famous Kelingking Beach and Angel\'s Billabong.',
    highlights: [
      'Speedboat transfer to Nusa Penida',
      'Visit Kelingking Beach viewpoint',
      'Explore Angel\'s Billabong',
      'Snorkeling at pristine spots',
      'Full day island adventure',
    ],
  },
  {
    slug: 'ubud-rice-terrace-tour',
    title: 'Ubud Rice Terrace Tour',
    location: 'Bali, Indonesia',
    image: 'https://img.rezio.io/mip1/6d7e09fb-b34d-48be-88f1-37dd5ba447bc/304ddefd-4469-49ad-a8f1-187433028afc.jpeg',
    description: 'Discover the iconic Tegallalang Rice Terraces in Ubud. Walk through emerald green rice paddies sculpted into the hillside, and learn about the traditional Subak irrigation system that has sustained Balinese agriculture for centuries.',
    highlights: [
      'Visit Tegallalang Rice Terraces',
      'Learn about Subak irrigation system',
      'Walk through lush green paddies',
      'Photo stops at scenic viewpoints',
      'Cultural insights with local guide',
    ],
  },
  {
    slug: 'water-sport-beach-tour',
    title: 'Water Sport Beach Tour',
    location: 'Bali, Indonesia',
    image: 'https://img.rezio.io/mip1/6d7e09fb-b34d-48be-88f1-37dd5ba447bc/226283f7-adbe-4887-9426-3857be109419.jpeg',
    description: 'Get your adrenaline pumping with Bali\'s best water sports. From jet skiing and parasailing to banana boats and snorkeling, this tour offers endless fun on the water. Perfect for adventure seekers and families.',
    highlights: [
      'Jet skiing and parasailing',
      'Banana boat rides',
      'Snorkeling equipment provided',
      'Professional instructors',
      'All safety equipment included',
    ],
  },
  {
    slug: 'lempuyang-east-bali-tour',
    title: 'Lempuyang East Bali Tour',
    location: 'Bali, Indonesia',
    image: 'https://img.rezio.io/mip1/6d7e09fb-b34d-48be-88f1-37dd5ba447bc/973b1687-15c5-4edf-9a14-dd1576014a32.jpeg',
    description: 'Visit the iconic Gates of Heaven at Lempuyang Temple, one of Bali\'s most photographed landmarks. This tour takes you through East Bali\'s most sacred temples and stunning natural scenery.',
    highlights: [
      'Visit Lempuyang Temple (Gates of Heaven)',
      'Photo at the iconic gate with Mount Agung backdrop',
      'Explore Tirta Gangga water palace',
      'Visit traditional East Bali villages',
      'Cultural and spiritual experience',
    ],
  },
  {
    slug: 'bedugul-tanah-lot-tour',
    title: 'Bedugul Tanah Lot Tour',
    location: 'Bali, Indonesia',
    image: 'https://img.rezio.io/mip1/6d7e09fb-b34d-48be-88f1-37dd5ba447bc/eeae50a1-2fa9-4492-b6f7-e0f7cae84fc5.jpeg',
    description: 'Combine the cool highlands of Bedugul with the stunning sea temple of Tanah Lot. Visit the beautiful Ulun Danu Beratan Temple, enjoy the mountain scenery, and end the day watching the sunset at the iconic Tanah Lot Temple.',
    highlights: [
      'Visit Ulun Danu Beratan Temple',
      'Explore Bedugul Botanical Garden',
      'Sunset at Tanah Lot Temple',
      'Cool mountain climate experience',
      'Flexible itinerary with private guide',
    ],
  },
];
