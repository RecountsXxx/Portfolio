import {Component} from "react";
import square from "../assets/square.svg";
import logo from '../assets/logo.svg';
import '../css/MainPage.css';
class Project {
    title;
    description;
    image;
    url;

    constructor(title,description,image,url) {
        this.title = title;
        this.description = description;
        this.image = image;
        this.url = url;
    }
};

class MainPage extends Component{


    render() {
        return(
          <div className="container-fluid">
              <div id="about" className="about-us d-flex justify-content-center mt-5">
                  <div className="ms-5 mt-5">
                      <h1 className="text-white flow-around">Bogdan Kapriyan Junior Front-end developer</h1>
                      <h4 className="text-white-50 ms-5 flow-around">Hello! My name is Bogdan Kapryan, and I am a junior frontend developer. I have knowledge of frameworks such as React, Angular, and Vue. Although I am a junior developer, I am familiar with these frameworks and can use them to build scalable and interactive user interfaces.

                          I also have experience with CSS frameworks like Bootstrap. I can create stylish and responsive web pages, applying modern design techniques and responsiveness.

                          In addition to frontend development, I have some experience with databases. I am familiar with SQL and have worked with popular database management system MySQL. I can efficiently create and optimize queries to retrieve, manipulate, and manage data.

                          Although I am a junior developer, I am constantly working on improving my skills and staying updated with the latest trends in frontend development. I am eager to take on new challenges and participate in exciting projects where I can apply my knowledge and creativity.</h4>
                  </div>
                  <img src={square} alt="..."/>
              </div>

              <div className="projects mt-5">
                  <h1 className="text-white flow-around">Projects</h1>
                  <div id="projects"  className="projects-grid">
                          <div className="d-flex justify-content-center">
                              <img src="https://img.icons8.com/cute-clipart/512/chat.png" alt="..."/>
                              <h3 className="mt-2">Chater(С#)</h3>
                              <h5 className="text-secondary">Chater is an advanced messaging application that allows users to chat, call other friends and share files. Our application offers a convenient and secure way to communicate, a choice of functions and customization for specific users. The application is written in, c# server is tcp client, audio calls are c# is udp client, c# main application is tcp client.</h5>
                              <a href="https://github.com/RecountsXxx/chater">Look it up</a>
                          </div>
                      <div className="d-flex justify-content-center">
                          <img src="https://img.icons8.com/color/480/resume.png"alt="..."/>
                          <h3 className="mt-2">Portfolio</h3>
                          <h5 className="text-secondary">Browsing through my page, you will find a rich set of technologies that I own. From front-end development using modern programming languages ​​such as HTML, CSS and JavaScript, to creating dynamic web applications using popular frameworks such as React and Angular.</h5>
                          <a href="https://github.com/RecountsXxx/Portfolio">Look it up</a>
                      </div>
                      <div className="d-flex justify-content-center">
                          <img src="https://img.icons8.com/fluency/240/refresh.png" alt="..."/>
                          <h3 className="mt-2">Convertor PNG to SVG</h3>
                          <h5 className="text-secondary">PNG is a raster format, while SVG is a vector format, which provides scalability without loss of quality. Users can import PNG files and the application converts their SVG vector objects. The result can be previewed and saved to a computer or device. This application is useful for designers and developers.</h5>
                          <a href="https://github.com/RecountsXxx/convertorpngtosvg">Look it up</a>
                      </div>
                      <div className="d-flex justify-content-center">
                          <img src="https://img.icons8.com/color/512/cryptocurrency.png" alt="..."/>
                          <h3 className="mt-2">Crypto View</h3>
                          <h5 className="text-secondary">This application is a cryptocurrency tracking tool. It shows a list of available cryptocurrencies and allows users to view price charts for the selected cryptocurrency. This is useful for tracking changes in the cryptocurrency market and making informed investment decisions.</h5>
                          <a href="https://github.com/RecountsXxx/cryptoview">Look it up</a>
                      </div>
                  </div>
              </div>

              <div  className="container-fluid mt-5 d-flex flex-column justify-content-center align-items-center">
                  <h1 className="text-white flow-around">Technologies</h1>
                  <div id="technologies" className="d-flex flex-column justify-content-center align-items-center">
                      <div>
                          <h3 className="text-white">HTML</h3>
                          <progress className="p-2 pt-4 technologies-bar" value="100" max="100"></progress>
                      </div>
                      <div>
                          <h3 className="text-white">CSS</h3>
                          <progress className="p-2 pt-4 technologies-bar" value="100" max="100"></progress>
                      </div>
                      <div>
                          <h3 className="text-white">SCSS</h3>
                          <progress className="p-2 pt-4 technologies-bar" value="100" max="100"></progress>
                      </div>
                      <div>
                          <h3 className="text-white">JavaScript</h3>
                          <progress className="p-2 pt-4 technologies-bar" value="90" max="100"></progress>
                      </div>
                      <div>
                          <h3 className="text-white">TypeScript</h3>
                          <progress className="p-2 pt-4 technologies-bar" value="90" max="100"></progress>
                      </div>
                      <div>
                          <h3 className="text-white">React</h3>
                          <progress className="p-2 pt-4 technologies-bar" value="90" max="100"></progress>
                      </div>
                      <div>
                          <h3 className="text-white">Angular</h3>
                          <progress className="p-2 pt-4 technologies-bar" value="80" max="100"></progress>
                      </div>
                      <div>
                          <h3 className="text-white">C#</h3>
                          <progress className="p-2 pt-4 technologies-bar" value="90" max="100"></progress>
                      </div>
                      <div>
                          <h3 className="text-white">WPF</h3>
                          <progress className="p-2 pt-4 technologies-bar" value="90" max="100"></progress>
                      </div>
                      <div>
                          <h3 className="text-white">WF</h3>
                          <progress className="p-2 pt-4 technologies-bar" value="90" max="100"></progress>
                      </div>
                      <div>
                          <h3 className="text-white">ASP.NET</h3>
                          <progress className="p-2 pt-4 technologies-bar" value="65" max="100"></progress>
                      </div>
                  </div>
                  <div className="mt-5">
                      <h2 className="text-white">Additional technologies and skills</h2>
                      <ul className="ms-5 mt-2 ul-list text-white">
                          <li className="list-item">Git</li>
                          <li className="list-item">Quick learning</li>
                          <li className="list-item">Teamwork</li>
                          <li className="list-item">English(B2)</li>
                          <li className="list-item">Ukrainian(Native)</li>
                          <li className="list-item">Russian(C2)</li>
                          <li className="list-item">Figma</li>
                      </ul>
                  </div>
              </div>

          </div>
        );
    }
}
export default MainPage;