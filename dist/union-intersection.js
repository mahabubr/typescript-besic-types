"use strict";
var Level;
(function (Level) {
    Level["junior"] = "junior";
    Level["mid"] = "mid";
    Level["senior"] = "senior";
})(Level || (Level = {}));
const newDeveloper = {
    name: "Tom Holand",
    expertise: "JS",
    experience: 5,
};
const developer = {
    name: "Next Bro",
    expertise: "TS",
    experience: 8,
    leaderShipExperience: 3,
    level: Level.junior,
};
