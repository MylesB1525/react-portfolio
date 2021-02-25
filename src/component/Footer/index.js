import React from "react";

function Footer() {
  return (
    <footer className="footer row bg-dark">
      <div className="col-md-12 text-center">
        <a
          href="https://www.linkedin.com/in/myles-burkemper-2563691b4/"
          target="_blank"
        >
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="https://www.github.com/MylesB1525" target="_blank">
          <i className="fa fa-github"></i>
        </a>
        <a href="mailto:myles.burkemper@gmail.com" target="_blank">
          <i className="fa fa-envelope"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
