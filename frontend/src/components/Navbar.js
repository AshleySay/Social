import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'


export default function Navbar () {
    return (
        <div>
            <nav className="navbar navbar-expand-lg border border-primary rounded">
                <a className="navbar-brand" href="/">HiHelloHaiKu</a>
                <div>
                    <div className="navbar-nav">
                    <Link className="nav-link active" to="/">Login <span className="sr-only">(current)</span></Link>
                    <Link className="nav-link" to="/Register">Register</Link>
                    <Link className="nav-link" to="/New">New Post</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}