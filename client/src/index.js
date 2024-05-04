
import './index.css';
import * as React from "react";
import AddProduct from './components/AddProduct';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home1 from './components/Home1';
import Login from './components/Login';
import Signup from './components/Signup';
import ProductDetail from './components/ProductDetail';
import MyProducts from './components/MyProducts';
import LikedProducts from './components/LikedProducts';
import MyProfile from './components/MyProfile';
import EditProduct from './components/EditProduct';
import First from './components/First';
import Website1 from './components/website1';
import Website2 from './components/website2';
import About from './components/about/About';
import CourseHome from './components/allcourses/CourseHome';
import Team from './components/team/Team';
import Team1 from './components/team/Team1';
import Team2 from './components/team/Team2';
import Team3 from './components/team/Team3';
import Team4 from './components/team/Team4';
import Team5 from './components/team/Team5';
import Team6 from './components/team/Team6';
import Team7 from './components/team/Team7';
import Team8 from './components/team/Team8';
import Pricing from './components/pricing/Pricing';
import Pricing1 from './components/pricing/Pricing1';
import Pricing2 from './components/pricing/Pricing2';
import Pricing3 from './components/pricing/Pricing3';
import Pricing4 from './components/pricing/Pricing4';
import Pricing5 from './components/pricing/Pricing5';
import Pricing6 from './components/pricing/Pricing6';
import Pricing7 from './components/pricing/Pricing7';
import Pricing8 from './components/pricing/Pricing8';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import HelpDesk from './components/help/Helpdesk';
import Home from './components/Home1';
import Home2 from './components/home/Home2';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<First />),
  },
  {
    path: "/home1",
    element: (<Home1 />),
  },
  {
    path: "/home",
    element: (<Website2 />),
  },
  {
    path: "/login",
    element: (<Login />),
  },
  {
    path: "/signup",
    element: (<Signup />),
  },
  {
    path: "/add-product",
    element: (<AddProduct />),
  },
  {
    path: "/edit-product/:productId",
    element: (<EditProduct />),
  },
  {
    path: "/liked-products",
    element: (<LikedProducts />),
  },
  {
    path: "/my-products",
    element: (<MyProducts />),
  },
  {
    path: "/product/:productId",
    element: (<ProductDetail />),
  },
  {
    path: "/my-profile",
    element: (<MyProfile />),
  },
  {
    path: "/first",
    element: (<First />),
  },
  {
    path: "/web1",
    element: (<Website1 />)
  },
  {
    path: "/web2",
    element: (<Website2 />)
  },
  {
    path: "/about",
    element: (<About />)
  },
  {
    path: "/courses",
    element: (<CourseHome />)
  },
  {
    path: "/team",
    element: (<Team />)
  },
  {
    path: "/team1",
    element: (<Team1 />)
  },
  {
    path: "/team2",
    element: (<Team2 />)
  },
  {
    path: "/team3",
    element: (<Team3 />)
  },
  {
    path: "/team4",
    element: (<Team4 />)
  },
  {
    path: "/team5",
    element: (<Team5 />)
  },
  {
    path: "/team6",
    element: (<Team6 />)
  },
  {
    path: "/team7",
    element: (<Team7 />)
  },
  {
    path: "/team8",
    element: (<Team8 />)
  },
  {
    path: "/pricing",
    element: (<Pricing />)
  },
  {
    path: "/pricing1",
    element: (<Pricing1 />)
  },
  {
    path: "/pricing2",
    element: (<Pricing2 />)
  },
  {
    path: "/pricing3",
    element: (<Pricing3 />)
  },
  {
    path: "/pricing4",
    element: (<Pricing4 />)
  },
  {
    path: "/pricing5",
    element: (<Pricing5 />)
  },
  {
    path: "/pricing6",
    element: (<Pricing6 />)
  },
  {
    path: "/pricing7",
    element: (<Pricing7 />)
  },
  {
    path: "/pricing8",
    element: (<Pricing8 />)
  },
  {
    path: "/journal",
    element: (<Blog />)
  },
  {
    path: "/contact",
    element: (<Contact />)
  },
  {
    path: "/helpdesk",
    element: (<HelpDesk />)
  },
  {
    path: "/home2",
    element: (<Home2 />)
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
