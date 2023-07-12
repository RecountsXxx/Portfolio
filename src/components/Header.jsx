import {Component} from "react";
import logo from '../assets/logo.svg';
import github_logo from '../assets/logo_github.svg';
import linkedin_logo from '../assets/logo_linkedin.svg';
import '../css/Header.css';
class Header extends Component{
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark header-bg border-bottom py-3 ms-3 me-3">
                <div className="container-fluid">
                    <div className="me-5 navbar-brand title-font mt-1" href="#"><img className="me-3" src={logo} alt="..."/>Portfolio</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                        <ul className="ms-5 navbar-nav d-flex justify-content-between me-5">
                            <li className="nav-item">
                                <a className="nav-link link-font" aria-current="page" href="#">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link link-font" href="#">Technologies</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link link-font" href="#">About me</a>
                            </li>
                        </ul>
                        <div className="ms-5 navbar-brand" href="#">
                            <a href="#"><img className="me-2" src={github_logo} alt="..."/></a>
                            <a href="#"><img className="ms-2" src={linkedin_logo} alt="..."/></a>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
export default Header;