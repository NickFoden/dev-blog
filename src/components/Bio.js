import React from "react";
import styles from "./Bio.module.css";
import { getGravatarURL } from "../utils/getGravatarURL";

function Bio(props) {
  let photoURL = getGravatarURL({
    email: "nickfoden@gmail.com",
    size: 56
  });

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
