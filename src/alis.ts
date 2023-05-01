type CrushType = {
	name: string;
	age?: number; // optional
	profession: string;
	address: string;
};

const crush1: CrushType = {
	name: "moina pakhi",
	age: 22,
	profession: "web developer",
	address: "Uganda",
};

const crush2: CrushType = {
	name: "tia pakhi",
	profession: "next level web developer",
	address: "mexico",
};

type CrushMarriedType = boolean;
const isCrushMarried: CrushMarriedType = false;

type CourseNameType = string;
const courseName: CourseNameType = "New Level Web Development";

type OperationType = (x: number, y: number) => number;

const calculate = (
	number1: number,
	number2: number,
	operation: OperationType
) => {
	return operation(number1, number2);
};

calculate(10, 20, (x, y) => x + y);
calculate(10, 20, (x, y) => x - y);
calculate(10, 20, (x, y) => x * y);
