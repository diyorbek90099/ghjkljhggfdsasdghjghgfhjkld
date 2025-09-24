// Restaurant menu database
const menuItems = [
  {
    id: 1,
    name: "O'sh",
    description: "An'anaviy o'zbek oshi, mol go'shti va sabzavotlar bilan tayyorlangan. Maxsus ziravorlar va piyoz bilan ta'mlangan.",
    price: 25000,
    image: "https://images.pexels.com/photos/2205270/pexels-photo-2205270.jpeg",
    category: 'food',
    rating: 4.9,
    cookTime: "30 daqiqa"
  },
  {
    id: 2,
    name: "Manti",
    description: "Yumshoq xamir ichida mol go'shti va piyoz bilan to'ldirilgan bug'da pishirilgan manti. Qaymoq va achchiq sous bilan.",
    price: 20000,
    image: "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg",
    category: 'food',
    rating: 4.8,
    cookTime: "25 daqiqa"
  },
  {
    id: 3,
    name: "Lag'mon",
    description: "Qo'l bilan tortilgan xamir va boy sho'rva, sabzavotlar va mol go'shti bilan. O'zbekiston mashhur taomi.",
    price: 18000,
    image: "https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg",
    category: 'food',
    rating: 4.7,
    cookTime: "20 daqiqa"
  },
  {
    id: 4,
    name: "Shashlik",
    description: "Maxsus marinadda saqlangan va cho'g'da pishirilgan mol go'shti shashlik. Yangi sabzavotlar bilan.",
    price: 35000,
    image: "https://aif-s3.aif.ru/images/032/013/5b7b0ccd4a7de622d56f24febdbacd6f.jpg",
    category: 'food',
    rating: 4.9,
    cookTime: "15 daqiqa"
  },
  {
    id: 5,
    name: "Oilaviy Set",
    description: "O'sh, manti, shashlik va salat. 4 kishilik oila uchun ideal set. Choy va non bilan birga.",
    price: 85000,
    image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg",
    category: 'set',
    rating: 5.0,
    cookTime: "40 daqiqa"
  },
  {
    id: 6,
    name: "Do'stlar Seti",
    description: "Turli shashlik turlari, fresh salat va issiq non. 6-8 kishilik do'stlar uchun mukammal tanlov.",
    price: 120000,
    image: "https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg",
    category: 'set',
    rating: 4.8,
    cookTime: "45 daqiqa"
  },
  {
    id: 7,
    name: "Romantik Set",
    description: "2 kishi uchun maxsus set: shashlik, salat, desert va shampan. Romantik kechga ideal.",
    price: 95000,
    image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
    category: 'set',
    rating: 4.9,
    cookTime: "35 daqiqa"
  },
  {
    id: 8,
    name: "Kok Choy",
    description: "An'anaviy o'zbek ko'k choyi, dala o'tlari va tabiiy honey bilan. Salomatlik uchun foydali.",
    price: 5000,
    image: "https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg",
    category: 'drink',
    rating: 4.6,
    cookTime: "5 daqiqa"
  },
  {
    id: 9,
    name: "Fresh Apelsin Sharbati",
    description: "Yangi siqilgan apelsin sharbati, tabiiy vitaminlar bilan boy. Salqin va tetiklantiruvchi.",
    price: 8000,
    image: "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg",
    category: 'drink',
    rating: 4.7,
    cookTime: "Tez"
  },
  {
    id: 10,
    name: "Ayron",
    description: "An'anaviy fermentlangan sut mahsuloti, tuz va ko'katlar bilan. O'zbek milliy ichimligi.",
    price: 6000,
    image: "https://yandex-images.clstorage.net/9IIk5a408/ae6079kHE6UJ/W6BBOeq2Ooetg-GEnRGzPf50Ol-aMYVqaT6Us3ktBQZU9EKJQXuETTCHV_dfuM-kGSCBs-_a14jvOWt5JpbRHA-VBWwOxjrW6TNFRT3Qsmk_oAsLu6HFH_n-kjUOekIQxlIljqacZbh1B1KzzkzbcqqBtKZ9fddqG0nLnuCjpAmbouJKTjaop8oRQIbtErJ6XwRLCYpU1uqs2IE2jShg8DWBZb21bqd4RYcwYIv9S6E5xVQXnY8lyZkaSP0QcYRZCjCxmV3U-ucb4dKWvNKgeiwFGSmaZUWZDjtDR53LEoEH8eZd51xnKAS0UrMq_VtDqTV1pd_cJxq5azrfcxKkC9iwwMh8FgrmegPihN9hMctfFJm6WoUFSN36wuQMufLRRmP1L8Te9jgkRzDR2I0oMfgEJiZPzASo-EoKLpEAJlrKEHBoXyQ75ikhUhd_IrLb3KfJOQpGF2l922JEXqlRIYbSNwy23yS6xLWSUniNOFGYV1eE3OxXqNlJ6xxTUvQIOBEzKjzlSbT7glFk74LBu141-Ql4J0fLX2sDZ48LciFlsSXcty3VqRRkEIBqPdtD-TfUda-NNvh7OduO8JE2WWnh8IuMJimWClFi1u4jwtgPxHgrefamq72qo-Yd-zDBl8PEHqc95nh11FIBWmyokcgHhzffvkWZKhiLDaFjlQkKMqIqLxXpZhjgULV9AaLYLxZZOEvkN3rOivM3rilSE3eRxZxmHiZ5VWQAsHm9iYDKVdU3_J1lqcjruuzyYdTpmALhuJ9Xa8QKEgOmv9GzyC20OAnbN0R6zYiSx59Z0xCV0gefVH73qgWl0mJpjpiRmxXmNv8OVJjZSgoe0tN1G7hwcZnOhph2qaFg9j-gYMucFosqK6dVGXxYksV_G1GTZfJkfic9pTjWl7Fg6g2qkdk2xgfdPeS7qKmY_FGTJoposAD73za45GhAEYfvIJA7_Gf7OYpmt3pOGZDGg",
    category: 'drink',
    rating: 4.5,
    cookTime: "Tez"
  }
];

const categoryNames = {
  all: 'Barchasi',
  food: 'Ovqatlar',
  set: 'Setlar', 
  drink: 'Ichimliklar'
};