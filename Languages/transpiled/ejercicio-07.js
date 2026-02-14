console.log("************** DELIVERABLE 3. Clone Merge | Clone *********************");
function clone(source) {
    return structuredClone(source);
}
const object = { fruit: "limón", quantity: 5 };
console.log(clone(object));
export {};
