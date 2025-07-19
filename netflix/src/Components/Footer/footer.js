import React from "react";
import "./footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  return (
    <div className="Footer-outer-container">
      <div className="Footer-inner-container">
        <div className="Footer-icons">
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className="Footer-data">
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relation</li>
              <li>Legal Notice</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Help Center </li>
              <li>Jobs </li>
              <li>Cookie Preference</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards </li>
              <li>Terms of Use </li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center </li>
              <li>Privacy </li>
              <li>Contact Us </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relation</li>
              <li>Legal Notice</li>
            </ul>
          </div>
        </div>
        <div className="service-code">
          <p>Service Code </p>
        </div>
        <div className="copy-right">&copy;1997-2025 Netflix, INC.</div>
      </div>
    </div>
  );
};

export default Footer;
