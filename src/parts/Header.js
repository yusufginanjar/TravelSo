import React from 'react'
import Button from 'elements/Button'
import Logo from 'assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'


export default function Header(props) {
    const getNavLinkClass = path => {
          return (path === window.location.pathname)? "active" : ""
    }
    return (
        <header className="spacing-sm">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark row">
                    <a className="navbar-brand col-3 col-lg-2" href="/"><span>
                        <img src={Logo} className="img-fluid" width={50} alt=""/>
                            </span> TravSo </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    ><span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse col-lg-10"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav mr-auto">
                            <li className={ `nav-item ${getNavLinkClass("/")}` }>
                                <Button className="nav-link" type="link" href="/">
                                    Home
                                </Button>
                            </li>
                            <li className={ `nav-item ${getNavLinkClass("/hotplace")}` }>
                                <Button className="nav-link" type="link" href="/">
                                    Hot Places
                                </Button>
                            </li>
                            <li className={ `nav-item ${getNavLinkClass("/blog")}` }>
                                <Button className="nav-link" type="link" href="/">
                                    Blog
                                </Button>
                            </li>
                            <li className={ `nav-item ${getNavLinkClass("/contact")}` }>
                                <Button className="nav-link" type="link" href="/">
                                    Contact
                                </Button>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <Button type="button" className="btn text-white" hasShadow isPrimary>
                            Book Now<FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
                            </Button>
                            
                        </li>
                            <li className="nav-item">
                            <form className="form-inline">
                                <input type="text" id="search-input" />
                                <label for="search-input">
                                <Button className="btn btn-outline-transparent my-2 my-sm-0 text-white">
                                    <FontAwesomeIcon icon={faSearch}/>
                                </Button>
                                </label>
                            </form>
                            </li>
                        <li className="nav-item">
                            <select
                            className="custom-select bg-transparent mt-2 border-0 text-white"
                            id="inputGroupSelect01"
                            >
                            <option className="bg-secondary" value="1">
                                EN
                            </option>
                            <option className="bg-secondary" value="2">
                                ID
                            </option>
                            </select>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-outline-transparent my-2 my-sm-0 text-white">
                            <FontAwesomeIcon icon={faUser} />
                            </button>
                        </li>
                        </ul>
                    </div>
                </nav>
            </div>
                               
        </header>
    )
}
