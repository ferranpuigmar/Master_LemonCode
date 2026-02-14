console.log("************** DELIVERABLE 3. Clone Merge | Merge *********************");

function clone<T extends object>(source: T): T {
    return structuredClone(source);
}

const isObject = (obj: any) => {
    return (
        typeof obj === "object" &&
        obj !== null &&
        !Array.isArray(obj)
    );
};

function merge<T extends object, U extends object>(source: T, target: U): T & U {
    if(!isObject(source) || !isObject(target)) {
        throw new Error('Parameters must be objects in merge method');
    }

    return {
        ...clone(target),
        ...clone(source),
    }
}

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

console.log(merge(a, b));
