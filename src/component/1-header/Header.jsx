import { useEffect, useState } from "react";
import "./header.css";
const Header = () => {
  const [showModal, setshowModal] = useState(false);
  const [mode, setMode] = useState(localStorage.currentMode) ?? "dark";

  useEffect(() => {
    if(mode === "light"){
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
    else{
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
    
  }, [mode]);


  return (
    <header className=" flex">

      
      <button
        onClick={() => {
          setshowModal(true);
        }}
        className="menu icon-menu flex"
      />
        
      
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <button onClick={() => {
        // Send the value to localStorage
    localStorage.setItem("currentMode", mode === "dark"? "light" : "dark");
    
    // Optionally check if it was stored correctly
    setMode(localStorage.getItem("currentMode"))
        
      }} className="theme flex">
        {mode === "light" ? (<span className="icon-moon-o"></span>) : (<span className="icon-sun"></span>)}
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button
                className="icon-cross"
                onClick={() => {
                  setshowModal(false);
                }}/>
            
              
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      )}

    </header>
  );
};

export default Header;
