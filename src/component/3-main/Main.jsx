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
          className={isActive === "dev-web" ? "active" : null}
          onClick={() => {
            setisActive("dev-web");

            const filtred = myProjects.filter((item) => {
              return item.category === "dev-web";
            });

            setArr(filtred);
          }}
        >
          dev-web
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
                    <a href="https://github.com/yakomunatio" target="blanc"> <div className="icon-github"> </div> </a>
                  </div>
                  <a className="more flex" href="https://github.com/yakomunatio?tab=repositories" target="blanc">
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
