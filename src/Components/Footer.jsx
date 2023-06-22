import React from "react";
import "../App.css";

const year = new Date();
function Footer() {
  return (
    <div className="footer">
      <p>Created by Bikash Das || Copyright &copy; {year.getFullYear()}</p>
    </div>
  );
}

export default Footer;
