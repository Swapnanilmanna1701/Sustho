import {
    GooeyMenu,
    GooeyMenuTrigger,
    GooeyMenuBefore,
    GooeyMenuAfter,
  } from "@/components/gooey-menu";
  import React from "react";
  import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaShare,
    FaTwitter,
  } from "react-icons/fa";
  
const GooeyShareDemo = () => {
    return (
      <div>
        <GooeyMenu>
          <GooeyMenuBefore>
            <FaLinkedin />
            <FaInstagram />
          </GooeyMenuBefore>
          <GooeyMenuTrigger>
            <FaShare />
          </GooeyMenuTrigger>
          <GooeyMenuAfter>
            <FaFacebook />
            <FaTwitter />
          </GooeyMenuAfter>
        </GooeyMenu>
      </div>
    );
  }
  export default GooeyShareDemo;
  