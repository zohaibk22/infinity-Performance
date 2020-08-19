import React from 'react'
import './Footer.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
    return (
        <div className = 'main-footer-container'>
         <div className="social-buttons">
        <a href="#">
          <FontAwesomeIcon
            className="social-icons"
            icon={["fab", "facebook-f"]}
          />
        </a>
        <a href="#">
          <FontAwesomeIcon
            className="social-icons"
            icon={["fab", "instagram"]}
          />
        </a>
        <a href="#">
          <FontAwesomeIcon className="social-icons" icon={["fab", "twitter"]} />
        </a>
        <a href="#">
          <FontAwesomeIcon
            className="social-icons"
            icon={["fab", "linkedin-in"]}
          />
        </a>
      </div>
            
            
        </div>

        //Credit to Zahra for helping me with this
    )
}


library.add(fab);