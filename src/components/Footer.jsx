import React, { useState } from "react";
import "./styles/Footer.css";

function Footer() {
  const [foot, footSet] = useState("");
  return (
    <div>
      <div class="chat-container"></div>
      <button class="footer">Footer</button>
    </div>
  );
}

export default Footer;
