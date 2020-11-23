var scrapper = require('../routes/scrapper.js');
var expect = require('chai').expect;

describe('#scrapper', function () {
    this.timeout(15000);

    context('with Og parameters', function () {
        it('should contain og parameters', function () {
            return scrapper("https://store.steampowered.com/search/?filter=weeklongdeals").then((result) => {
                expect(result).to.have.property('title');
            })
        })
    })

    context('with amagon product url1', function () {
        it('should contain images array', function (done) {
            scrapper("https://www.amazon.com/Blue-Light-Blocking-Glasses-Prescription/dp/B085VSWBHF/ref=sr_1_2?dchild=1&fst=as%3Aoff&pf_rd_i=16225007011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=74069509-93ef-4a3c-8dca-a9e3fa773a64&pf_rd_r=824340B7SM7MEMFTPPFB&pf_rd_s=merchandised-search-4&pf_rd_t=101&qid=1487012920&rnid=16225007011&s=computers-intl-ship&sr=1-2").then((result) => {
                //console.log(result)
                expect(result).to.have.property('ImageArr');
                done();
            })
        })
    })

    context('with amagon product url2', function () {
        it('should contain description', function (done) {
            scrapper("https://www.amazon.com/AmazonBasics-Performance-Alkaline-Batteries-Count/dp/B00LH3DMUO/ref=sr_1_2?dchild=1&keywords=amazonbasics&pf_rd_p=9349ffb9-3aaa-476f-8532-6a4a5c3da3e7&pf_rd_r=SDBW0GNT5RVE93AG2TFC&qid=1605858691&sr=8-2").then((result) => {
                // console.log(result)
                expect(result).to.have.property('description');
                done()
            });
        })
    })

})