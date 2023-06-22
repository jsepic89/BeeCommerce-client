import electronicsImage from '../images/electronics.jpg'
import jewelryImage from '../images/jewelry.jpg'
import mensClothing from '../images/mensClothing.jpg'
import womensClothing from '../images/womensClothing.jpg'
import appleWatch from '../images/applewatch.jpg'
import menJacket from '../images/menJacket.jpg'
import crocs from '../images/crocs.jpg'
import argentinaJersey from '../images/argentinaJersey.jpg'
import gamerChair from '../images/gamerChair.jpg'
import s23Ultra from '../images/s23Ultra.jpg'

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
      id:'6490c27c29df3251f2cb6349',
      image:appleWatch,
    },
    {
      id:'6490bc51b3db66024e4f50a0',
      image:menJacket,
    },
    {
      id:'6490c30129df3251f2cb6351',
      image:crocs,
    },
    {
      id:'6490c32829df3251f2cb6353',
      image:argentinaJersey,
    },
    {
      id:'6490c35529df3251f2cb6355',
      image:gamerChair,
    },
    {
      id:'6490c3a129df3251f2cb6357',
      image:s23Ultra,
    },
  ]

export { sliderData, categories, topProducts };