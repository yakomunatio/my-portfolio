
import { useEffect, useState } from "react";
import Header from "./component/1-header/Header";
import Hero from "./component/2-hero/Hero";
import Main from "./component/3-main/Main";
import Contact from "./component/4-contact/Contact";
import Footer from "./component/5-footer/Footer";
function App() {

  useEffect(() => {

    window.addEventListener("scroll", () => {
      if (window.scrollY > 100){
        setScrolled(true)
      }
      else{
        setScrolled(false)
      }
    })
  });

  const [scrolled, setScrolled] = useState(false);
  return (

    <div id="up" className="container">

      <Header />

      <Hero />
      <div className="line"/>
      <Main />
      <div className="line"/>
      <Contact />
      <div className="line"/>
      <Footer />
     
     
       <a style={{opacity: scrolled? 1 : 0, transition:"1.5s"}} href="#up">
       <button className="scroll-to-up icon-keyboard_arrow_up"></button>
     </a>
     


    </div>

  );
}

export default App;
