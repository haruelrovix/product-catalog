const price = {
  amount: 169000,
  currency: 'IDR'
};

const image = {
  id: 227752,
  url: 'https://ss-imager-prod.freetls.fastly.net/www-images/480/product_images/caeffd8c014bf570f9e5633f96af0e48.jpg',
  width: 800,
  height: 800
};

const frixza = {
  id: 'd9d2ba40-a1a9-4377-b3a0-cae50216e8f1',
  title: 'Frixza Plain Flare Maxi Dress',
  quantity: 62,
  price,
  category: 'Maxi Dress',
  images: [
    image
  ]
};

const galzinsa = {
  id: 'da9049b3-e7cf-4373-997e-d5c44bb09033',
  title: 'Galzinsa Lace Bodycon Mini Dress',
  quantity: 778,
  price,
  category: 'Mini Dress',
  images: [
    {
      id: 227753,
      url: 'https://ss-imager-prod.freetls.fastly.net/www-images/480/product_images/60d4bd5f59a6c89028f84678cef6f3b2.jpg',
      width: 800,
      height: 800
    },
    {
      id: 227754,
      url: 'https://ss-imager-prod.freetls.fastly.net/www-images/480/product_images/7ce7c0bd615a20033186de7d11475749.jpg',
      width: 800,
      height: 800
    },
    {
      id: 227755,
      url: 'https://ss-imager-prod.freetls.fastly.net/www-images/480/product_images/e0e21d8b6fb8071197babebc89995009.jpg',
      width: 800,
      height: 800
    },
    {
      id: 227756,
      url: 'https://ss-imager-prod.freetls.fastly.net/www-images/480/product_images/8ed0bd11f6c4878e889311e1a91cd0dc.jpg',
      width: 800,
      height: 800
    },
    {
      id: 227757,
      url: 'https://ss-imager-prod.freetls.fastly.net/www-images/480/product_images/652e63a21828ead238b34ee3bb52516d.jpg',
      width: 800,
      height: 800
    },
    {
      id: 227758,
      url: 'https://ss-imager-prod.freetls.fastly.net/www-images/480/product_images/38cfc91ee13817f546adcf87146626fb.jpg',
      width: 800,
      height: 800
    },
    {
      id: 227759,
      url: 'https://ss-imager-prod.freetls.fastly.net/www-images/480/product_images/fb14df572a946a5b97e8ec876d6c9f54.jpg',
      width: 800,
      height: 800
    },
    {
      id: 227760,
      url: 'https://ss-imager-prod.freetls.fastly.net/www-images/480/product_images/fa3b22cdd22efb1775ac0e606d634a14.jpg',
      width: 800,
      height: 800
    }
  ]
};

const catalogue = {
  id: 'a2e458ad-28b3-11e5-8c52-061c7301af31',
  title: 'Dress',
  metaTitle: 'Baju Dress Gaun Wanita Model Panjang dan Pendek',
  items: [
    frixza,
    galzinsa
  ]
};

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,

    product: () => frixza,

    catalogue: () => catalogue
  },
};

module.exports = { resolvers };
