import { useEffect } from "react";
import { Projects } from "./components/ProjectsList/index";
import "./css/global.scss";
import styles from "./App.module.scss";

export const App = () => {
  // Function to add class to the <html> element
  const addClassToHTML = () => {
    if (window.innerWidth >= 960) {
      document.documentElement.classList.add("noscrollbar");
    } else {
      document.documentElement.classList.remove("noscrollbar");
    }
  };

  // useEffect hook to add class initially and on window resize
  useEffect(() => {
    // Add class initially
    addClassToHTML();

    // Add event listener for window resize
    window.addEventListener("resize", addClassToHTML);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener("resize", addClassToHTML);
    };
  }, []); // Empty dependency array ensures this effect only runs once

  return (
    <div className={styles.container}>
      <header className={styles.fade}>
        <h1 className={styles.myname}>Kevin Leung</h1>
        <h2>
          I'm a <span className={styles.myskills}>Web/HTML Programmer</span>
        </h2>
        <h2 className={styles.mywork} id="myportfolio">
          My portfolio
        </h2>
      </header>

      <Projects />
    </div>
  );
};
