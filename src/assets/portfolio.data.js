
import htmlSVG from '../animations/svgs/html5.svg';
import cssSVG from '../animations/svgs/css3.svg';
import sassSVG from '../animations/svgs/sass.svg';
import bootstrapSVG from '../animations/svgs/bootstrap.svg';
import jsSVG from '../animations/svgs/js.svg';
import jsuqerySVG from '../animations/svgs/jquery.svg'
import nodeSVG from '../animations/svgs/node.svg';
import reactSVG from '../animations/svgs/react.svg';
import mysqlSVG from '../animations/svgs/mysql.svg'
import mongoSVG from '../animations/svgs/mongo.svg'
import photoshoptSVG from '../animations/svgs/photoshop.svg'
import postgresqlSVG from '../animations/svgs/postgresql.svg'

const postgresql = {
  icon: postgresqlSVG,
  name: "PostgreSQL"
}

const photoshop = {
  icon: photoshoptSVG ,
  name: 'Photoshop'
}

const mongo = {
  icon: mongoSVG ,
  name: "MongoDB"
}

const mysql = {
  icon: mysqlSVG,
  name: "MySQL"
}

const react = {
  icon: reactSVG,
  name: "React"
}

const node = {
  icon: nodeSVG ,
  name: "Node.js"
}

const html = {
  icon: htmlSVG,
  name: 'HTML'
}
const css = {
  icon: cssSVG ,
  name: "CSS"
}
const sass = {
  icon: sassSVG,
  name: "Sass"
}
const bootstrap = {
  icon: bootstrapSVG ,
  name:"Bootstrap"
}
const js = {
  icon: jsSVG,
  name: 'JavaScript'
}
const jquery = {
  icon: jsuqerySVG,
  name: "jQuery"
}

const PORTFOLIO_DATA  = {
  PERSONAL: [
    {
      id: 13,
      imageLink: require('./portfolioImgs/appschat.png'),
      liveLink: "https://appschat.herokuapp.com/",
      repo:  'https://github.com/karanius/APPSchat',
      title: 'Appschat',
      techStack:[html ,css , sass , js, node, react , node ,postgresql , "Express / API / PWA"],
      about: 'A retro looking web chat. The back-end is made with Express and Socket.io. Can be accessed from anywhere with an internet connection. Pretty fun!',
    },
    {
      id: 12,
      imageLink: require('./portfolioImgs/smart-i.png'),
      liveLink: "https://karanius.github.io/smart-i/pages/faceRecog.html",
      repo:  'https://github.com/karanius/smart-i',
      title: 'Smart-i',
      techStack:[html,css,js,node,"Express / API / PWA / AI"],
      about: "This app can recognize faces. It uses the newest PWA tech. Is able to connect to any device with a camera, renders the image into binary and sends it to an AI API. "
    },
    {
      id: 11,
      imageLink: require('./portfolioImgs/businessQard.png'),
      liveLink: "https://business-qard.herokuapp.com/",
      repo:  'https://github.com/jondam1985/business-QaRd',
      title: 'Business qards',
      techStack: [html,css,js,mysql,node,"Express / API / Express-Handlebars "],
      about: "Business cards for a digital world. Build your QaRd, and share it with anyone, specially at networking events!"
    }
  ],
  BOOTCAMP: [
    {
      id: 3,
      imageLink: require('./portfolioImgs/workDaySchedule.png'),
      liveLink: 'https://karanius.github.io/Day-Planner/',
      repo:  'https://github.com/karanius/Day-Planner',
      title: 'Day Planner',
      techStack: [html,css,js , "API"],
      about: "Assignment: created a local storage area that stores time events for the day using jQuery and using moment.js to check weather the time for those events has past or not."
    },
    {
      id: 10,
      imageLink: require('./portfolioImgs/workoutTracker.png'),
      liveLink: "https://uoft-workout-tracker.herokuapp.com/",
      repo:  'https://github.com/karanius/workoutTracker',
      title: 'Workout tracker',
      techStack: [html,css,js,node,mongo, "Express / API / PWA / MongooseDB"],
      about: "Assignment: I handled creating the backend for a workout tracker. I was provided the front end code and created a Mongo database with a provided Mongoose schema to handle the routes with Express."
    },
    {
      id: 9,
      imageLink: require('./portfolioImgs/eatDaBurger.png'),
      liveLink: "http://afternoon-savannah-01200.herokuapp.com/",
      repo:  'https://github.com/karanius/EatDaBurger',
      title: 'Eat Da Burger',
      techStack: [html,css,js,mysql,node, "Express / API"],
      about:`Assignment: CRUD: Create: Using the form. Read: Diplay the data in the view. Update: With devour button. Delete: With the reset orders button.`
    },
    {
      id: 8,
      imageLink: require('./portfolioImgs/employeeTracker.png'),
      liveLink: null,
      repo:  'https://github.com/karanius/employeeTracker',
      title: 'Employee Tracker',
       techStack: [html,css,js,node , "API / Command Line"],
      about:"Assignment: Created a Content Management System solution. The capabilities built in are: View All Employees, View All Employees By Department, View All Employees By Manager, View All Departments, View All RolesAdd Employee, Add Role, Add Department, Remove Employee, Update Employee Role"
    },
    {
      id: 7,
      imageLink:require('./portfolioImgs/NoteTaker.png'),
      liveLink: "https://notetakerapps.herokuapp.com/",
      repo:  'https://github.com/karanius/noteTaker',
      title: 'Note Taker',
      techStack: [html,css,js,node , "Express / API"],
      about: "Assignment: A backend to handle get, post and delete calls using express and a .json file for persistency"
    },
    {
      id: 6,
      imageLink: require('./portfolioImgs/Teamgenerator.png'),
      liveLink: null,
      repo:  'https://github.com/karanius/TeamGenerator',
      title: 'Team Generator',
      techStack: [html,css,js,node, "Command Line"],
      about: "Assignment: Dynamically creates a HTML team page. The team can be comprised of a manager, any number of engineers, interns, etc"
    },
    {
      id: 5,
      imageLink: require('./portfolioImgs/pdfGenerator.png'),
      liveLink: null,
      repo:  'https://github.com/karanius/pdfGenerator',
      title: 'git pdf generator',
      techStack: [html,css,js, node, "Command LIne"],
      about: "Assignment: Focused on creating a command-line application that dynamically generates a PDF profile from a GitHub username."
    },
    {
      id: 4,
      imageLink: require('./portfolioImgs/weather.png'),
      liveLink: 'https://karanius.github.io/weatherDashboard/',
      repo:  'https://github.com/karanius/weatherDashboard',
      title: 'Weather Dashboard',
       techStack: [html,css,js,jquery, "API / AJAX"],
      about:"Assignment: Focused on using API data from openweathermap, the data was received and handled by jQuery and AJAX."
    },
    {
      id: 2,
      imageLink: require('./portfolioImgs/webAPI.png'),
      liveLink: 'hhttps://karanius.github.io/WebApi/',
      repo:  'https://github.com/karanius/WebApi',
      title: 'Quize Challenge',
      techStack: [html,css,js , "API / AJAX"],
      about: "Assignment: Used the templating pattern to save on the amount of code being used"
    },
    {
      id: 1,
      imageLink: require('./portfolioImgs/passwordGenerator.png'),
      liveLink: 'https://karanius.github.io/passwordGenerator/',
      repo:  'https://github.com/karanius/passwordGenerator',
      title: 'Password Generator',
      techStack: [html,css,js],
      about: "Assignment: A password generator, aimed at creating the password string as random as possible"
    }
  ]
}

export default PORTFOLIO_DATA;