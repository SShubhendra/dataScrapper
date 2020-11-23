# dataScrapper
//install dependencies : 
npm i
//start script :
npm start

Use Following urls as input url:

 // "https://store.steampowered.com/search/?filter=weeklongdeals"; //with OG parameters set
 // "https://www.amazon.com/Blue-Light-Blocking-Glasses-Prescription/dp/B085VSWBHF/ref=sr_1_2?dchild=1&fst=as%3Aoff&pf_rd_i=16225007011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=74069509-93ef-4a3c-8dca-a9e3fa773a64&pf_rd_r=824340B7SM7MEMFTPPFB&pf_rd_s=merchandised-search-4&pf_rd_t=101&qid=1487012920&rnid=16225007011&s=computers-intl-ship&sr=1-2"
 // "https://www.amazon.com/AmazonBasics-Performance-Alkaline-Batteries-Count/dp/B00LH3DMUO/ref=sr_1_2?dchild=1&keywords=amazonbasics&pf_rd_p=9349ffb9-3aaa-476f-8532-6a4a5c3da3e7&pf_rd_r=SDBW0GNT5RVE93AG2TFC&qid=1605858691&sr=8-2";
 or any other amagon product url to check 
 
 POST, application/json  , http://localhost:3000/scrap
body : {
  "url":url
}
  