const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyA3S96b3FP66qPwLERkIjo3D8YwCCD466Q",
    authDomain: "newpersonalwebsite.firebaseapp.com",
    projectId: "newpersonalwebsite",
});

var db = firebase.firestore();

var project = [
    {
        id: 1,
        name: "Foodle",
        repoLink: "https://github.com/reekamaharaj/Project1",
        deployedLink: "https://reekamaharaj.github.io/Project1/",
        description:
            "An application that lets a user input the food items and returns recipes that use that item. The user can also search for recipes by diet type, create a grocery list, and create a favorite list with the recipes found.",
        img:
            "https://github.com/reekamaharaj/Responsive-Portfolio/blob/master/assets/images/Foodle.jpg?raw=true",
        techUsed: [
            "Visual Studio Code",
            "HTML",
            "Bootstrap",
            "CSS",
            "JavaScript",
            "jQuery",
            "Adobe Illustrator",
            "Spoonacular API",
            "Whisk API",
        ],
        role: ["Project Manager", "backend development"],
    },
    {
        id: 2,
        name: "Trivia Game Advanced",
        repoLink: "https://github.com/reekamaharaj/TriviaGameAdvanced",
        deployedLink: "https://reekamaharaj.github.io/TriviaGameAdvanced/",
        description:
            "Application gives the user trivia questions one at a time. Includes a timer for each question.",
        img:
            "https://github.com/reekamaharaj/TriviaGameAdvanced/raw/master/assets/images/trivia.gif",
        techUsed: ["Visual Studio Code", "HTML", "TailwindCSS", "JavaScript"],
        role: ["Solo development"],
    },
    {
        id: 3,
        name: "Gem Collector",
        repoLink: "https://github.com/reekamaharaj/unit-4-game",
        deployedLink: "https://reekamaharaj.github.io/unit-4-game/",
        description:
            "In this javascript game, a randomly generated number will be displayed when a new game is initiated. The value of each gem is unknown to the player. Gem values are randomly generated for each game. When the player clicks on a gem, the player's score will increase by the value of the gem. To win, the player needs to get their score to equal the random number that was generated when the game started. The player will lose if their score is greater than the generated number.",
        img:
            "https://github.com/reekamaharaj/unit-4-game/raw/master/assets/images/crystal.gif",
        techUsed: ["Visual Studio Code", "HTML", "CSS", "JavaScript"],
        role: ["Solo development"],
    },
    {
        id: 4,
        name: "RPG Fighter Game",
        repoLink: "https://github.com/reekamaharaj/unit-4-game-challenge",
        deployedLink: "https://reekamaharaj.github.io/unit-4-game-challenge",
        description:
            "User chooses a fighter and then has to beat all the others to win. There are no healing options, but the players attack power will go up after every attack. All attacks are countered by the opponent. all the fighters have different statistics.",
        img:
            "https://github.com/reekamaharaj/unit-4-game-challenge/raw/master/assets/images/rpg.gif",
        techUsed: ["Visual Studio Code", "HTML", "TailwindCSS"],
        role: ["Solo development"],
    },
    {
        id: 5,
        name: "Trivia Game",
        repoLink: "https://github.com/reekamaharaj/TriviaGame",
        deployedLink: "https://reekamaharaj.github.io/TriviaGame/",
        description:
            "App that will ask 5 trivia questions about cats. The user has 25 seconds to answer to answer as many questions as they can.",
        img:
            "https://github.com/reekamaharaj/TriviaGame/raw/master/assets/images/trivia.gif",
        techUsed: ["Visual Studio Code", "HTML", "TailwindCSS", "JavaScript"],
        role: "Solo Development",
    },
    {
        id: 6,
        name: "Train Scheduler",
        repoLink: "https://github.com/reekamaharaj/TrainScheduler",
        deployedLink: "https://reekamaharaj.github.io/TrainScheduler/",
        description:
            "Application provides a user with the ability to see a train scheduler. The scheduler updates with the arrival of the next train and how maybe mins away it is. The user can also add new trains.",
        img:
            "https://github.com/reekamaharaj/TrainScheduler/raw/master/assets/images/train.gif",
        techUsed: [
            "Visual Studio Code",
            "HTML",
            "CSS",
            "JavaScript",
            "Firebase",
            "Moment",
        ],
        role: ["Solo Development"],
    },
    {
        id: 7,
        name: "GifTastic",
        repoLink: "https://github.com/reekamaharaj/GitTastic",
        deployedLink: "https://reekamaharaj.github.io/GitTastic/",
        description: "Basic webpage that will display gifs.",
        img:
            "https://github.com/reekamaharaj/GitTastic/raw/master/assets/images/giftastic.gif",
        techUsed: [
            "Visual Studio Code",
            "HTML",
            "CSS",
            "JavaScript",
            "jQuery",
            "Giphy API",
        ],
        role: ["Solo development"],
    },
    {
        id: 8,
        name: "Bootstrap Portfolio",
        repoLink: "https://github.com/reekamaharaj/Bootstrap-Portfolio",
        deployedLink: "https://reekamaharaj.github.io/Bootstrap-Portfolio/",
        description: "A sample portfolio built using bootstrap.",
        img:
            "https://github.com/reekamaharaj/Bootstrap-Portfolio/raw/master/bootstrapport.png",
        techUsed: ["Visual Studio Code", "HTML", "CSS", "Bootstrap"],
        role: ["Solo development"],
    },
    {
        id: 9,
        name: "Adopted",
        repoLink: "https://github.com/reekamaharaj/adopted",
        deployedLink: "https://infinite-sea-58853.herokuapp.com/",
        description:
            "Browser app created to log rescue cats up for adoption and easily move them from adoptable to adopted. Will be integrated into the cat finder app Catster.",
        img:
            "https://github.com/reekamaharaj/adopted/raw/master/public/assets/img/catster.png",
        techUsed: [
            "Visual Studio Code",
            "HTML",
            "CSS",
            "JavaScript",
            "Handlebars",
            "NodeJs",
            "Express",
            "MySQL",
        ],
        role: ["Solo development"],
    },
    {
        id: 10,
        name: "Clicky Meow",
        repoLink: "https://github.com/reekamaharaj/clickymeow",
        deployedLink: "https://reekamaharaj.github.io/clickymeow/",
        description:
            "Clicky Meow is a memory game built with React. Click on a different cat to increase your score!",
        img:
            "https://github.com/reekamaharaj/clickymeow/raw/master/clickymeow.png",
        techUsed: [
            "Visual Studio Code",
            "React",
            "JavaScript",
            "Express",
            "NodeJs",
        ],
        role: ["Solo development"],
    },
    {
        id: 11,
        name: "Responsive Portfolio",
        repoLink: "https://github.com/reekamaharaj/Responsive-Portfolio",
        deployedLink:
            "https://reekamaharaj.github.io/Responsive-Portfolio/index.html",
        description: "Portfolio. Built with Tailwind CSS and HTML",
        img: "",
        techUsed: ["Visual Studio Code", "HTML", "TailwindCSS"],
        role: ["Solo development"],
    },
    {
        id: 12,
        name: "Basic Portfolio",
        repoLink: "https://github.com/reekamaharaj/Basic-Portfolio",
        deployedLink: "https://reekamaharaj.github.io/Basic-Portfolio/",
        description:
            "This is a very basic portfolio page build with CSS and HTML. The page is also mobile responsive.",
        img:
            "https://github.com/reekamaharaj/Basic-Portfolio/raw/master/assets/images/portfolioscreenshot.png",
        techUsed: ["Visual Studio Code", "HTML", "CSS"],
        role: ["Solo development"],
    },
    {
        id: 13,
        name: "Psychic Game",
        repoLink: "https://github.com/reekamaharaj/Psychic-Game",
        deployedLink: "https://reekamaharaj.github.io/Psychic-Game/",
        description:
            "The computer picks a letter and the user has 9 tries to guess that letter. The game will start when the user presses their first key",
        img:
            "https://github.com/reekamaharaj/Psychic-Game/raw/master/assets/images/psychic.gif",
        techUsed: ["Visual Studio Code", "HTML", "TailwindCSS", "JavaScript"],
        role: ["Solo development"],
    },
    {
        id: 14,
        name: "Word Guess Game",
        repoLink: "https://github.com/reekamaharaj/Word-Guess-Game",
        deployedLink: "https://reekamaharaj.github.io/Word-Guess-Game/",
        description:
            "The computer picks a word and the user has a 10 tries to guess the word. The words are related to cats. Watch the little kitties reaction while you play. (Kitty is built with CSS)",
        img:
            "https://github.com/reekamaharaj/Word-Guess-Game/raw/master/assets/images/word.gif",
        techUsed: ["Visual Studio Code", "HTML", "TailwindCSS", "JavaScript"],
        role: ["Solo development"],
    },
    {
        id: 15,
        name: "Liri Node App",
        repoLink: "https://github.com/reekamaharaj/liri-node-app",
        deployedLink: "",
        description:
            "LIRI will search the Bands in Town, OMDB and Spotify APIs based on the command and parameter provided. Some basic information will be returned in the console. The information will also be logged in the log.txt file.",
        img:
            "https://github.com/reekamaharaj/liri-node-app/raw/master/gif/concert-this.gif",
        techUsed: [
            "Visual Studio Code",
            "JavaScript",
            "NodeJs",
            "Axios",
            "Moment",
            "DotEnv",
        ],
        role: ["Solo development"],
    },
    {
        id: 16,
        name: "bamazon",
        repoLink: "https://github.com/reekamaharaj/bamazon",
        deployedLink: "",
        description:
            "bamazon is a command line nodeJS app created to keep track of store inventory from the customer, manager and supervisor views.",
        img:
            "https://github.com/reekamaharaj/bamazon/raw/master/gif/customer.gif",
        techUsed: ["Visual Studio Code", "JavaScript", "NodeJs", "MySQL"],
        role: ["Solo development"],
    },
    {
        id: 17,
        name: "Catster",
        repoLink: "https://github.com/reekamaharaj/catster",
        deployedLink: "https://vast-escarpment-95713.herokuapp.com/",
        description:
            "Catster hopes to help you find your fur companion. Answer a few questions and we will match you with a cat in our system that closely matches what you are looking for.",
        img:
            "https://github.com/reekamaharaj/catster/raw/master/public/assets/images/matchcatster.png",
        techUsed: [
            "Visual Studio Code",
            "HTML",
            "CSS",
            "JavaScript",
            "NodeJs",
            "Express",
            "Handlebars",
            "Heroku",
        ],
        role: ["Solo development"],
    },
    {
        id: 18,
        name: "Those Cute Fuzzies",
        repoLink: "https://github.com/reekamaharaj/thoseCuteFuzzies",
        deployedLink: "https://damp-mesa-71613.herokuapp.com/",
        description:
            "ThoseCuteFuzzies is an app for users to find news articles on cats! The app will scrape articles from LoveMeow site.",
        img:
            "https://github.com/reekamaharaj/Responsive-Portfolio/blob/master/assets/images/thoseCuteFuzzies.jpg?raw=true",
        techUsed: [
            "Visual Studio Code",
            "HTML",
            "CSS",
            "JavaScript",
            "NodeJs",
            "Express",
            "Handlebars",
            "Heroku",
            "Axios",
            "MongoDB",
            "Mongoose",
            "cheerio",
        ],
        role: ["Solo development"],
    },
    {
        id: 19,
        name: "Book Search",
        repoLink: "https://github.com/reekamaharaj/bookSearch",
        deployedLink: "https://secret-sea-43148.herokuapp.com/",
        description: "Book Search is a search app to help you find books!",
        img: "https://github.com/reekamaharaj/bookSearch/raw/master/img.png",
        techUsed: [
            "Visual Studio Code",
            "HTML",
            "CSS",
            "JavaScript",
            "NodeJs",
            "Express",
            "React",
            "Heroku",
            "Google Books API",
            "MongoDB",
        ],
        role: ["Solo development"],
    },
    {
        id: 20,
        name: "EducatAble",
        repoLink: "https://github.com/reekamaharaj/EducatAble",
        deployedLink: "https://educatable.herokuapp.com/",
        description:
            "EducatAble is a safe space to ask questions and learn information from people who live their different abilities everyday. Want to Demo as a user? Email: guest@educatable.com Password: password1!",
        img:
            "https://github.com/reekamaharaj/EducatAble/raw/master/public/images/homepage.png",
        techUsed: [
            "Visual Studio Code",
            "React",
            "Material UI",
            "JavaScript",
            "TypeScript",
            "NodeJs",
            "Express",
            "Heroku",
            "MongoDB",
            "Mongoose",
            "Axios",
            "bcrypt",
            "JSON web token",
            "Webpack",
        ],
        role: ["Project Manager", "backend development"],
    },
    {
        id: 21,
        name: "Barks & Whiskers",
        repoLink: "https://github.com/Jsceroler/Project-2",
        deployedLink: "",
        description:
            "Barks and Whiskers is an app for users to find adoptable pets based on their specific wants. The app will have a variety of search parameters that will pull data from Petfinder API.",
        img:
            "https://github.com/Jsceroler/Project-2/raw/master/views/images/logo.png",
        techUsed: [
            "Visual Studio Code",
            "HTML",
            "CSS",
            "Handlebars",
            "JavaScript",
            "NodeJs",
            "Express",
            "Express-Sessions",
            "bcrypt",
            "fetch",
            "qa",
            "PetFinder API",
        ],
        role: ["Project Manager", "backend development"],
    },
    {
        id: 0,
        name: "",
        repoLink: "",
        deployedLink: "",
        description: "",
        img: "",
        techUsed: [""],
        role: [""],
    },
];

project.forEach(function (obj) {
    db.collection("project")
        .add({
            id: obj.id,
            name: obj.name,
            repoLink: obj.repoLink,
            deployedLink: obj.deployedLink,
            description: obj.description,
            img: obj.img,
            techUsed: obj.techUsed,
            role: obj.role,
        })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
});
