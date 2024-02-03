import memberModel from "../model/member.js";

const homePage = (req, res) => {
    const info = {
      title: "Homepage"
    }
  
    res.render("index", info);
}

const add = (req, res) => {
  const info = {
    title: "Homepage"
  }

  res.send("Added successfully");
}

export default {
  homePage,
  add
}