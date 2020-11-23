var express = require('express');
var router = express.Router();
const scrapSteam = require("./scrapper");

/* GET home page. */
router.get('/', async function (req, res, next) {
  // await scrapper("https://www.bullion-rates.com/gold/INR/2007-1-history.htm");

  //let url = "https://store.steampowered.com/search/?filter=weeklongdeals";
  let url = "https://www.amazon.com/Blue-Light-Blocking-Glasses-Prescription/dp/B085VSWBHF/ref=sr_1_2?dchild=1&fst=as%3Aoff&pf_rd_i=16225007011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=74069509-93ef-4a3c-8dca-a9e3fa773a64&pf_rd_r=824340B7SM7MEMFTPPFB&pf_rd_s=merchandised-search-4&pf_rd_t=101&qid=1487012920&rnid=16225007011&s=computers-intl-ship&sr=1-2"
  //let url = "https://www.amazon.com/AmazonBasics-Performance-Alkaline-Batteries-Count/dp/B00LH3DMUO/ref=sr_1_2?dchild=1&keywords=amazonbasics&pf_rd_p=9349ffb9-3aaa-476f-8532-6a4a5c3da3e7&pf_rd_r=SDBW0GNT5RVE93AG2TFC&qid=1605858691&sr=8-2";
  const result = await scrapSteam(url);
  console.log(result);
  //res.render('index', { title: 'Express' });
  res.send(result);
});

module.exports = router;
