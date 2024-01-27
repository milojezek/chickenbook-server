const homePage = (req, res) => {
    const info = {
      title: "Homepage"
    }
  
    res.render("index", info);
}

export default {
  homePage
}