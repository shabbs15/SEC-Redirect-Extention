
function ixFunc(url){
  console.log("func runnning");
  var word = "/ix?doc=/";
  var newString = url.replace(word, "/");
  return newString;
};

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return {redirectUrl: ixFunc(details.url)};
  },
  {
    urls: ["https://www.sec.gov/ix?doc=/*"]},
  ["blocking"]
)


//      "https://sec.gov/ix?doc=/*"
