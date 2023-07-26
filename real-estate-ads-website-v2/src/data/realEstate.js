import ARA_prop1 from "../img/properties/ARA_prop1.jpg";
import ARA_prop2 from "../img/properties/ARA_prop2.jpg";
import ARA_prop3 from "../img/properties/ARA_prop3.jpg";
import BRE_prop1 from "../img/properties/BRE_prop1.jpg";
import HDF_prop1 from "../img/properties/HDF_prop1.jpg";
import HDF_prop2 from "../img/properties/HDF_prop2.jpg";
import HDF_prop3 from "../img/properties/HDF_prop3.jpg";
import IDF_prop1 from "../img/properties/IDF_prop1.jpg";
import IDF_prop2 from "../img/properties/IDF_prop2.jpg";
import NOR_prop1 from "../img/properties/NOR_prop1.jpg";

const DUMMY_REALESTATE = [
  {
    id: "1",
    transaction: "Achat",
    title: "Chalet d'exception",
    price: "6 575 000",
    location: "Megève",
    region: "Auvergne-Rhône-Alpes",
    pieces: "8",
    bedrooms: "6",
    surface: "500",
    description: "Description test",
    photo: {
      p1: ARA_prop1,
    },
  },
  {
    id: "2",
    transaction: "Location",
    title: "Duplex lumineux en centre ville",
    price: "4 500",
    location: "Annecy",
    region: "Auvergne-Rhône-Alpes",
    pieces: "4",
    bedrooms: "3",
    surface: "150",
    description: "Description test",
    photo: {
      p1: ARA_prop2,
    },
  },
  {
    id: "3",
    transaction: "Achat",
    title: "Villa exposée sud est",
    price: "700 000",
    location: "Annecy",
    region: "Auvergne-Rhône-Alpes",
    pieces: "5",
    bedrooms: "3",
    surface: "150",
    description: "Description test",
    photo: {
      p1: ARA_prop3,
    },
  },
  {
    id: "4",
    transaction: "Achat",
    title: "Maison de bord de mer",
    price: "5 000 000",
    location: "Baden",
    region: "Bretagne",
    pieces: "16",
    bedrooms: "10",
    surface: "450",
    description: "Description test",
    photo: {
      p1: BRE_prop1,
    },
  },
  {
    id: "5",
    transaction: "Location",
    title: "Maison 1 étage",
    price: "3 500",
    location: "Le Touquet-Paris-Plage",
    region: "Hauts-de-France",
    pieces: "6",
    bedrooms: "4",
    surface: "200",
    description: "Description test",
    photo: {
      p1: HDF_prop1,
    },
  },
  {
    id: "6",
    transaction: "Achat",
    title: "Maison 1 étage",
    price: "500 000",
    location: "Chantilly",
    region: "Hauts-de-France",
    pieces: "3",
    bedrooms: "2",
    surface: "90",
    description: "Description test",
    photo: {
      p1: HDF_prop2,
    },
  },
  {
    id: "7",
    transaction: "Location",
    title: "Maison de charme",
    price: "2 000",
    location: "Chantilly",
    region: "Hauts-de-France",
    pieces: "6",
    bedrooms: "4",
    surface: "150",
    description: "Description test",
    photo: {
      p1: HDF_prop3,
    },
  },
  {
    id: "8",
    transaction: "Achat",
    title: "Appartement haussmannien",
    price: "1 500 000",
    location: "Paris 7ème",
    region: "Île-de-France",
    pieces: "5",
    bedrooms: "3",
    surface: "130",
    description: "Description test",
    photo: {
      p1: IDF_prop1,
    },
  },
  {
    id: "9",
    transaction: "Location",
    title: "Appartement avec vue sur la Tour Eiffel",
    price: "8 000",
    location: "Paris 16ème",
    region: "Île-de-France",
    pieces: "3",
    bedrooms: "1",
    surface: "150",
    description: "Description test",
    photo: {
      p1: IDF_prop2,
    },
  },
  {
    id: "10",
    transaction: "Location",
    title: "Splendide Château de Normandie",
    price: "5 000",
    location: "Bayeux",
    region: "Normandie",
    pieces: "12",
    bedrooms: "8",
    surface: "500",
    description: "Description test",
    photo: {
      p1: NOR_prop1,
    },
  },
];

export default DUMMY_REALESTATE;
