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
                  <div className="about-div">
                      <h1 className="text-opacity-75 text-white flow-around">Bogdan Kapriyan <span className="text-opacity-75 text-white ">(Junior Front-end developer)</span></h1>
                      <h4 className="text-white-50 flow-around">Hello! My name is Bogdan Kapryan, and I am a junior frontend developer. I have knowledge of frameworks such as React, Angular, and Vue. Although I am a junior developer, I am familiar with these frameworks and can use them to build scalable and interactive user interfaces.

                          I also have experience with CSS frameworks like Bootstrap. I can create stylish and responsive web pages, applying modern design techniques and responsiveness.

                          In addition to frontend development, I have some experience with databases. I am familiar with SQL and have worked with popular database management system MySQL. I can efficiently create and optimize queries to retrieve, manipulate, and manage data.

                          Although I am a junior developer, I am constantly working on improving my skills and staying updated with the latest trends in frontend development. I am eager to take on new challenges and participate in exciting projects where I can apply my knowledge and creativity.</h4>
                  </div>
                  <img className="decoration-img" src={square} alt="..."/>
              </div>

              <div className="projects mt-5">
                  <h1 className="text-white flow-around">Projects</h1>
                  <div id="projects"  className="projects-grid">
                          <div className="d-flex justify-content-center">
                              <img src="https://img.icons8.com/color/480/chat--v1.png" alt="..."/>
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
                          <img src="https://img.icons8.com/arcade/512/partly-cloudy-rain.png" alt="..."/>
                          <h3 className="mt-2">Weather View</h3>
                          <h5 className="text-secondary">The "WeatherApp" project on Angular is a web application for viewing the weather and forecast for 3 days in different cities. The app uses the OpenWeather API to get up-to-date weather information. The main functionality of the application includes:City search and selection: The user can enter the name of the city in the search field, after which the application will offer options for suitable cities for selection.Current Weather View: After selecting a city, the user can view the current weather, including temperature, humidity, wind speed and other parameters.3 Day Forecast: The app displays the weather forecast for the next 3 days, allowing the user to plan activities and prepare for weather changes.</h5>
                          <a href="https://github.com/RecountsXxx/Weather-View">Look it up</a>
                      </div>
                      <div className="d-flex justify-content-center">
                          <img src="https://img.icons8.com/arcade/512/bank.png" alt="..."/>
                          <h3 className="mt-2">Blue Bank</h3>
                          <h5 className="text-secondary">A banking application is a web-based application that provides users with the ability to sign up, manage their bank account, view transaction history, and transfer funds between their accounts or other users.Key functionality:Registration and authentication:New users can register on the app by providing their details such as name, email, password and other required details.Registered users can authenticate with their credentials.User Profile:Users can view their profile, edit personal information and change account settings.View Balance:Users can view their bank account balance and available funds.Money Transfers:Registered users can make money transfers between their accounts or to other users' accounts.When making a transfer, the user specifies the amount transferred, the recipient's account number and possibly a comment on the transaction.Transaction History:Users have access to the history of all their transactions, including information about the date, amount, sender and recipient (if transferring to another account).Security:The application provides a high level of security by utilizing secure methods of storing passwords and sensitive user data.Translated with www.DeepL.com/Translator (free version)</h5>
                          <a href="https://github.com/RecountsXxx/Blue-Bank">Look it up</a>
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
                      <h2 className="text-white addition-text">Additional technologies and skills</h2>
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
