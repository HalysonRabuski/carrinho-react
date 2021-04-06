import Cart from "./pages/Cart/";
import Homepage from "./pages/Homepage/";

const routes = [
  {
    path: "/carrinho/:url",
    component: Cart,
  },
  {
    path: "/",
    component: Homepage,
  },
];

export default routes;
