const cheerio = require("cheerio");
const axios = require("axios").default;

const fethHtml = async url => {
    try {
        const { data } = await axios.get(url);
        return data;
    } catch {
        console.error(`ERROR: An error occurred while trying to fetch the URL: ${url}`);
        throw error("error")
    }
};

const scrapSteam = async (url) => {
    const steamUrl = url;
    const html = await fethHtml(steamUrl);
    const selector = cheerio.load(html);

    //get title from head tag
    // const searchResults = selector("head").find(
    //     "title"
    // );

    //get metat data tags
    const searchResultsHeader = selector("head").find(
        "meta"
    );

    let result = {};
    let searchResults = Object.keys(searchResultsHeader)

    //get images from from main image container id tag
    const searchResultsBody = selector("body").find(
        "#main-image-container"
    ).find("img");

    const ImageArr = searchResultsBody
        .map((idx, el) => {
            const elementSelector = selector(el);
            const link = elementSelector.attr("data-a-dynamic-image");
            if (link) {
                return link;
            }
            return;
        })
        .get();
    //console.log("ImageArr", ImageArr)

    searchResults
        .forEach((elem) => {
            let el = searchResultsHeader[elem]
            const elementSelector = selector(el);
            const attrProperty = elementSelector.attr("property");
            const attr = elementSelector.attr("name");
            const attrContent = elementSelector.attr("content");
            if (attrProperty) {
                let prop = attrProperty.split(":")
                if (prop[0] == 'og') {
                    result[prop[1]] = attrContent
                }
                return result;
            }
            if (attr) {
                result[attr] = attrContent
                return result;
            }
            return;
        })

    if (ImageArr.length > 0) {
        result['ImageArr'] = Object.keys(JSON.parse(ImageArr[0]))
    }

    return result;
};

module.exports = scrapSteam;