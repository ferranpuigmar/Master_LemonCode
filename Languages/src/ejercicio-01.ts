console.log("************** DELIVERABLE 1. Array operations | Head *********************");

const head = <T>([firstElement]: T[]): T => {
    const clonedArray = structuredClone(firstElement);

    return clonedArray;
};

console.log(head(["1 limón", "2 limones", "3 limones"]));
