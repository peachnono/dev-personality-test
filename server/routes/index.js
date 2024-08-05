var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET all personality test results */ 
router.get("/results", (req, res) => {
  const results = [
    { title: "Front-End Developer", description: "Focuses on the user interface and user experience of web applications. They work with HTML, CSS, JavaScript, and frameworks like React or Angular." },
    { title: "Back-End Developer", description: "" },
    { title: "Full Stack Developer", description: "" },
  ];

  res.json(results);
});

module.exports = router;
