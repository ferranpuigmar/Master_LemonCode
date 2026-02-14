console.log("************** DELIVERABLE 1. Array operations | Init *********************");


const init = <T>(array: T[]): T[] => {
    const clonedArray = structuredClone(array);

    clonedArray.pop();

    return clonedArray;
};

console.log(init(["1 limón", "2 limones", "3 limones"]));