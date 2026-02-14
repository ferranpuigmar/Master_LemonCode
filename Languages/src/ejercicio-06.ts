console.log("************** DELIVERABLE 2. Concat | Optional *********************");

function Concat<T>(...args: T[][]): T[] {
    return args.flat();
}

const arrayA = ["1 limón", "2 limones", "3 limones"];
const arrayB = ["4 limones", "5 limones", "6 limones"];
const arrayC = ["7 limones", "8 limones", "9 limones"];
const arrayD = ["10 limones", "11 limones", "12 limones"];

console.log(Concat(arrayA, arrayB, arrayC, arrayD));