const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.get("/signup", (req, res) => {
    return res.render("signup");
});
router.post("/signup", async(req, res) => {
    const { email, name, password, role } = req.body;
    const user = await User.create({
        email,
        name, 
        password, 
        role,
    });
    console.log(user);
    return res.redirect("/home");
});
router.get("/login", (req, res) => {
    return res.render("login");
});
router.post("/login", async(req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({email});
    console.log(user);
    return res.redirect("/home");
});
router.get("/home", (req, res) => {
    return res.render("success");
})

module.exports = router;