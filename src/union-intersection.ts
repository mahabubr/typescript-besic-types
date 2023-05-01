type NobDeveloper = {
	name: string;
};

// type JuniorDeveloper = {
// 	name: string;
// 	expertise: string;
// 	experience: number;
// };

type JuniorDeveloper = NobDeveloper & {
	expertise: string;
	experience: number;
};

enum Level {
	junior = "junior",
	mid = "mid", // Not Best Practice
	senior = "senior",
}

type NextLevelDeveloper = JuniorDeveloper & {
	leaderShipExperience: number;
	level: Level; // Union Type : "Junior" | "Mid" | "Senior"
};

const newDeveloper: NobDeveloper | JuniorDeveloper = {
	name: "Tom Holand",
	expertise: "JS",
	experience: 5,
};

const developer: NextLevelDeveloper = {
	name: "Next Bro",
	expertise: "TS",
	experience: 8,
	leaderShipExperience: 3,
	level: Level.junior,
};
