import monkey from "./Imges/monkey.jpeg";
import monkey2 from "./Imges/monkey2.jpg";
import monkey3 from "./Imges/monkey3.png";
import monkey4 from "./Imges/monkey4.jpg";
import cat from "./Imges/cat.jpeg";
import dog from "./Imges/dog.jpeg";
import elephant from "./Imges/elephant.jpeg";
import apple from "./Imges/apple.jpeg";
import orange from "./Imges/orange.jpg";
import peach from "./Imges/peach.png";
import mango from "./Imges/mango.jpeg";
import tiger from "./Imges/tiger.jpeg";
import fruits from "./Imges/fruits.png";

const Data = [
  {
    id: 0,
    imgsrc: monkey,
    imgsrc2: monkey2,
    imgsrc3: monkey3,
    imgsrc4: monkey4,
    name: "Monkey",
    desc: "This is a monkey",
    desc2:
      "This is where some detailes on monkies would go. This monkey done seent some shit.",
    price: 5.5,
  },
  {
    id: 1,
    imgsrc: cat,
    name: "Kitten",
    desc: "This is a kitten",
    desc2:
      "This is where some detailes on kittens would go. Shout out kittens for being adorable.",
    price: 10.0,
  },
  {
    id: 2,
    imgsrc: dog,
    name: "Dog",
    desc: "This is a puppy",
    desc2:
      "This is where some detailes on puppies would go. Shout out puppies for being adorable.",
    price: 5.0,
  },
  {
    id: 3,
    imgsrc: elephant,
    name: "Elephant",
    desc: "This is a elephant",
    desc2:
      "This is where some detailes on elephant would go. Damn nature, you scary.",
    price: 15.0,
  },
  {
    id: 4,
    imgsrc: apple,
    name: "Apple",
    desc: "This is a apple",
    desc2:
      "This is where some detailes on apples would go. Shout out apples for being delicious.",
    price: 1.0,
  },
  {
    id: 5,
    imgsrc: orange,
    name: "Orange",
    desc: "This is a orange",
    desc2:
      "This is where some detailes on oranges would go. Shout out oranges for being delicious.",
    price: 1.1,
  },
  {
    id: 6,
    imgsrc: peach,
    name: "Peach",
    desc: "This is a peach",
    desc2:
      "This is where some detailes on peaches would go. Shout out peaches for being delicious.",
    price: 1.5,
  },
  {
    id: 7,
    imgsrc: mango,
    name: "Mango",
    desc: "This is a mango",
    desc2:
      "This is where some detailes on mangos would go. Shout out mangos for being delicious.",
    price: 2.0,
  },
  {
    id: 8,
    imgsrc: tiger,
    name: "Tiger",
    desc: "This is a tiger",
    desc2:
      "This is where some detailes on tiger would go. I'm like hey whats up, hello.",
    price: 17.3,
  },
  {
    id: 9,
    imgsrc: fruits,
    name: "Fruits",
    desc: "This is a fruits",
    desc2:
      "This is where some details on fruits would go. 2Chainz but I got me a few on.",
    price: 17.3,
  },
];

export default Data;
