import React from "react";
import FooterLinks from "./FooterLinks";

function Footer() {
  return (
    <>
      <footer className="bg-tertiary py-6">
        <div className="container mx-auto">
          <FooterLinks />
        </div>
      </footer>
    </>
  );
}

export default Footer;
