import React from "react";

const TinyLetter = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <form
        style={{
          border: "1px solid #ccc",
          padding: "3px",
          textAlign: "center"
        }}
        action="https://tinyletter.com/FodenDev"
        method="post"
        target="popupwindow"
        onSubmit="window.open('https://tinyletter.com/FodenDev', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
      >
        <p>
          <label htmlFor="tlemail">Enter your email address</label>
        </p>
        <p>
          <input
            type="text"
            style={{ width: "140px" }}
            name="email"
            id="tlemail"
          />
        </p>
        <input type="hidden" value="1" name="embed" />
        <input type="submit" value="Subscribe" />
        <p>
          <a
            href="https://tinyletter.com/FodenDev"
            target="_blank"
            rel="noopener noreferrer"
          >
            powered by TinyLetter
          </a>
        </p>
      </form>
    </>
  );
};

export default TinyLetter;
