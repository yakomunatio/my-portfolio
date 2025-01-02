import { useState } from "react";
import "./main.css";
import {myProjects} from "./myProjects";


const Main = () => {
  const [isActive, setisActive] = useState("A");

  const [arr, setArr] = useState(myProjects);

  return (
    <main className="flex" id="projects">
      <section className="left-section flex">
        <button
          className={isActive === "All" ? "active" : null}
          onClick={() => {
            setisActive("All");

            setArr(myProjects);
          }}
        >
          All Projects
        </button>

        <button
          className={isActive === "Css" ? "active" : null}
          onClick={() => {
            setisActive("Css");

            const filtred = myProjects.filter((item) => {
              return item.category === "css";
            });

            setArr(filtred);
          }}
        >
          HTML & Css
        </button>

        <button
          className={isActive === "Js" ? "active" : null}
          onClick={() => {
            setisActive("Js");

            const filtred = myProjects.filter((item) => {
              return item.category === "js";
            });

            setArr(filtred);
          }}
        >
          JavaScript
        </button>

        <button
          className={isActive === "React" ? "active" : null}
          onClick={() => {
            setisActive("React");

            const filtred = myProjects.filter((item) => {
              return item.category === "react";
            });

            setArr(filtred);
          }}
        >
          React
        </button>

        <button
          className={isActive === "O" ? "active" : null}
          onClick={() => {
            setisActive("O");

            const filtred = myProjects.filter((item) => {
              return item.category === "o";
            });

            setArr(filtred);
          }}
        >
          Other
        </button>
      </section>

      <section className="flex right-section">
        {arr.map((item) => {
          return (
            <article key={item.imagepath} className="card">
              <img width={300} src={item.imagepath} alt="" />

              <div style={{ width: "250px" }} className="box">
                <h1 className="title">{item.projectTitle}</h1>
                <p className="sub-title">{item.decription}</p>
                <div className="flex icons">
                  <div style={{ gap: "10px" }} className="flex">
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
                  </div>

                  <a className="more flex" href="">
                    more
                    <span
                      style={{ alignSelf: "end" }}
                      className="icon-arrow-right2"
                    ></span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Main;
