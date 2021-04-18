import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer_brand">jvalley</h3>
      <ul className="footer_menu">
        <li className="footer_menu_item">home</li>
        <li className="footer_menu_item">about</li>
        <li className="footer_menu_item">contact</li>
        <li className="footer_menu_item">gallery</li>
      </ul>
    </footer>
  );
}

export default Footer;
