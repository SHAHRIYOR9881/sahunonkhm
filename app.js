// Requirement
const express = require('express');
const app = express()
const bodyParser = require("body-parser")
const path = require('path')
const cors = require("cors")
const i18n = require("i18n-express")
const expressEjsLayouts = require('express-ejs-layouts')
const expressSession = require('express-session')
const mongoDbSession = require('connect-mongodb-session')(expressSession)
const createFolders = require("./config/folder")
const databaseConnection = require('./config/database')
const { databaseUrl, port, secretTime, secretKey } = require("./config/config")

// Middlewares
app.use(expressSession({
  secret: secretKey, saveUninitialized: false,
  store: new mongoDbSession({ uri: databaseUrl, collection: "session" }),
  resave: false, cookie: { httpOnly: true, maxAge: secretTime, sameSite: "strict" }
}))


app.use(i18n({
  translationsPath: path.join(__dirname, 'i18n'),
  siteLangs: ["ru", "uz"],
  textsVarName: 'translation',
}))
app.use(expressEjsLayouts)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "public")))
app.use(cors({ origin: "*" }))
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs");

// Connectons
createFolders()
databaseConnection()
const server = app.listen(port, () => console.log("Server is connected", server.address().port))

// Rest-Api (Frontend)
app.use(require("./views/router/client")) // client side
app.use(require("./views/router/auth")) // auth side
app.use(require("./views/router/admin")) // admin side
app.use(require("./views/router/moderator")) // moderator side


// Rest-Api (Backend)
app.use(require("./router/galeryRouter"))
app.use(require("./router/newRouter"))
app.use(require("./router/organizationStructureRouter"))
app.use(require("./router/projectRouter"))
app.use(require("./router/regionalBorderRouter"))
app.use(require("./router/staffRouter"))
app.use(require("./router/userRouter"))
app.use(require("./router/vacinationRouter"))
app.use(require("./router/videoRouter"))
app.use(require("./router/statisticRouter"))
app.use(require("./router/indexRouter"))
app.use(require("./router/contactRouter"))

// If Not Found Rest-Api, Return Error 
app.all("*", async (req, res, next) => res.redirect("/404"))
