interface Shoe {
  id: string;
  name: string;
  price: number;
  rating: number;
  maker: string;
  images: string[];
}

export const shoes: Shoe[] = [
  {
    id: 'air-jordan-4-retro-og-sp-nigel-sylvester-brick',
    name: 'Air Jordan 4 Retro OG SP Nigel Sylvester Brick by Brick',
    price: 500,
    rating: 4.5,
    maker: 'Nike',
    images: [
      'https://ciconceptstore.com/cdn/shop/files/aj4_Brick_by_Brick.png?v=1741431997&width=700',
      'https://ciconceptstore.com/cdn/shop/files/aj4_Brick_by_Brick2.png?v=1741431997&width=700',
      'https://ciconceptstore.com/cdn/shop/files/jordan-4-brick.png?v=1741431997&width=700',
    ],
  },
  {
    id: 'air-jordan-1-retro-low-og-sp-travis-scott-velvet-brown',
    name: 'Air Jordan 1 Retro Low OG SP Travis Scott Velvet Brown',
    price: 580,
    rating: 4.8,
    maker: 'Nike',
    images: [
      'https://ciconceptstore.com/cdn/shop/files/travis.png?v=1733575612&width=700',
    ],
  },
  {
    id: 'air-jordan-1-retro-low-og-sp-travis-scott-medium-olive',
    name: 'Air Jordan 1 Retro Low OG SP Travis Scott Medium Olive',
    price: 750,
    rating: 4.6,
    maker: 'Nike',
    images: [
      'https://ciconceptstore.com/cdn/shop/files/Jordan1RetroLowOGSP_TravisScottMediumOlive.png?v=1726833258&width=700',
      'https://ciconceptstore.com/cdn/shop/files/0001_AIR-JORDAN-1-RETRO-LOW-OG-SP-TRAVIS-SCOTT-MEDIUM-OLIVE.png?v=1726833258&width=700',
    ],
  },
  {
    id: 'adidas-campus-x-bad-bunny-the-last-campus',
    name: 'Adidas Campus x Bad Bunny - The Last Campus',
    price: 230,
    rating: 4.2,
    maker: 'Adidas',
    images: [
      'https://ciconceptstore.com/cdn/shop/files/Adidas_Campus_x_Bad-Bunny_The_Last_Campus1.webp?v=1719060145&width=800',
      'https://ciconceptstore.com/cdn/shop/files/Adidas_Campus_x_Bad-Bunny_The_Last_Campus2.webp?v=1719060145&width=800',
      'https://ciconceptstore.com/cdn/shop/files/Copia-de-Diseno-sin-titulo-_1.webp?v=1719060419&width=800',
    ],
  },

  {
    id: 'adidas-handball-spezial-earth-strata-gum',
    name: 'Adidas Handball Spezial Earth Strata Gum',
    price: 180,
    rating: 4.4,
    maker: 'Adidas',
    images: [
      'https://ciconceptstore.com/cdn/shop/files/Adidas_Handball_Spezial_Earth_Strata_Gum.webp?v=1719062364&width=800',
      'https://ciconceptstore.com/cdn/shop/files/Adidas_Handball_Spezial_Earth_Strata_Gum1.webp?v=1719062364&width=500',
    ],
  },
  {
    id: 'nike-dunk-low-cacao-wow',
    name: 'Nike Dunk Low - Cacao Wow (W)',
    price: 170,
    rating: 3.9,
    maker: 'Nike',
    images: [
      'https://ciconceptstore.com/cdn/shop/files/Nike_Dunk_Low_Cacao_Wow1.webp?v=1719583040&width=800',
      'https://ciconceptstore.com/cdn/shop/files/Nike_Dunk_Low_Cacao_Wow2.webp?v=1719583040&width=800',
      'https://ciconceptstore.com/cdn/shop/files/Nike_Dunk_Low_Cacao_Wow3.webp?v=1719583040&width=800',
    ],
  },
  {
    id: 'adidas-forum-x-bad-bunny-buckle-low-white',
    name: 'Adidas Forum x Bad Bunny - Buckle Low White',
    price: 330,
    rating: 4.5,
    maker: 'Adidas',
    images: [
      'https://ciconceptstore.com/cdn/shop/files/1_2.webp?v=1688729153&width=800',
      'https://ciconceptstore.com/cdn/shop/files/6_2c519c4f-ca7c-496c-9395-5c5b21b4e723.webp?v=1718971036&width=800',
      'https://ciconceptstore.com/cdn/shop/files/Copia-de-Diseno-sin-titulo-_4.webp?v=1719061725&width=800',
    ],
  },
] as const;
