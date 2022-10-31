import React from 'react'
import './Navbar.css';
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
   <>
   <nav  className="navbar navbar-expand-lg navbar-dark  transparent" >
  <Link className="navbar-brand title" to="/home">
    SIMPLE TOKEN
  </Link>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNavAltMarkup"
    aria-controls="navbarNavAltMarkup"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link className="nav-item nav-link margin" to ="/home">
        Tranfer <span className="sr-only">(current)</span>
      </Link>
      <Link className="nav-item nav-link  margin" to="/allocation">
        Allocation <span className="sr-only">(current)</span>
      </Link>
      <Link className="nav-item nav-link margin" href="#">
            About <span className="sr-only">(current)</span>
      </Link>
      
    </div>
  </div>
</nav>

   </>
  )
}
