import express  from "express";
import expressEjsLayouts from "express-ejs-layouts";
import routes from "./server/routes/mainRoutes.js"

const PORT = 5000 || process.env.PORT;
const app = express();

// bodyParser
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// static pages
app.use(express.static("public"));

// Layout setting
app.use(expressEjsLayouts);
app.set("layout", "./layout/main");
app.set("view engine", "ejs");

// set routes
app.use("/", routes)

app.listen(PORT, () => {
  console.log(`=== port is listening on ${PORT} ===`)
});

