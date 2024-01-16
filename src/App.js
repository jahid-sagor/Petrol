import About from "./components/About";
import Banner from "./components/Banner";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Map from "./components/Map";
import Menu from "./components/Menu";
import Partner from "./components/Partner";
import Service from "./components/Service";

export default function App() {
  return (
    <>
      <Header/>
      <Menu/>
      <Banner/> 
      <About/>
      <Service/>
      <Gallery/>
      <Partner/>
      <Blog/>
      <Map/>
      <Footer/>
    </>
  )
}