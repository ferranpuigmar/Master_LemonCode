console.log("************** DELIVERABLE 1. Array operations | Last *********************");
const last = (array) => {
    const clonedArray = structuredClone(array);
    return clonedArray[clonedArray.length - 1];
};
console.log(last(["1 limón", "2 limones", "3 limones"]));
export {};
