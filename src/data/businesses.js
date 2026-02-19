export const categories = [
  { name: 'Food & Fun', slug: 'food-fun', children: [{ name: 'Restaurants', slug: 'restaurants' }] },
  { name: 'Health & Fitness', slug: 'health-fitness', children: [{ name: 'Chiropractors', slug: 'chiropractors' }, { name: 'Reiki Therapists', slug: 'reiki' }] },
  { name: 'Professionals', slug: 'professionals', children: [{ name: 'Pet Services', slug: 'pet-services' }, { name: 'Real Estate Agents', slug: 'real-estate' }, { name: 'Wedding Planners', slug: 'wedding-planners' }] },
  { name: 'Shop', slug: 'shop', children: [{ name: 'Home Goods', slug: 'home-goods' }] },
  { name: 'Trades', slug: 'trades', children: [{ name: 'Auto Detailing', slug: 'auto-detailing' }, { name: 'Pressure Washing', slug: 'pressure-washing' }] },
];

export const businesses = [
  {
    id: 'the-lakeside-grill',
    name: 'The Lakeside Grill',
    tagline: 'American comfort food with a view of the community.',
    category: 'restaurants',
    categoryLabel: 'Restaurant',
    description: `The Lakeside Grill is one of those places that immediately feels familiar. You walk in, and the atmosphere is warm, upbeat, and filled with the comforting sound of people enjoying themselves. This neighborhood restaurant has become a local favorite for good reason. It's casual and inviting, with friendly staff who make you feel like a regular, even if it's your first time.`,
    sections: [
      {
        title: 'American Comfort Food with a Local Touch',
        body: `The menu is a celebration of American comfort food. You'll find all the classics: smash burgers, grilled chicken sandwiches, wings, pizzas, and hearty salads, each prepared with care. The smash burgers are seasoned perfectly and always come out hot and juicy. The grilled chicken sandwich is another standout, and even the gluten-free bun gets rave reviews for its soft, flavorful texture.`,
      },
      {
        title: 'Friendly Service and a Welcoming Atmosphere',
        body: `Customers often mention how genuinely kind and attentive the staff are. The restaurant's layout includes booth seating, a bar area, and an open dining space, so it works just as well for a casual dinner with family as it does for meeting up with friends. There's plenty of parking, easy access for wheelchairs, and space for kids.`,
      },
      {
        title: 'Plan Your Visit',
        body: `If you're looking for a casual restaurant in Lakewood with great food, friendly service, and a local feel, The Lakeside Grill is exactly where you'll want to be. Stop by for lunch, dinner, or drinks, and you'll understand why so many locals call it their go-to spot.`,
      },
    ],
    phone: '(555) 123-4567',
    website: 'https://example.com',
    facebook: 'https://facebook.com',
    email: null,
    address: '123 Lakefront Drive, Lakewood',
    reviews: [
      { author: 'Sarah M.', text: 'Could have been worse and still gotten five stars! Brought the whole family back. Great gluten-free options; the bun was so good it didn\'t even seem gluten-free. Everyone is really nice. Can\'t wait to go back!', source: 'Google Reviews', rating: 5 },
    ],
    featured: true,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    verified: false,
    googleReviewsUrl: null,
  },
  {
    id: 'pine-healing-center',
    name: 'Pine Healing Center',
    tagline: 'Heart-centered Reiki healing for people and animals.',
    category: 'reiki',
    categoryLabel: 'Reiki Therapists',
    description: `Pine Healing Center offers heart-centered Reiki healing for people and animals, promoting balance, well-being, and natural energy flow. Our practitioners bring decades of experience and a deep commitment to the Lakewood community.`,
    sections: [
      {
        title: 'What We Offer',
        body: `We provide one-on-one Reiki sessions, group energy circles, and animal Reiki for your beloved pets. Each session is tailored to your needs in a calm, welcoming space.`,
      },
      {
        title: 'Why Choose Us',
        body: `Our clients often report feeling lighter, more centered, and more connected after a session. We believe in the power of local care: when you know the person behind the practice, you get a higher level of trust and accountability.`,
      },
    ],
    phone: '(555) 234-5678',
    website: 'https://example.com',
    facebook: null,
    email: 'hello@pinehealing.com',
    address: '456 Forest Lane, Lakewood',
    reviews: [
      { author: 'James L.', text: 'A truly transformative experience. I left feeling more at peace than I have in years. The space is beautiful and the practitioner was incredibly attentive.', source: 'Google Reviews', rating: 5 },
    ],
    featured: true,
    image: null,
    verified: false,
    googleReviewsUrl: null,
  },
  {
    id: 'evergreen-events',
    name: 'Evergreen Events',
    tagline: 'Expert event decorator and coordinator for unforgettable celebrations.',
    category: 'wedding-planners',
    categoryLabel: 'Wedding Planners',
    description: `Evergreen Events creates unforgettable weddings and celebrations with creativity and care. From intimate gatherings to large receptions, we bring your vision to life with attention to every detail.`,
    sections: [
      {
        title: 'Full-Service Coordination',
        body: `We handle everything from initial concept to day-of coordination. Our team works with the best local vendors in Lakewood to ensure your event reflects your style and stays within budget.`,
      },
      {
        title: 'Local Expertise',
        body: `Having planned hundreds of events in the area, we know the best venues, caterers, and florists. We're not just planners; we're your partners in making your day perfect.`,
      },
    ],
    phone: '(555) 345-6789',
    website: 'https://example.com',
    facebook: 'https://facebook.com',
    email: 'events@evergreenevents.com',
    address: '789 Oak Street, Lakewood',
    reviews: [],
    featured: true,
    image: null,
    verified: false,
    googleReviewsUrl: null,
  },
  {
    id: 'lakewood-realty',
    name: 'Lakewood Realty Group',
    tagline: 'Dedicated to exceptional service and successful client experiences.',
    category: 'real-estate',
    categoryLabel: 'Real Estate Agents',
    description: `Lakewood Realty Group is your local partner for buying, selling, or investing in real estate. We combine deep market knowledge with a personal touch that makes the process smooth and stress-free.`,
    sections: [
      {
        title: 'Why Work With Us',
        body: `We've helped hundreds of families find their dream home in Lakewood. Our team knows every neighborhood, school district, and hidden gem. We're not just agents; we're your neighbors.`,
      },
    ],
    phone: '(555) 456-7890',
    website: 'https://example.com',
    facebook: null,
    email: 'info@lakewoodrealty.com',
    address: '100 Main Street, Lakewood',
    reviews: [
      { author: 'The Martinez Family', text: 'They made our first home purchase so easy. Responsive, knowledgeable, and genuinely cared about finding us the right fit.', source: 'Google Reviews', rating: 5 },
    ],
    featured: true,
    image: null,
    verified: false,
    googleReviewsUrl: null,
  },
  {
    id: 'the-cottage-shop',
    name: 'The Cottage Shop',
    tagline: 'A unique mix of refurbished, new, artistic, and vintage finds.',
    category: 'home-goods',
    categoryLabel: 'Home Goods',
    description: `The Cottage Shop offers a unique shopping experience featuring a mix of refurbished, new, artistic, and vintage finds. Every visit feels like a treasure hunt.`,
    sections: [
      {
        title: "What You'll Find",
        body: `From hand-painted furniture to locally made ceramics and one-of-a-kind vintage pieces, we curate items that add character to your home. Many of our pieces are made or restored by local artisans.`,
      },
    ],
    phone: '(555) 567-8901',
    website: null,
    facebook: 'https://facebook.com',
    email: null,
    address: '200 Harbor View, Lakewood',
    reviews: [],
    featured: true,
    image: null,
    verified: false,
    googleReviewsUrl: null,
  },
];

export function getBusinessBySlug(slug) {
  return businesses.find((b) => b.id === slug) ?? null;
}
