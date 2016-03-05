import React from 'react'

const Footer = (props) => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <ul>
              <li className="FooterLink"><a className="Link" href="/about">About</a></li>
              <li className="FooterLink"><a className="Link" href="/contact">Contact</a></li>
              <li className="FooterLink"><a className="Link" href="/terms">Terms &amp; Conditions</a></li>
              <li className="FooterLink"><a className="Link" href="/privacy">Privacy Policy</a></li>
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