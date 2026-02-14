console.log("************** DELIVERABLE 1. Array operations | Tail *********************");
const tail = ([_, ...rest]) => {
    const clonedArray = structuredClone(rest);
    return clonedArray;
};
console.log(tail(["1 limón", "2 limones", "3 limones"]));
export {};
