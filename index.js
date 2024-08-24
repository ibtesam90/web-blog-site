import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

var users = {"muhammadibtesam@yahoo.com":{"name": "Muhammad Ibtesam", "password":"12345678"}};

var userName = ""

var websiteBlogs = {
    "firstBlog": { author: "Muhammad Ibtesam", date : Date().toString(), blogBody : "Quam purus justo enim purus, dolor enim, ut eu lectus nam eget nibh. Ante illum nullam leo, vivamus aliquam massa massainceptos fermentum porttitor, blandit vehicula, lorem in placerat ut aliquam at sociosqu. Vivamus duis ultricies aliquam placerat, tincidunt scelerisque imperdiet, egestas erat vel. Libero rerum. Donec ligula tristique, purus montes, feugiatid nunc in a nec. Duis odio, vitae sed etiam mi massa, laoreet amet purus amet rhoncus, eget sed, arcu urna. Maecenaswisi id, at donec enim. Proin nisl, pulvinar leo suspendisse, cum parturient non, congue leo et ut in, neque ut lacusauctor quam fermentum urna. Metus quis, mauris dictum aptent ultrices nulla viverra ornare, tempor elit enim leo donec,sed sed. Vivamus sapien facilisi, tempor arcu nulla justo sed et, eget suspendisse lacus sed nunc mattis lectus. Metusgravida."},
    "secondBlog": { author: "Muhammad Ibtesam", date : Date().toString(), blogBody : "Lorem ipsum dolor sit amet, et proin, justo mus. Porta suspendisse turpis netus sagittis tortor at, vitae aliquet pharetra cras velit, id gravida, neque nulla lorem, posuere hac. Ultricies eget lacus vehicula, in ante aliquam et,facilisis tempor duis orci. Sed molestie sem in duis eu id, nisl id ultricies metus blandit eget praesent, pede tempornullam, vitae arcu tortor suspendisse nibh risus. Nulla id suscipit reiciendis nulla erat. Porta enim aute luctus,ducimus sodales dolor."},
    "thirdBlog": { author: "Muhammad Ibtesam", date : Date().toString(), blogBody : "Quam purus justo enim purus, dolor enim, ut eu lectus nam eget nibh. Ante illum nullam leo, vivamus aliquam massa massainceptos fermentum porttitor, blandit vehicula, lorem in placerat ut aliquam at sociosqu. Vivamus duis ultricies aliquam placerat, tincidunt scelerisque imperdiet, egestas erat vel. Libero rerum. Donec ligula tristique, purus montes, feugiatid nunc in a nec. Duis odio, vitae sed etiam mi massa, laoreet amet purus amet rhoncus, eget sed, arcu urna. Maecenaswisi id, at donec enim. Proin nisl, pulvinar leo suspendisse, cum parturient non, congue leo et ut in, neque ut lacusauctor quam fermentum urna. Metus quis, mauris dictum aptent ultrices nulla viverra ornare, tempor elit enim leo donec,sed sed. Vivamus sapien facilisi, tempor arcu nulla justo sed et, eget suspendisse lacus sed nunc mattis lectus. Metusgravida."},
    "fourthBlog": { author: "Ali Hasan", date : Date().toString(), blogBody : "Lorem ipsum dolor sit amet, et proin, justo mus. Porta suspendisse turpis netus sagittis tortor at, vitae aliquet pharetra cras velit, id gravida, neque nulla lorem, posuere hac. Ultricies eget lacus vehicula, in ante aliquam et,facilisis tempor duis orci. Sed molestie sem in duis eu id, nisl id ultricies metus blandit eget praesent, pede tempornullam, vitae arcu tortor suspendisse nibh risus. Nulla id suscipit reiciendis nulla erat. Porta enim aute luctus,ducimus sodales dolor."},
    "fifthBlog": { author: "Ali Hasan", date : Date().toString(), blogBody : "Quam purus justo enim purus, dolor enim, ut eu lectus nam eget nibh. Ante illum nullam leo, vivamus aliquam massa massainceptos fermentum porttitor, blandit vehicula, lorem in placerat ut aliquam at sociosqu. Vivamus duis ultricies aliquam placerat, tincidunt scelerisque imperdiet, egestas erat vel. Libero rerum. Donec ligula tristique, purus montes, feugiatid nunc in a nec. Duis odio, vitae sed etiam mi massa, laoreet amet purus amet rhoncus, eget sed, arcu urna. Maecenaswisi id, at donec enim. Proin nisl, pulvinar leo suspendisse, cum parturient non, congue leo et ut in, neque ut lacusauctor quam fermentum urna. Metus quis, mauris dictum aptent ultrices nulla viverra ornare, tempor elit enim leo donec,sed sed. Vivamus sapien facilisi, tempor arcu nulla justo sed et, eget suspendisse lacus sed nunc mattis lectus. Metusgravida."},
    "sixthBlog": { author: "Ali Hasan", date : Date().toString(), blogBody : "Lorem ipsum dolor sit amet, et proin, justo mus. Porta suspendisse turpis netus sagittis tortor at, vitae aliquet pharetra cras velit, id gravida, neque nulla lorem, posuere hac. Ultricies eget lacus vehicula, in ante aliquam et,facilisis tempor duis orci. Sed molestie sem in duis eu id, nisl id ultricies metus blandit eget praesent, pede tempornullam, vitae arcu tortor suspendisse nibh risus. Nulla id suscipit reiciendis nulla erat. Porta enim aute luctus,ducimus sodales dolor."},
    "seventhBlog": { author: "Muhammad Ibtesam", date : Date().toString(), blogBody : "Quam purus justo enim purus, dolor enim, ut eu lectus nam eget nibh. Ante illum nullam leo, vivamus aliquam massa massainceptos fermentum porttitor, blandit vehicula, lorem in placerat ut aliquam at sociosqu. Vivamus duis ultricies aliquam placerat, tincidunt scelerisque imperdiet, egestas erat vel. Libero rerum. Donec ligula tristique, purus montes, feugiatid nunc in a nec. Duis odio, vitae sed etiam mi massa, laoreet amet purus amet rhoncus, eget sed, arcu urna. Maecenaswisi id, at donec enim. Proin nisl, pulvinar leo suspendisse, cum parturient non, congue leo et ut in, neque ut lacusauctor quam fermentum urna. Metus quis, mauris dictum aptent ultrices nulla viverra ornare, tempor elit enim leo donec,sed sed. Vivamus sapien facilisi, tempor arcu nulla justo sed et, eget suspendisse lacus sed nunc mattis lectus. Metusgravida."},
    "eigthBlog": { author: "Muhammad Ibtesam", date : Date().toString(), blogBody : "Lorem ipsum dolor sit amet, et proin, justo mus. Porta suspendisse turpis netus sagittis tortor at, vitae aliquet pharetra cras velit, id gravida, neque nulla lorem, posuere hac. Ultricies eget lacus vehicula, in ante aliquam et,facilisis tempor duis orci. Sed molestie sem in duis eu id, nisl id ultricies metus blandit eget praesent, pede tempornullam, vitae arcu tortor suspendisse nibh risus. Nulla id suscipit reiciendis nulla erat. Porta enim aute luctus,ducimus sodales dolor."},
    "ninthBlog": { author: "Muhammad Ibtesam", date : Date().toString(), blogBody : "Quam purus justo enim purus, dolor enim, ut eu lectus nam eget nibh. Ante illum nullam leo, vivamus aliquam massa massainceptos fermentum porttitor, blandit vehicula, lorem in placerat ut aliquam at sociosqu. Vivamus duis ultricies aliquam placerat, tincidunt scelerisque imperdiet, egestas erat vel. Libero rerum. Donec ligula tristique, purus montes, feugiatid nunc in a nec. Duis odio, vitae sed etiam mi massa, laoreet amet purus amet rhoncus, eget sed, arcu urna. Maecenaswisi id, at donec enim. Proin nisl, pulvinar leo suspendisse, cum parturient non, congue leo et ut in, neque ut lacusauctor quam fermentum urna. Metus quis, mauris dictum aptent ultrices nulla viverra ornare, tempor elit enim leo donec,sed sed. Vivamus sapien facilisi, tempor arcu nulla justo sed et, eget suspendisse lacus sed nunc mattis lectus. Metusgravida."},
    "tenthBlog": { author: "Ali Hasan", date : Date().toString(), blogBody : "Lorem ipsum dolor sit amet, et proin, justo mus. Porta suspendisse turpis netus sagittis tortor at, vitae aliquet pharetra cras velit, id gravida, neque nulla lorem, posuere hac. Ultricies eget lacus vehicula, in ante aliquam et,facilisis tempor duis orci. Sed molestie sem in duis eu id, nisl id ultricies metus blandit eget praesent, pede tempornullam, vitae arcu tortor suspendisse nibh risus. Nulla id suscipit reiciendis nulla erat. Porta enim aute luctus,ducimus sodales dolor."},
    "eleventhBlog": { author: "Muhammad Ibtesam", date : Date().toString(), blogBody : "Quam purus justo enim purus, dolor enim, ut eu lectus nam eget nibh. Ante illum nullam leo, vivamus aliquam massa massainceptos fermentum porttitor, blandit vehicula, lorem in placerat ut aliquam at sociosqu. Vivamus duis ultricies aliquam placerat, tincidunt scelerisque imperdiet, egestas erat vel. Libero rerum. Donec ligula tristique, purus montes, feugiatid nunc in a nec. Duis odio, vitae sed etiam mi massa, laoreet amet purus amet rhoncus, eget sed, arcu urna. Maecenaswisi id, at donec enim. Proin nisl, pulvinar leo suspendisse, cum parturient non, congue leo et ut in, neque ut lacusauctor quam fermentum urna. Metus quis, mauris dictum aptent ultrices nulla viverra ornare, tempor elit enim leo donec,sed sed. Vivamus sapien facilisi, tempor arcu nulla justo sed et, eget suspendisse lacus sed nunc mattis lectus. Metusgravida."},
    "twelvfthBlog": { author: "Muhammad Ibtesam", date : Date().toString(), blogBody : "Lorem ipsum dolor sit amet, et proin, justo mus. Porta suspendisse turpis netus sagittis tortor at, vitae aliquet pharetra cras velit, id gravida, neque nulla lorem, posuere hac. Ultricies eget lacus vehicula, in ante aliquam et,facilisis tempor duis orci. Sed molestie sem in duis eu id, nisl id ultricies metus blandit eget praesent, pede tempornullam, vitae arcu tortor suspendisse nibh risus. Nulla id suscipit reiciendis nulla erat. Porta enim aute luctus,ducimus sodales dolor."}
};

var userSignedIn = false;
var webData = {userSigning:userSignedIn, name:userName ,blogs:websiteBlogs}

app.get("/", (req , res) => {
    if (!userSignedIn){
        res.render("sign-in.ejs",{userSigning : userSignedIn})
    } else {
        res.render("index.ejs",webData)
    }
    
})

app.get("/create", (req , res) => {

    if (userSignedIn){
        res.render("create.ejs",webData);
    } else {
        res.render("sign-in.ejs",webData);
    }
    
})

app.post("/create/submit", (req , res) => {
    let key = req.body.blogTitle;
    let blogText = req.body.blogBody;
    if (webData.blogs.key) {
        console.log("The title already exist");
        res.render("create.ejs", webData);
    } else {
        console.log(key);
        websiteBlogs[key] = {}
        websiteBlogs[key]["author"] = webData.name;
        websiteBlogs[key]["date"] = Date().toString();
        websiteBlogs[key]["blogBody"] = blogText;
        webData.blogs = websiteBlogs;
        res.render("index.ejs", webData)
    }
    res.render("index.ejs",webData)
})

app.get("/sign-in", (req , res) => {
    res.render("sign-in.ejs",{userSigning : userSignedIn})
})

app.get("/blog/:key", (req, res) => {
    const blogKey = req.params.key;
    webData.key = blogKey;
    
    if (blogKey) {
        res.render("blogDetail.ejs", webData);
    } else {
        console.log("Code entred 404.");
        res.sendStatus(404).send("Blog not found");
    }
})

app.post("/blog/:key", (req, res) => {
    const blogKey = req.params.key;
    webData.key = blogKey;

    if (req.body.action === 'edit'){
        if (blogKey) {
            res.render("edit.ejs", webData);
        } else {
            console.log("Code entred 404.");
            res.sendStatus(404).send("Blog not found");
        }
    } else if (req.body.action === 'delete'){
        delete websiteBlogs[blogKey];
        webData.blogs = websiteBlogs;
        res.render("index.ejs", webData);
    }
})

app.post("/blog/:key/edit", (req, res) => {
    const blogKey = req.params.key;
    let blogText = req.body.blogBody;
    websiteBlogs[blogKey]["date"] = Date().toString();
    websiteBlogs[blogKey]["blogBody"] = blogText;
    webData.blogs = websiteBlogs;
    res.render("index.ejs",webData);
    
})

app.post("/sign-in/submit", (req , res) => {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;

    if (users[email]){
        if (users[email]["password"] === password){
            userSignedIn = true;
            webData.userSigning = userSignedIn;
            webData.name = users[email]["name"];
            
            res.render("index.ejs", webData)
        } else {
            res.render("sign-in.ejs",{userSigning : userSignedIn});
        }
    }
    else {
        // res.jsonp("User does not exist.");
        res.render("sign-in.ejs",{userSigning : userSignedIn});
    }
})
app.get("/sign-out", (req , res) => {
    userSignedIn = false;
    webData.userSigning = userSignedIn;
    webData.name = "";
    res.render("sign-in.ejs", webData)
})

app.listen(port,() => {
    console.log(`Server running at port ${port}`)
})