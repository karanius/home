
import htmlSVG from '../animations/svgs/html5.svg';
import cssSVG from '../animations/svgs/css3.svg';
import sassSVG from '../animations/svgs/sass.svg';
import bootstrapSVG from '../animations/svgs/bootstrap.svg';
import jsSVG from '../animations/svgs/js.svg';
import jsuqerySVG from '../animations/svgs/jquery.svg'
import nodeSVG from '../animations/svgs/node.svg';
import reactSVG from '../animations/svgs/react.svg';
import gitSVG from '../animations/svgs/git.svg';
import mysqlSVG from '../animations/svgs/mysql.svg'
import mongoSVG from '../animations/svgs/mongo.svg'
import photoshoptSVG from '../animations/svgs/photoshop.svg'
import postgresqlSVG from '../animations/svgs/postgresql.svg'

const PORTFOLIO_DATA  = {
  PERSONAL: [
    {
      id: 13,
      imageLink: require('./portfolioImgs/appschat.png'),
      liveLink: "https://appschat.herokuapp.com/",
      repo:  'https://github.com/karanius/APPSchat',
      title: 'Appschat',
      techStack: [htmlSVG , cssSVG , sassSVG , jsSVG , reactSVG , nodeSVG ,postgresqlSVG , 'Express / API / PWA'],
      about: 'A retro looking web chat. The back-end is made with Express and Socket.io. Can be accessed from anywhere with an internet connection. Pretty fun!',
    },
    {
      id: 12,
      imageLink: require('./portfolioImgs/smart-i.png'),
      liveLink: "https://karanius.github.io/smart-i/pages/faceRecog.html",
      repo:  'https://github.com/karanius/smart-i',
      title: 'smart-i',
      techStack:[htmlSVG,cssSVG,jsSVG,"Express / API / PWA / AI"],
      about: "This app uses the newest PWA tech. Connects to any device with a camera, renders the image into binary and sends it to an AI API. It can recognise face."
    },
    {
      id: 11,
      imageLink: require('./portfolioImgs/businessQard.png'),
      liveLink: "https://business-qard.herokuapp.com/",
      repo:  'https://github.com/jondam1985/business-QaRd',
      title: 'Business qards',
      techStack: [htmlSVG,cssSVG,jsSVG,"Express / API / Express-Handlebars"],
      about: "Business cards for a digital world. Build your QaRd, and share it with anyone."
    }
  ],
  BOOTCAMP: [
    {
      id: 3,
      imageLink: require('./portfolioImgs/workDaySchedule.png'),
      liveLink: 'https://karanius.github.io/Day-Planner/',
      repo:  'https://github.com/karanius/Day-Planner',
      title: 'Day Planner',
      techStack: [htmlSVG,cssSVG,jsSVG],
      about: "WebApp to remember daily taks. Red shows the task due, Green shos the incoming hours and gray means: the hour is passed"
    },
    {
      id: 10,
      imageLink: "https://raw.githubusercontent.com/karanius/portfolioImages/master/workoutTracker.png?token=AFO4PS3RQTD3D4C4TLCMOJS6LNHOC",
      liveLink: "https://uoft-workout-tracker.herokuapp.com/",
      repo:  'https://github.com/karanius/workoutTracker',
      title: 'Workout tracker'
    },
    {
      id: 9,
      imageLink: "https://raw.githubusercontent.com/karanius/portfolioImages/master/eatDaBurger.png?token=AFO4PSY5XUBN2B7FXDZXOD26LMX7E",
      liveLink: "http://afternoon-savannah-01200.herokuapp.com/",
      repo:  'https://github.com/karanius/EatDaBurger',
      title: 'Eat Da Burger'
    },
    {
      id: 8,
      imageLink: 'https://raw.githubusercontent.com/karanius/portfolioImages/master/employeeTracker.png?token=AFO4PS5Z4LB54TTTI4V52326LMYBA',
      liveLink: null,
      repo:  'https://github.com/karanius/employeeTracker',
      title: 'employee tracker'
    },
    {
      id: 7,
      imageLink: 'https://raw.githubusercontent.com/karanius/portfolioImages/master/NoteTaker.png?token=AFO4PSYKFRDRJDJ33UR3FC26LMYCO',
      liveLink: "https://notetakerapps.herokuapp.com/",
      repo:  'https://github.com/karanius/noteTaker',
      title: 'note taker'
    },
    {
      id: 6,
      imageLink: 'https://raw.githubusercontent.com/karanius/portfolioImages/master/Teamgenerator.png?token=AFO4PS6NFLIWWANANM4ME6C6LMYEA',
      liveLink: null,
      repo:  'https://github.com/karanius/TeamGenerator',
      title: 'Team generator'
    },
    {
      id: 5,
      imageLink: 'https://raw.githubusercontent.com/karanius/portfolioImages/master/pdfGenerator.png?token=AFO4PSYDOQ3VBRAN65SMJ5C6LMYFS',
      liveLink: null,
      repo:  'https://github.com/karanius/pdfGenerator',
      title: 'git pdf generator'
    },
    {
      id: 4,
      imageLink: 'https://raw.githubusercontent.com/karanius/portfolioImages/master/weather.png?token=AFO4PS7F3NINSUPEHLLNBYC6LMYHM',
      liveLink: 'https://karanius.github.io/weatherDashboard/',
      repo:  'https://github.com/karanius/weatherDashboard',
      title: 'weather dashboard'
    },
    {
      id: 2,
      imageLink: 'https://raw.githubusercontent.com/karanius/portfolioImages/master/webAPI.png?token=AFO4PS6YPEE2I65Z5J7GG426LMYKU',
      liveLink: 'hhttps://karanius.github.io/WebApi/',
      repo:  'https://github.com/karanius/WebApi',
      title: 'Quize Challenge'
    },
    {
      id: 1,
      imageLink: 'https://raw.githubusercontent.com/karanius/portfolioImages/master/passwordGenerator.png?token=AFO4PS3EPZ4V6XT6FPHTAPS6LMYMA',
      liveLink: 'https://karanius.github.io/passwordGenerator/',
      repo:  'https://github.com/karanius/passwordGenerator',
      title: 'password generator'
    }
  ]
}

export default PORTFOLIO_DATA;