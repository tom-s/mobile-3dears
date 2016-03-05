import React from 'react'

const Header = (props) => {
  return (
    <nav class="navbar navbar-default navbar-static-top">
   
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand em-text" href="/">
            <img alt="3D Ears" src="/images/logo.png"> 
          </a>
          </div>

          <div id="navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
             
            {/*
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/exercises">Dashboard</a></li>
              <li><a href="/logout">Log out</a></li>

            {{else}}
              <li><a href="/exercises">Exercises</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/sign_up">Create Account</a></li>
              <li><a href="/sign_in">Sign in</a></li>

            */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header