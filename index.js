const express = require("express");
const cors = require(`cors`)
const path = require("path");

const db = require("./models");
const isAuth = require("./middleware/isAuth");
const cookieSession = require("./middleware/cookieSession");
const redirectTraffic = require("./middleware/redirectTraffic");

require("dotenv/config");

const PORT = process.env.PORT || 5002;

// Init Express
const app = express();

// Redirect trafic to root and https
app.set("trust proxy", true);
app.use(redirectTraffic);

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Session Cookie Middleware
app.use(cookieSession);

// Authorization Middleware
app.use(isAuth);

// Allow cross origin request
app.use(function (req, res, next) {
  let corsOptions = {};
  if ((req.get('host') === 'localhost:5002')) {
    corsOptions = {
      origin: 'http://localhost:8081',
      optionsSuccessStatus: 200
    }
  } else {
    corsOptions = {
      origin: [
        'https://www.songboook.com',
        'https://songboook.com',
        'http://songboook.herokuapp.com',
        'https://songboook.herokuapp.com',
      ],
      credentials: true,
      optionsSuccessStatus: 200
    }
  }
  cors(corsOptions)(req, res, next);
})

// Router to API endpoints
app.use("/auth", require("./api/controller/authController"));
app.use("/user", require("./api/controller/userController"));
app.use("/mail", require("./api/controller/mailController"));
app.use("/song", require("./api/controller/songController"));
app.use("/lyrics", require("./api/controller/lyricsController"));
app.use("/random", require("./api/controller/randomController"));


// Start DB & use GraphQL
db.sequelize.sync().then((req) => {});

// Set up for React
app.use(express.static(path.join(__dirname, "build")));
app.get('/', (req, res) => { res.sendFile(path.join(__dirname, "build", "index.html")); });

// Listen on a port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
