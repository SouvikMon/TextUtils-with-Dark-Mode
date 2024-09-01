import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} sticky-top`}>
    <div className="container-fluid">
    <p className={`navbar-brand my-1 text-${(props.mode === 'light'?'dark':'light')}`}>{props.siteName}</p>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link active text-${(props.mode === 'light')?'dark':'light'}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link text-${(props.mode === 'light')?'dark':'light'}`} to="/about">About</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className={`nav-link dropdown-toggle text-${(props.mode === 'light')?'dark':'light'}`} to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {props.dropdown}
          </Link>
          <ul className={`dropdown-menu bg-${props.mode} border border-ligh`}>
            <li><Link className={`dropdown-item text-${(props.mode === 'light')?'dark':'light'}`} to="/">Profile(NA)</Link></li>
            <li><Link className={`dropdown-item text-${(props.mode === 'light')?'dark':'light'}`} to="/">Achievements(NA)</Link></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className={`btn btn-outline-${props.mode === 'light'?'success':'primary'}`} type="submit">Search</button>
      </form>
      <div className="form-check form-switch">
          <input className="form-check-input mx-1" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label mx-2" htmlFor="flexSwitchCheckDefault">{(props.mode === 'light')?'☀':'☽'}</label>
      </div>
    </div>
  </div>
</nav>
  )
}
