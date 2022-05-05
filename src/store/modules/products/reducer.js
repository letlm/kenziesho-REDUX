import { v1 } from "uuid";

const productsId = [
  {
    name: "Cleansing Foam - Espuma de limpeza profunda",
    price: 56.79,
    img: "https://images.pexels.com/photos/2587175/pexels-photo-2587175.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    name: "Fixador de maquiagem",
    price: 35.0,
    img: "https://images.pexels.com/photos/2587176/pexels-photo-2587176.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    name: "Paleta Brow de sombras",
    price: 34.0,
    img: "https://images.pexels.com/photos/2587208/pexels-photo-2587208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Batom líquido matte - Pink",
    price: 26.99,
    img: "https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Paleta, pincel para pó, base ultra, batom e iluminador",
    price: 109.99,
    img: "https://images.pexels.com/photos/2536009/pexels-photo-2536009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Máscara de cílios extra volume Extension",
    price: 32.99,
    img: "https://images.pexels.com/photos/2688992/pexels-photo-2688992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Duo pó compato + base líquida",
    price: 45.99,
    img: "https://images.pexels.com/photos/2693645/pexels-photo-2693645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Delineador black",
    price: 29.99,
    img: "https://images.pexels.com/photos/2697787/pexels-photo-2697787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Quarteto de pincéis",
    price: 38.99,
    img: "https://images.pexels.com/photos/2547461/pexels-photo-2547461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Base líquida ultra à prova d'água",
    price: 38.99,
    img: "https://images.pexels.com/photos/1703324/pexels-photo-1703324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const products = productsId.map((product) => ({ ...product, id: v1() }));

const productsReducer = (state = products, action) => {
  return state;
};

export default productsReducer;
