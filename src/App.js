import React from 'react'
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';

function App() {

    const main = {
        name: "Irit Nimoitin",
        occupation: "Full Stack developer",
        description: "Have knowledge and experience in Java, JavaScript, TypeScript, Node.js and React with a high level of self-learning skills. \n Looking for a junior position",
        image: "profilepic.jpeg",
        bio: "I'm a Full stack web developer major in John Bryce college and Yaniv Arad Full Stack course focused on react & typescript technologies as front end , node.js & Express & Spring MVC technologies as backend, using MongoDB and MySQL as database. Great work ethics , fast learner and highly motivated. All i need is a place where i can grow as a developer.",
        contactmessage: "Have a job for me? Want to invite me to an interview? You can give me a shout by email or by using the contact form below.",
        email: "iritnim@post.bgu.ac.il",
        phone: "054-580-0320",
        city: "Tel-Aviv",
        website: "https://irit-nimoitin-resume.web.app/",
        resumedownload: "https://www.mediafire.com/file/77ko81tetkiw2ft/Irit-Nimoitin+CV.pdf/file",
        social: [
            {
                name: "facebook",
                url: "https://www.facebook.com/irit.nimoitin",
                className: "fa fa-facebook"
            },
            {
                name: "linkedin",
                url: "https://www.linkedin.com/in/irit-nimoitin",
                className: "fa fa-linkedin"
            },
            {
                name: "github",
                url: "https://github.com/IritNimoitin",
                className: "fa fa-github"
            },
        ],
    }

    const resume = {
        skillmessage: "Here you can see some of the skills I feel the most comfortable talking about",
        education: [
            {
                school: "Yaniv Arad",
                degree: "Full Stack Development course",
                graduated: "May 2021 - August 2021",
                description: [
                    "Full Stack Development course, react and Node.JS technologies, 2021."
                ]
            },
            {
                school: "John Bryce Academy",
                degree: "JAVA – Full Stack Development course",
                graduated: "September 2020 - June 2021",
                description: [
                    "\xa0\xa0\xa0\xa0• GPA – 98.",
                    "\xa0\xa0\xa0\xa0• Writing applications in JAVA on both server side and client side, with special emphasis on server-side development."
                ]
            },
            {
                school: "Ben-Gurion University",
                degree: "BSc in Business Administration",
                graduated: "October 2017 - July 2020",
                description: [
                    "First degree in Business Administration, specializing in finance and economics, at Ben-Gurion University of the Negev, Beer-Sheva:",
                    "\xa0\xa0\xa0\xa0• GPA – 90.",
                    "\xa0\xa0\xa0\xa0• Candidate for excellence in the last year of my degree."
                ]
            }
        ],
        skills: [
            {
                name: "Java",
                level: "83%"
            },
            {
                name: "JavaScript",
                level: "90%"
            },
            {
                name: "MySQL",
                level: "75%"
            },
            {
                name: "Node.js",
                level: "92%"
            },
            {
                name: "Git",
                level: "75%"
            },
            {
                name: "Spring",
                level: "78%"
            },
            {
                name: "ReactJs",
                level: "90%"
            },
            {
                name: "TypeScript",
                level: "82%"
            },
            {
                name: "CSS",
                level: "70%"
            },
            {
                name: "CSS",
                level: "84%"
            },
            {
                name: "MongoDB",
                level: "87%"
            }
        ],
        technologies: [
            {
                name: "GitHub",
                image: "github.png",
                description: "I use GitHub for all my project. I use it to share the files wi co-workers, and backup my work. In addition, it let me work on my projects from different computers.",
            },
            {
                name: "Java",
                image: "java.jpg",
                description: "Java is the first language I learned. The first time I learne Java was on high-school. I still use it as my main language and feel most comfortabe with it.",
            },
            {
                name: "MongoDB",
                image: "mongoDB.png",
                description: "MongoDB is the main database I use for my apps. I have used different databases in the past, and better educated with Relation Databases. However, I find mongoDB much more enjoyable and fit my needs.",
            },
            {
                name: "React",
                image: "react.png",
                description: "As a self-learner, I was very interesting in learning web-development and designing my own web pages. As a result, I took react-courses. I still learn about developing my pages and hopefully will reach high level in the field.",
            },
            {
                name: "Node JS",
                image: "nodejs.png",
                description: "NodeJS is the main language I use for server-side development. I am fairly new to this, and hoping to improve my skills as a backend developer too.",
            },
            {
                name: "Heroku",
                image: "heroku.png",
                description: "Heroku is my hosting platform of choice. I appriciate its unpaid services and find it easy to use and works well for my needs.",
            },
        ]
    }

    const Porfolio = {
        projects: [
            {
                title: "Lucky Coupons",
                description: "Coupon management system allows companies to generate coupons as part of advertising campaigns And marketing that they sustain. The system also has registered customers. Customers can purchase coupons.",
                url: "http://lucky-coupons.herokuapp.com"
            },
            {
                title: "Movies System",
                description: "Movies management and subscribers web application. Building a Rest API server based on microservices architecture. The server manages data from web service and JSON files and provides different access permissions depending on the type of user.",
                url: "https://github.com/iritNimoitin/cinema-server",
                secondUrl: "https://github.com/iritNimoitin/movies-system"
            },
            {
                title: "Tasks Management App",
                description: "The UI presents all users data provided from external web-services. Clients can search, update, delete and add tasks or users to manage their data. Technologies – JavaScript &amp; React",
                url: "https://tasks-management-app.web.app"
            },
            {
                title: "Cinema System",
                description: "Simulating a cinema using: website and web-service with three data sources – Json files, MongoDB and external web-services, also using server-side technologies – Node.js & Express, and client-side technologies - React & Redux",
                url: "https://github.com/iritNimoitin/Cinema-Client-React",
                secondUrl: "https://github.com/iritNimoitin/movies-system-web-service"
            },
            {
                title: "My Resume",
                description: "A React application created to show my resume in more attractive format. You are actually watching it right now!",
                url: "https://irit-nimoitin-resume.web.app/"
            },
        ],
    }

    return (
        <>
            <div className="App">
                <Header data={main} />
                <About data={main} />
                <Resume data={resume} />
                <Portfolio data={Porfolio} />
                <Contact data={main} />
                <Footer data={main} />
            </div>
        </>
    );
}

export default App;
