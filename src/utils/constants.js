import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "products",
    url: "/products",
  },
  {
    id: 3,
    text: "about",
    url: "/about",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
];

export const products_url = "https://ecom-api.netlify.app/api/products";

export const single_product_url =
  "https://ecom-api.netlify.app/api/product?id=";
// export const products_url = "https://course-api.com/react-store-products";

// export const single_product_url = `https://course-api.com/react-store-single-product?id=`;

// oflline data
export const products = [
  {
    id: "recZkNf2kwmdBcqd0",
    name: "accent chair",
    price: 25999,
    image:
      "https://dl.airtable.com/.attachmentThumbnails/e8bc3791196535af65f40e36993b9e1f/438bd160",
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "marcos",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "office",
    shipping: true,
  },
  {
    id: "recEHmzvupvT8ZONH",
    name: "albany sectional",
    price: 109999,
    image:
      "https://dl.airtable.com/.attachmentThumbnails/0be1af59cf889899b5c9abb1e4db38a4/d631ac52",
    colors: ["#000", "#ffb900"],
    company: "liddy",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "living room",
  },
  {
    id: "rec5NBwZ5zCD9nfF0",
    name: "albany table",
    price: 309999,
    image:
      "https://dl.airtable.com/.attachmentThumbnails/7478483f40a2f56662a87b304bd4e104/707d397f",
    colors: ["#ffb900", "#0000ff"],
    company: "liddy",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "kitchen",
  },
  {
    id: "recd1jIVIEChmiwhe",
    name: "armchair",
    price: 12599,
    image:
      "https://dl.airtable.com/.attachmentThumbnails/530c07c5ade5acd9934c8dd334458b86/cf91397f",
    colors: ["#000", "#00ff00", "#0000ff"],
    company: "marcos",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "bedroom",
    shipping: true,
  },
  {
    id: "recoM2MyHJGHLVi5l",
    name: "bar stool",
    price: 4099,
    image:
      "https://dl.airtable.com/.attachmentThumbnails/a6119fabf7256049cc0e8dbcdf536c9c/b0153f66",
    colors: ["#000"],
    company: "liddy",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "dining",
    shipping: true,
  },
  {
    id: "recotY5Nh00DQFdkm",
    name: "dining table",
    price: 42999,
    image:
      "https://dl.airtable.com/.attachmentThumbnails/7a38cf782907773d9900165530cfa583/d9f41960",
    colors: ["#00ff00", "#0000ff", "#ff0000"],
    company: "ikea",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "dining",
    shipping: true,
  },
  {
    id: "rec1Ntk7siEEW9ha1",
    name: "emperor bed",
    price: 23999,
    image:
      "https://dl.airtable.com/.attachmentThumbnails/0446e84c5bca9643de3452a61b2d6195/1b32f48b",
    colors: ["#0000ff", "#000"],
    company: "ikea",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "bedroom",
    shipping: true,
  },
  {
    id: "recNZ0koOqEmilmoz",
    name: "entertainment center",
    price: 59999,
    image:
      "https://dl.airtable.com/.attachmentThumbnails/65708b701baa3a84883ad48301624b44/2de058af",
    featured: true,
    colors: ["#000", "#ff0000"],
    company: "caressa",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "living room",
    shipping: true,
  },
  {
    id: "recrfxv3EwpvJwvjq",
    name: "high-back bench",
    price: 39999,
    image:
      "https://dl.airtable.com/.attachmentThumbnails/1af97a4d3eb28563962d8e3520727ffc/1b9cc17f",
    featured: true,
    colors: ["#000", "#00ff00"],
    company: "ikea",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "office",
    shipping: true,
  },
  {
    id: "recoW8ecgjtKx2Sj2",
    name: "leather chair",
    price: 20099,
    image:
      "https://dl.airtable.com/.attachmentThumbnails/d3174ad774fc628e1d50b77e3bec399f/1de7b97a",
    colors: ["#ff0000", "#ffb900", "#00ff00"],
    company: "caressa",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "bedroom",
  },
  {
    id: "recEOA6qtDag1hRbU",
    name: "leather sofa",
    price: 99999,
    image:
      "https://dl.airtable.com/.attachmentThumbnails/a2f371071cf292badbb621294758b600/ca963b31",
    colors: ["#00ff00", "#0000ff"],
    company: "caressa",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "office",
  },
  {
    id: "recoAJYUCuEKxcPSr",
    name: "modern bookshelf",
    price: 31999,
    image:
      "https://dl.airtable.com/.attachmentThumbnails/1e4a818f5184993e430420a152315b40/873c7094",
    featured: true,
    colors: ["#ffb900", "#ff0000", "#00ff00"],
    company: "caressa",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "kids",
  },
  {
    id: "recQ0fMd8T0Vk211E",
    name: "modern poster",
    price: 3099,
    image:
      "https://dl.airtable.com/.attachmentThumbnails/89ba7458c24252be77f5a835dd398880/c13ef359",
    colors: ["#000"],
    company: "liddy",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "living room",
    shipping: true,
  },
  {
    id: "rec7CjDWKRgNQtrKe",
    name: "shelf",
    price: 30999,
    image:
      "https://dl.airtable.com/.attachmentThumbnails/2fd8fb02cc6fa5620504de41fbb662f9/3157a507",
    colors: ["#00ff00"],
    company: "ikea",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "living room",
  },
  {
    id: "recF0KpwlkF7e8kXO",
    name: "simple chair",
    price: 109999,
    image:
      "https://dl.airtable.com/.attachmentThumbnails/c9d46754faf94d2283e15ac3b8accb9a/a6c343c8",
    colors: ["#0000ff"],
    company: "liddy",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "living room",
    shipping: true,
  },
  {
    id: "recs5BSVU3qQrOj4E",
    name: "sofa set",
    price: 129999,
    image:
      "https://dl.airtable.com/.attachmentThumbnails/fe9d4f25fee307f6ae5b7a462b70b942/031464c4",
    colors: ["#00ff00", "#ffb900"],
    company: "marcos",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "living room",
    shipping: true,
  },
  {
    id: "recroK1VD8qVdMP5H",
    name: "suede armchair",
    price: 15999,
    image:
      "https://dl.airtable.com/.attachmentThumbnails/1cf03bfcee117bd92273d996a82a1534/47ef57c7",
    colors: ["#ffb900"],
    company: "caressa",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "office",
  },
  {
    id: "rec7JInsuCEHgmaGe",
    name: "utopia sofa",
    price: 79999,
    image:
      "https://dl.airtable.com/.attachmentThumbnails/5ebc46a9e31a09cbc6078190ab035abc/8480b064",
    featured: true,
    colors: ["#ff0000", "#00ff00"],
    company: "liddy",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "living room",
  },
  {
    id: "rec3jeKnhInKHJuz2",
    name: "vase table",
    price: 120999,
    image:
      "https://dl.airtable.com/.attachmentThumbnails/1e222e36e935db2695c33e3d30c2e482/91b542e0",
    featured: true,
    colors: ["#ff0000"],
    company: "marcos",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "office",
  },
  {
    id: "recv2ohxljlK2FZO7",
    name: "wooden bed",
    price: 250099,
    image:
      "https://dl.airtable.com/.attachmentThumbnails/1d692023f254ca11a3d1a3628d198081/e922a771",
    colors: ["#000", "#ffb900"],
    company: "ikea",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "bedroom",
  },
  {
    id: "recJIjREF3dlFi3sR",
    name: "wooden desk",
    price: 150999,
    image:
      "https://dl.airtable.com/.attachmentThumbnails/e3fa7aa6dc112c4998da18bb401bd70f/61e2fb5e",
    colors: ["#000"],
    company: "ikea",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "office",
    shipping: true,
  },
  {
    id: "recm7wC8TBVdU9oEL",
    name: "wooden desk",
    price: 40099,
    image:
      "https://dl.airtable.com/.attachmentThumbnails/954dfa5c8ce3df84a3c7254481464366/a3bd8c4a",
    colors: ["#0000ff", "#00ff00"],
    company: "ikea",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "office",
  },
  {
    id: "rectfNsySwAJeWDN2",
    name: "wooden table",
    price: 234999,
    image:
      "https://dl.airtable.com/.attachmentThumbnails/e8c2f821d05b9e4e5aa450a19e62ffa5/271fc3f5",
    featured: true,
    colors: ["#ffb900", "#ff0000"],
    company: "caressa",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "kitchen",
    shipping: true,
  },
];

export const single_product = {
  id: "rectfNsySwAJeWDN2",
  name: "wooden table",
  price: 234999,
  featured: true,
  images: [
    {
      id: "attiDFaaWPfwKl4td",
      width: 1280,
      height: 1891,
      url: "https://dl.airtable.com/.attachments/2581b1487fb0dd13c4abea9274f72f25/9304207f/pexels-dominika-roseclay-1139785.jpg",
      filename: "pexels-dominika-roseclay-1139785.jpg",
      size: 203105,
      type: "image/jpeg",
      thumbnails: {
        small: {
          url: "https://dl.airtable.com/.attachmentThumbnails/3fe189fc65eb2ffaf6f0e378b061fc86/689a8b1b",
          width: 24,
          height: 36,
        },
        large: {
          url: "https://dl.airtable.com/.attachmentThumbnails/e8c2f821d05b9e4e5aa450a19e62ffa5/271fc3f5",
          width: 512,
          height: 756,
        },
        full: {
          url: "https://dl.airtable.com/.attachmentThumbnails/8ff12aa9815caaf0f74be2cc412b537d/fa7a1f68",
          width: 3000,
          height: 3000,
        },
      },
    },
    {
      id: "attUaphNQKvkYAD1s",
      width: 1000,
      height: 667,
      url: "https://dl.airtable.com/.attachments/fd71dfd92540388a86553657e3d7d740/faadea06/extra-1.jpeg",
      filename: "extra-1.jpeg",
      size: 102108,
      type: "image/jpeg",
      thumbnails: {
        small: {
          url: "https://dl.airtable.com/.attachmentThumbnails/c38b793c1cc5386fbff2312555a7b54c/0db7abd2",
          width: 54,
          height: 36,
        },
        large: {
          url: "https://dl.airtable.com/.attachmentThumbnails/c78fa03230949ea162cdecccc41eb330/972ad12a",
          width: 768,
          height: 512,
        },
        full: {
          url: "https://dl.airtable.com/.attachmentThumbnails/21cc17d2e439f1d8263001c1162a96d9/c2c5ece2",
          width: 3000,
          height: 3000,
        },
      },
    },
    {
      id: "attFKjks3xBxAXFG3",
      width: 1000,
      height: 714,
      url: "https://dl.airtable.com/.attachments/24680eff55203fd4b98bb5925eea1b9d/05cffb83/extra-2.jpeg",
      filename: "extra-2.jpeg",
      size: 84418,
      type: "image/jpeg",
      thumbnails: {
        small: {
          url: "https://dl.airtable.com/.attachmentThumbnails/d764d10469f315e7c630f2a0d75701e7/3b40ce40",
          width: 50,
          height: 36,
        },
        large: {
          url: "https://dl.airtable.com/.attachmentThumbnails/d8319515c759325f6255394fab99e387/fa5553b5",
          width: 717,
          height: 512,
        },
        full: {
          url: "https://dl.airtable.com/.attachmentThumbnails/c1493fdb32598cea9379d536d198db92/cc7fdcdd",
          width: 3000,
          height: 3000,
        },
      },
    },
    {
      id: "atti9HFy8iGNDA2jw",
      width: 1000,
      height: 650,
      url: "https://dl.airtable.com/.attachments/f7762eb7e7f469b5a16df46e9a728c2a/88a6950c/extra-3.jpeg",
      filename: "extra-3.jpeg",
      size: 107838,
      type: "image/jpeg",
      thumbnails: {
        small: {
          url: "https://dl.airtable.com/.attachmentThumbnails/12d47498c88f7bb2781fa36716022b44/997e2a09",
          width: 55,
          height: 36,
        },
        large: {
          url: "https://dl.airtable.com/.attachmentThumbnails/31c44c6e79518113e49770b125b15ff1/bf85061f",
          width: 788,
          height: 512,
        },
        full: {
          url: "https://dl.airtable.com/.attachmentThumbnails/493e11c9cf086bfbfcd8e812b9b08f9a/87fe37ec",
          width: 3000,
          height: 3000,
        },
      },
    },
    {
      id: "attxt3F3OznL1Cxh8",
      width: 1000,
      height: 667,
      url: "https://dl.airtable.com/.attachments/2c4919da94867198d749d2e2a9adc3a7/4475c599/extra-4.jpeg",
      filename: "extra-4.jpeg",
      size: 99481,
      type: "image/jpeg",
      thumbnails: {
        small: {
          url: "https://dl.airtable.com/.attachmentThumbnails/266fe245a48c808535df293146d397b3/4f3d36e7",
          width: 54,
          height: 36,
        },
        large: {
          url: "https://dl.airtable.com/.attachmentThumbnails/4647162095d4d7982a269c43170de895/292a2006",
          width: 768,
          height: 512,
        },
        full: {
          url: "https://dl.airtable.com/.attachmentThumbnails/0da674831a15603e5c71348442f8e5af/ee4bb3eb",
          width: 3000,
          height: 3000,
        },
      },
    },
  ],
  description:
    "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
  colors: ["#ffb900", "#ff0000"],
  company: "caressa",
  stock: 5,
  stars: 3.4,
  reviews: 35,
  category: "kitchen",
  shipping: true,
};
