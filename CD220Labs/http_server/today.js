module.exports.getDate = function getDate() {
    let aestTime = new Date().toLocaleString("en-US", {timeZone: "PST"}); // not sure how to do pacific daylight time
    return new Date(aestTime);
}
