import memberModel from "../model/member.js";

const homePage = (req, res) => {
    const info = {
      title: "Homepage"
    }
  
    res.render("index", info);
}

const add = async (req, res) => {

  try {
    const memberInfo = new memberModel({
      name: "Ignac Pohoda",
      headline: "JavaScript Developer",
      status: "Employed"
    })

    await memberInfo.save();
    res.send("Added successfully to the database.");
    console.log("Successfully added.");
  } catch(err) {
    console.log(`The member couldn't be added.\n${err}`);
  }
  
}

export default {
  homePage,
  add
}