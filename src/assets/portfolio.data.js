
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
      id: 14,
      imageLink: require('./portfolioImgs/bob.PNG'),
      liveLink: "https://battlebox.netlify.com/",
      repo:  null,
      title: 'Battle Of Breweries',
      techStack:[html ,css , sass , js, node, react, photoshop , "In Progress / PWA"],
      about: 'I am commisioned with building this website for a client. Currently in Progress',
    },
    {
      id: 13,
      imageLink: require('./portfolioImgs/appschat.png'),
      liveLink: "https://appschat.herokuapp.com/",
      repo:  'https://github.com/karanius/APPSchat',
      title: 'Appschat',
      techStack:[html ,css , sass , js, node, react ,postgresql , "Express / API / PWA"],
      about: 'A retro looking web chat. The back-end is made with Express and Socket.io. Can be accessed from anywhere with an internet connection. Pretty fun!',
    },
    
    {
      id: 12,
      imageLink: require('./portfolioImgs/smart-i.gif'),
      liveLink: "https://karanius.github.io/smart-i/pages/faceRecog.html",
      repo:  'https://github.com/karanius/smart-i',
      title: 'Smart-i',
      techStack:[html,css,js,node,"Express / CLARIFAI API / PWA / AI"],
      about: "This app can recognize faces. It uses the newest PWA tech. Is able to connect to any device with a camera, renders the image into binary and sends it to an AI API. "
    },
    {
      id: 11,
      imageLink: require('./portfolioImgs/businessQard.png'),
      liveLink: "https://business-qard.herokuapp.com/",
      repo:  'https://github.com/jondam1985/business-QaRd',
      title: 'Business qards',
      techStack: [html,css,js,mysql,node,"Express / API / Express-Handlebars "],
      about: "Business cards for a digital world. Build your QaRd, and share it with anyone, specially at networking events! I mainly focused on the back-end"
    }
  ],
  BOOTCAMP: [
    {
      id: 16,
      imageLink: require('./portfolioImgs/budgetTracker.gif'),
      liveLink: 'https://uoft-budget-tracker.herokuapp.com/',
      repo:  'https://github.com/karanius/UofT_budget_Tracker_PWA',
      title: 'Budget Tracker',
      techStack: [html,sass,js," PWA / Works offline and online /"],
      about: "Assignment: Use this app to track your budget! This is a PWA, so feel free to install it on your desktop/cellphone and use it offline as well."
    },
    {
      id: 15,
      imageLink: require('./portfolioImgs/employeeDirectory.gif'),
      liveLink: 'https://karanius.github.io/UofT_employee-dashboard_REACT/',
      repo:  'https://github.com/karanius/UofT_employee-dashboard_REACT',
      title: 'Employee Directory',
      techStack: [html,sass,js,react,"Api"],
      about: "Assignment: An employee or manager would benefit greatly from being able to view non-sensitive data about other employees. It is able to filter employees by name."
    },
    {
      id: 3,
      imageLink: require('./portfolioImgs/workDaySchedule.gif'),
      liveLink: 'https://karanius.github.io/UofT_Day-Planner/',
      repo:  'https://github.com/karanius/UofT_Day-Planner',
      title: 'Day Planner',
      techStack: [html,css,js,jquery, "Moment.js"],
      about: "Assignment: On device local storage of time events of the day using jQuery, and moment.js to check weather the time for those events has past or not."
    },
    {
      id: 10,
      imageLink: require('./portfolioImgs/workoutTracker.gif'),
      liveLink: "https://uoft-workout-tracker.herokuapp.com/",
      repo:  'https://github.com/karanius/UofT_Workout_Tracker',
      title: 'Workout tracker',
      techStack: [html,css,js,node,mongo, "Express / API / PWA / MongooseDB"],
      about: "Assignment: I handled creating the backend for a workout tracker. I was provided the front end code and created a Mongo database with a provided Mongoose schema to handle the routes with Express."
    },
    {
      id: 9,
      imageLink: require('./portfolioImgs/eatDaBurger.gif'),
      liveLink: "https://eat-the-burger-mvc.herokuapp.com/",
      repo:  'https://github.com/karanius/UofT_Eat_Da_Burger_MCV',
      title: 'Eat Da Burger',
      techStack: [html,css,js,mysql,node, "Express / API"],
      about:`Assignment: CRUD: Create: Using the form. Read: Diplay the data in the view. Update: With devour button. Delete: With the reset orders button.`
    },
    {
      id: 8,
      imageLink: require('./portfolioImgs/employeeTracker.gif'),
      liveLink: null,
      repo:  'https://github.com/karanius/UofT_EmployeeTracker_CLI',
      title: 'Employee Tracker',
       techStack: [html,css,js,mysql,node , "Command Line / Inquirer"],
      about:"Assignment: A CLI application for managing a company's employees using node, inquirer, and MySQL."
    },
    {
      id: 7,
      imageLink:require('./portfolioImgs/NoteTaker.gif'),
      liveLink: "https://notetakerapps.herokuapp.com/",
      repo:  'https://github.com/karanius/UofT_Note_Taker',
      title: 'Note Taker',
      techStack: [html,css,js,node , "Express / API"],
      about: "Assignment: A backend to handle get, post and delete calls using express and a .json file for persistency"
    },
    {
      id: 6,
      imageLink: require('./portfolioImgs/Teamgenerator.gif'),
      liveLink: null,
      repo:  'https://github.com/karanius/UofT_Team_Generator_CLI',
      title: 'Team Generator',
      techStack: [html,css,js,node, "Command Line"],
      about: "Assignment: Dynamically creates a HTML team page. The team can be comprised of a manager, any number of engineers, interns, etc"
    },
    {
      id: 5,
      imageLink: require('./portfolioImgs/pdfGenerator.gif'),
      liveLink: null,
      repo: 'https://github.com/karanius/UofT_PDF_Generator',
      title: 'git pdf generator',
      techStack: [html,css,js, node, "Command Line / Inquirer / Axios / Puppeteer"],
      about: "Assignment: Focused on creating a command-line application that dynamically generates a PDF profile from a GitHub username."
    },
    {
      id: 4,
      imageLink: require('./portfolioImgs/weather.gif'),
      liveLink: 'https://karanius.github.io/UofT_Weather_Dashboard/',
      repo:  'httphttps://github.com/karanius/UofT_Weather_Dashboard',
      title: 'Weather Dashboard',
       techStack: [html,css,js,jquery, "API / AJAX"],
      about:"Assignment: Focused on using API data from openweathermap, the data was received and handled by jQuery and AJAX."
    },
    {
      id: 2,
      imageLink: require('./portfolioImgs/quiz.gif'),
      liveLink: 'https://karanius.github.io/UofT_Api_Code_Quiz/',
      repo:  'https://github.com/karanius/UofT_Api_Code_Quiz',
      title: 'Quize Challenge',
      techStack: [html,css,js , "API / AJAX"],
      about: "Assignment: Used the templating pattern to save on the amount of code being used"
    },
    {
      id: 1,
      imageLink: require('./portfolioImgs/passwordGenerator.gif'),
      liveLink: 'https://karanius.github.io/UofT_Password_Generator/',
      repo:  'https://github.com/karanius/passwordGenerator',
      title: 'Password Generator',
      techStack: [html,css,js],
      about: "Assignment: A password generator, aimed at creating the password string as random as possible"
    }
  ]
}

export default PORTFOLIO_DATA;