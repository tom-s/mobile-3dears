import React from 'react'
import { Link } from 'react-router'

const Footer = (props) => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <ul>
              <li className="FooterLink"><Link className="Link" to="/about">About</Link></li>
              <li className="FooterLink"><Link className="Link" to="/contact">Contact</Link></li>
              <li className="FooterLink"><Link className="Link" to="/terms">Terms &amp; Conditions</Link></li>
              <li className="FooterLink"><Link className="Link" to="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
         <div className="col-sm-6">
           <p className="Copyright">© 2016 3D Ears, All Rights Reserved</p>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Footer