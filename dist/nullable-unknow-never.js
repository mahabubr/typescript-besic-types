"use strict";
// Nullable
const searchName = (value) => {
    if (value === null) {
        console.log("There is Nothing to Search");
    }
    else {
        console.log("searching...");
    }
};
searchName(null);
// Unknown
const getMyCarSpeed = (speed) => {
    if (typeof speed === "number") {
        const convertedSpeed = (speed * 1000) / 3600;
        console.log(convertedSpeed);
    }
    if (typeof speed === "string") {
        const [value, unit] = speed.split(" ");
        const convertedSpeed = (parseInt(value) * 1000) / 3600;
        console.log(convertedSpeed);
    }
    else {
        console.log("There is wrong type");
    }
};
getMyCarSpeed(10);
getMyCarSpeed("10 km/h");
getMyCarSpeed(true);
// Never
function throwError(message) {
    throw new Error(message);
}
throwError("Error");
