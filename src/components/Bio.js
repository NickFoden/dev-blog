import React from "react";
import styles from "./Bio.module.css";
import fodenCrest from "../assets/foden-arms.gif";

function Bio(props) {
  const photoURL = fodenCrest;

  return (
    <div
      className={`
      ${styles.Bio}
      ${props.className || ""}
    `}
    >
      <img src={photoURL} alt="Me" />
      <p>
        The web. As viewed by the foden devs. Mainly React, maybe some Unity,
        and maybe some reviews of killer Mexican restaurants
      </p>
    </div>
  );
}

export default Bio;
