var express = require('express');
var router = express.Router();
const scrapSteam = require("./scrapper");

/* GET home page. */
router.get('/', async function (req, res, next) {
  res.send("WelCome");
});

router.post('/scrap', async function (req, res, next) {
  let url = req.body.url;
  const result = await scrapSteam(url);
  console.log(result);
  res.send(result);
})

module.exports = router;
