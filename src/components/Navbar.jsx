/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import { FaCrown } from 'react-icons/fa'
import { AiFillCaretRight } from 'react-icons/ai'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
                <div className="container-fluid">
                    <Link to="#" className="navbar-brand pe-5 font-monospace">Interstellar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse btns" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <Link to="#" className="nav-link dropdown-toggle " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Internships
                                </Link>
                                <ul className="dropdown-menu ">
                                    <li><Link to="#" className="dropdown-item" >By Locations <AiFillCaretRight className='hide' /></Link>
                                        <ul class="dropdown-menu dropdown-submenu">
                                            <li>
                                                <Link to="#" class="dropdown-item" >Submenu item 1</Link>
                                            </li>
                                            <li>
                                                <Link to="#" class="dropdown-item" >Submenu item 2</Link>
                                            </li>
                                            <li>
                                                <Link to="#" class="dropdown-item" >Submenu item 2</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><Link to="#" className="dropdown-item" >By Positions <AiFillCaretRight className='hide' /></Link>
                                        <ul class="dropdown-menu dropdown-submenu">
                                            <li>
                                                <Link to="#" class="dropdown-item" >Submenu item 4</Link>
                                            </li>
                                            <li>
                                                <Link to="#" class="dropdown-item" >Submenu item 2</Link>
                                            </li>
                                            <li>
                                                <Link to="#" class="dropdown-item" >Submenu item 2</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><Link to="#" className="dropdown-item" >By Categories <AiFillCaretRight className='hide' /></Link>
                                        <ul class="dropdown-menu dropdown-submenu">
                                            <li>
                                                <Link to="#" class="dropdown-item" >Submenu item 7</Link>
                                            </li>
                                            <li>
                                                <Link to="#" class="dropdown-item" >Submenu item 2</Link>
                                            </li>
                                            <li>
                                                <Link to="#" class="dropdown-item" >Submenu item 2</Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="#" className="nav-link " >Finance Edu</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="#" className="nav-link d-inline-flex " >Premium <FaCrown /></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="#" className="nav-link " >Contact Us</Link>
                            </li>

                        </ul>
                        <ul className='navbar-nav d-flex flex-row'>
                            <li className="nav-item p-2">
                                <button className='btn btn-light'>Login</button>
                            </li>
                            <li className="nav-item p-2">
                                <button className='btn btn-success'>Register</button>
                            </li>
                        </ul>

                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Navbar
