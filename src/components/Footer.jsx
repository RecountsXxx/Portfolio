import {Component} from "react";
import github_logo from "../assets/logo_github.svg";
import linkedin_logo from "../assets/logo_linkedin.svg";
import logo from '../assets/logo.svg';
import '../css/Footer.css';
class Footer extends Component{
    render() {
        return(
            <div className="container-fluid footer-bg">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
                    <div className="col-md-4 d-flex align-items-center ms-2">
                        <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                            <img src={logo} alt="..."/>
                        </a>
                        <span className="mb-3 mb-md-0 text-white">Email: bogdankapriyanua@gmail.com</span>
                    </div>
                    <span className="mb-3 mb-md-0 text-white ms-2">© 2022 Bogdan Kapriyan</span>
                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3"><a className="text-white" href="https://github.com/RecountsXxx">
                            <img src={github_logo} alt="..."/>
                        </a></li>
                        <li className="ms-3 me-3"><a className="text-white" href="https://www.linkedin.com/in/bogdan-kapriyan-80487120b/">
                            <img src={linkedin_logo} alt="..."/>
                        </a></li>
                    </ul>
                </footer>
            </div>
        );
    }
}
export default Footer;