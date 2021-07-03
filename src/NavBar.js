import React from 'react'
import './Nav.css'
import {Route,BrowserRouter,Switch,NavLink} from 'react-router-dom'
export default function NavBar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="nav">
        <div className="container-fluid">
          <NavLink to='/' className="navbar-brand" href="#">Tasty <span style={{ color: "#f50f32" }}> Disheses</span></NavLink>
          <button className="navbar-toggler" style={{ backgroundColor: "#d63e55" }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" style={{ color: "white" }}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav" style={{ margin: 'auto', width: 'max-content' }}>
              <li className="nav-item">
                <NavLink className="nav-link active" style={{ color: "#f50f32" }} aria-current="page" to='/' >Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/about' >About</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
