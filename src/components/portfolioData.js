// Portfolio data - Replace this with API data when ready
export const portfolioData = [
  {
    id: 1,
    name: 'patty',
    title: 'Shop web app "Patty"',
    date: 'April, 2017',
    images: [
      '../danny/media/modal-images/modal-image-1.jpg',
      '../danny/media/modal-images/modal-image-2.jpg'
    ],
    category: 'web-sites',
    url: 'https://example.com'
  },
  {
    id: 2,
    name: 'phoenix',
    title: 'Startup website "Phoenix"',
    date: 'March, 2016',
    images: [
      '../danny/media/modal-images/soledad-preview8-darkmode-AI.__large_preview.jpg'
    ],
    category: 'frontend',
    url: 'https://example.com'
  },
  {
    id: 3,
    name: 'ewesta',
    title: 'Corporate chat "eWesta"',
    date: 'December, 2015',
    images: [
      '../danny/media/modal-images/previewhtml.__large_preview.jpg'
    ],
    category: 'web-sites',
    url: 'https://example.com'
  },
  {
    id: 4,
    name: 'foody',
    title: 'Restaraunt web app "Foody"',
    date: 'May, 2014',
    images: [
      '../danny/media/modal-images/preview.__large_preview.jpg'
    ],
    category: 'frontend',
    url: 'https://example.com'
  },
  {
    id: 5,
    name: 'stark',
    title: 'Game website "Stark"',
    date: 'June, 2014',
    images: [
      '../danny/media/modal-images/Prevew- Babuz.__large_preview.jpg'
    ],
    category: 'ui-ux-design',
    url: 'https://example.com'
  },
  {
    id: 6,
    name: 'te4h',
    title: 'Blogger website "Te4h"',
    date: 'April, 2014',
    images: [
      '../danny/media/modal-images/Gameco- Cover.__large_preview.jpg'
    ],
    category: 'web-sites',
    url: 'https://example.com'
  },
  {
    id: 7,
    name: 'lamp',
    title: 'Product website "Lamp"',
    date: 'December, 2013',
    images: [
      '../danny/media/modal-images/01_preview.__large_preview.png'
    ],
    category: 'frontend',
    url: 'https://example.com'
  },
  {
    id: 8,
    name: 'zebra',
    title: 'Blog web app "Zebra"',
    date: 'March, 2013',
    images: [
      '../danny/media/modal-images/00_preview.__large_preview.jpg'
    ],
    category: 'ui-ux-design',
    url: 'https://example.com'
  }
];

// Filter options
export const portfolioFilters = [
  { id: 'all', label: 'All projects' },
  { id: 'web-sites', label: 'Web sites' },
  { id: 'ui-ux-design', label: 'UI\UX design' },
  { id: 'frontend', label: 'Frontend' }
];

// How to use API later:
// import { useState, useEffect } from 'react';
//
// const [portfolioItems, setPortfolioItems] = useState([]);
// const [loading, setLoading] = useState(true);
//
// useEffect(() => {
//   fetch('https://api.example.com/portfolio')
//     .then(res => res.json())
//     .then(data => {
//       setPortfolioItems(data);
//       setLoading(false);
//     });
// }, []);

