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
    projects = [
        new Project("Admin-panel Laravel","This is my student project, a platform designed for learning and development. It includes an admin panel for managing posts, categories, and users, along with features like adding, editing, and deleting content. The project also incorporates a user-friendly file managerfor attaching images to posts and a text editor for creating articles. The design is responsive, ensuring accessibility on various devices","https://img.icons8.com/color/512/control-panel--v2.png","https://github.com/RecountsXxx/admin-panel-blog-laravel"),

        new Project("Web-Shop Laravel","Welcome to our online shopping platform! Explore a wide range of product categories, discover popular items, and enjoy user-friendly authentication. Effortlessly browse, filter, and shop with a simple checkout process. Admins can manage the store with ease. Our adaptive design ensures a seamless shopping experience on all devices. Join us for convenient, diverse, and enjoyable shopping!","https://img.icons8.com/fluency/512/shopping-mall.png","https://github.com/RecountsXxx/webshop-laravel"),


        new Project("Chater","Chater is an advanced messaging application that allows " +
            "users to chat, call other friends and share files. Our application offers a convenient " +
            "and secure way to communicate, a choice of functions and customization for " +
            "specific users. The application is written in, c# server is tcp client, audio calls are c# " +
            "is udp client, c# main application is tcp client.", "https://img.icons8.com/color/480/chat--v1.png","https://github.com/RecountsXxx/chater"),

        new Project("Portfolio","Browsing through my page, you will find a rich set " +
            "of technologies that I own. From front-end development using modern programming languages ​​such as " +
            "HTML, CSS and JavaScript, to creating dynamic web applications using popular " +
            "frameworks such as React and Angular.", "https://img.icons8.com/color/480/resume.png","https://github.com/RecountsXxx/portfolio"),

        new Project("Weather-View","The WeatherApp project on Angular is a web application for " +
            "viewing the weather and forecast for 3 days in different cities. The main functionality of " +
            "the application includes: Current Weather View: After selecting a city, the user can view the current weather," +
            " including temperature, humidity, wind speed and other parameters." ,"https://img.icons8.com/arcade/512/partly-cloudy-rain.png","https://github.com/RecountsXxx/weather-view"),

        new Project("Shopper","The store created on React. Store offers a wide range of appliances and perfumes, providing convenience" +
            " to customers through an advanced filtering and search system. Shoppers can easily find the products they are " +
            "interested in by applying a variety of filters such as brand, price, features, and product type. ts by keywords.","https://img.icons8.com/fluency/512/small-business.png","https://github.com/RecountsXxx/shopper"),


    ];

    render() {
        return(
          <div className="container-fluid">
              <div id="about" className="about-us d-flex justify-content-center mt-5">
                  <div className="about-div">
                      <h1 className="text-opacity-75 text-white flow-around">Bogdan Kapriyan <span className="text-opacity-75 text-white ">(Junior Back-end developer)</span></h1>
                      <h4 className="text-white-50 flow-around">Hello! My name is Bogdan Kapriyan and I am a beginner backend developer. My specialization is the creation and support of the server side of web applications. I have experience with various technologies and tools that allow me to create efficient and scalable web services. My skills include using programming languages ​​such as PHP and JavaScript as well as frameworks such as Laravel, NodeJS and ExpressJS. I have experience with various database management systems such as MySQL, PostgreSQL and MariaDB. This allows me to create and optimize queries to effectively interact with the data. In addition to my backend development experience, I also have frontend development skills. I have knowledge of React frameworks, Angular which allows me to create interactive user interfaces. I am also familiar with CSS frameworks such as Bootstrap which allows me to create stylish and responsive web pages using modern design techniques. I am constantly working on improving my skills and following the latest trends in the world of backend development. I am ready to take on new challenges and participate in exciting projects where I can apply my knowledge and creativity.</h4>
                  </div>
                  <img className="decoration-img" src={square} alt="..."/>
              </div>

              <div className="projects mt-5">
                  <h1 className="text-white flow-around">Projects</h1>
                  <div id="projects"  className="projects-grid">
                      {this.projects.map((project) => (
                          <div className="project d-flex justify-content-center">
                              <img src={project.image} alt="..."/>
                              <h3 className="mt-2">{project.title}</h3>
                              <h5 className="text-secondary">{project.description}</h5>
                              <a href={project.url}>Look it up</a>
                          </div>
                          ))}
                  </div>
              </div>

              <div className="container-fluid mt-5 d-flex flex-column justify-content-center align-items-center">
                  <h1 className="text-white flow-around">Technologies</h1>
                  <div className="container-fluid mt-5 gap-5 d-flex justify-content-center align-items-center experience-items">
                      <div>
                          <div className="card mb-4 rounded-3 shadow-sm p-1 bg-transparent border-dark">
                              <div className="card-header py-3">
                                  <h2 className="text-white my-0 fw-normal">Frontend</h2>
                              </div>
                              <div className="card-body">
                                  <ul className="list-unstyled mb-4">
                                      <h3 className="fs-4 badge bg-secondary">HTML, CSS, SCSS</h3><br />
                                      <h3 className="fs-4 badge bg-secondary">JavaScript, TypeScript</h3><br />
                                      <h3 className="fs-4 badge bg-secondary">React, Angular</h3><br />
                                      <h3 className="fs-4 badge bg-secondary">Redux, Bootstrap, Tailwind</h3>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <div>
                          <div className="card mb-4 rounded-3 shadow-sm p-1 bg-transparent border-dark">
                              <div className="card-header py-3">
                                  <h2 className="text-white my-0 fw-normal">Backend</h2>
                              </div>
                              <div className="card-body">
                                  <ul className="list-unstyled mb-4">
                                      <h3 className="fs-4 badge bg-secondary">PHP</h3><br />
                                      <h3 className="fs-4 badge bg-secondary">Laravel</h3><br />
                                      <h3 className="fs-4 badge bg-secondary">NodeJS, ExpressJS</h3><br />
                                      <h3 className="fs-4 badge bg-secondary">MySQL, PostgreSQL, MariaDB</h3>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <div>
                          <div className="card mb-4 rounded-3 shadow-sm p-1 bg-transparent border-dark">
                              <div className="card-header py-3">
                                  <h2 className="text-white my-0 fw-normal">.NET</h2>
                              </div>
                              <div className="card-body">
                                  <ul className="list-unstyled mb-4">
                                      <h3 className="fs-4 badge bg-secondary">C#</h3><br />
                                      <h3 className="fs-4 badge bg-secondary">WPF, WinForms</h3><br />
                                      <h3 className="fs-4 badge bg-secondary">ASP.NET, Razor pages</h3>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="mt-5">
                      <h2 className="text-white addition-text">Additional technologies and skills</h2>
                      <ul className="ms-5 mt-2 ul-list text-white">
                          <li className="fs-4 badge bg-secondary list-item">Git</li>
                          <li className="list-item fs-4 badge bg-secondary">Quick learning</li>
                          <li className="list-item fs-4 badge bg-secondary">Teamwork</li>
                          <li className="list-item fs-4 badge bg-secondary">English(B2)</li>
                          <li className="list-item fs-4 badge bg-secondary">Ukrainian(Native)</li>
                          <li className="list-item fs-4 badge bg-secondary">Russian(C2)</li>
                          <li className="list-item fs-4 badge bg-secondary">Figma</li>
                      </ul>
                  </div>
              </div>

          </div>
        );
    }
}
export default MainPage;