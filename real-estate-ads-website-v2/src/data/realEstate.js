import prop1 from "../img/prop1.jpg";
import prop2 from "../img/prop2.jpg";
import prop3 from "../img/prop3.jpg";
import prop4 from "../img/prop4.jpg";
import prop5 from "../img/prop5.jpg";
import prop6 from "../img/prop6.jpg";

const DUMMY_REALESTATE = [
  {
    id: "1",
    transaction: "Location",
    title: "Maison 1 étage",
    price: "1 670 000 €",
    location: "Le Touquet-Paris-Plage",
    pieces: "6",
    bedrooms: "4",
    surface: "200",
    description: "Description test",
    photo: {
      p1: prop1,
    },
  },
  {
    id: "2",
    transaction: "Achat",
    title: "Appartement haussmannien",
    price: "1 500 000€",
    location: "Paris 7ème",
    pieces: "5",
    bedrooms: "3",
    surface: "130",
    description: "Description test",
    photo: {
      p1: prop2,
    },
  },
  {
    id: "3",
    transaction: "Achat",
    title: "Maison 1 étage",
    price: "500 000 €",
    location: "Chantilly",
    pieces: "3",
    bedrooms: "2",
    surface: "90",
    description: "Description test",
    photo: {
      p1: prop3,
    },
  },
  {
    id: "4",
    transaction: "Location",
    title: "Maison de charme",
    price: "1 230 000€",
    location: "Chantilly",
    pieces: "6",
    bedrooms: "4",
    surface: "150",
    description: "Description test",
    photo: {
      p1: prop4,
    },
  },
  {
    id: "5",
    transaction: "Location",
    title: "Appartement avec vue sur la Tour Eiffel",
    price: "3 200 000 €",
    location: "Paris 16ème",
    pieces: "3",
    bedrooms: "1",
    surface: "150",
    description: "Description test",
    photo: {
      p1: prop5,
    },
  },
  {
    id: "6",
    transaction: "Location",
    title: "Splendide Château de Normandie",
    price: "1 420 000€",
    location: "Bayeux",
    pieces: "12",
    bedrooms: "8",
    surface: "50",
    description: "Description test",
    photo: {
      p1: prop6,
    },
  },
];

export default DUMMY_REALESTATE;
