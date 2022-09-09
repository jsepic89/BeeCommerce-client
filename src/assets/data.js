import electronicsImage from '../images/electronics.jpg'
import jewelryImage from '../images/jewelry.jpg'
import mensClothing from '../images/mensClothing.jpg'
import womensClothing from '../images/womensClothing.jpg'

const sliderData = [
    {
        id: 1,
        img: "https://www.kindpng.com/picc/m/22-223525_womens-fashion-transparent-background-hd-png-download.png",
        title: "AUTUMN COLLECTION",
        desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
        bg: "fcf1ed",
    },
    {
        id: 2,
        img: "https://i.ibb.co/DG69bQ4/2.png",
        title: "SUMMER COLLECTION",
        desc: "READY FOR THE SUMMER! ENJOY SUMMER VIBES WITH A 30% OFF FOR NEW ARRIVALS.",
        bg: "fcf1ed",
    },
    {
        id: 3,
        img: "https://i.ibb.co/cXFnLLV/3.png",
        title: "LOUNGEWEAR LOVE",
        desc: "ENJOY OUR NEW AUTHOR COLLECTION WITH OUT OF THIS WORLD COLLABS!",
        bg: "fbf0f4",
    }
];

const categories = [
    {
      id: 1,
      img: electronicsImage,
      title: "ELECTRONICS",
      category: "electronics"
      
    },
    {
      id: 2,
      img: jewelryImage,
      title: "JEWELRY",
      category: "jewelry"
    },
    {
      id: 3,
      img: womensClothing,
      title: "WOMEN'S CLOTHING",
      category: "womensClothing"
    },
    {
      id: 4,
      img: mensClothing,
      title: "MEN'S CLOTHING",
      category: "mensClothing"
    }
  ];

const topProducts = [
    {
      id:1,
      image:"https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
    },
    {
      id:3,
      image:"https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
    },
    {
      id:4,
      image:"https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png",
    },
    {
      id:5,
      image:"https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
    },
    {
      id:6,
      image:"https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
    },
    {
      id:8,
      image:"https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png",
    },
  ]

export { sliderData, categories, topProducts };