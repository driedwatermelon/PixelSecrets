// pages/about.js

import React from "react";
import './about.css'

const About = () => {
  return (
    <div className="container">
      <h1 className="heading">Introduction</h1>
      <hr className="divider" />
      <p className="paragraph">
      Hat.sh is a free opensource web app that provides secure file encryption in the browser.
      </p>
      <h1 className="heading">Features</h1>
      <hr className="divider" />
      <h2 className="subheading">Functionalites</h2>
      <ul>
       <li>Secure encryption/decryption of files with passwords or keys.</li> 
       <li>Secure random password generation.</li> 
       <li>Asymmetric key pair generation.</li> 
       <li>Authenticated key exchange.</li> 
       <li>Password strength estimation</li>
      </ul>
    </div>
  );
};

export default About;
