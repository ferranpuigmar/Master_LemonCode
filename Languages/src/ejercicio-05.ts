console.log("************** DELIVERABLE 2. Concat *********************");

function Concat<T, U>(a: T[], b: U[]): (T | U)[] {
    const clonedA = structuredClone(a);
    const clonedB = structuredClone(b);

    return [...clonedA, ...clonedB];
}

const arrayA = ["1 limón", "2 limones", "3 limones"];
const arrayB = ["4 limones", "5 limones", "6 limones"];

console.log(Concat(arrayA, arrayB));