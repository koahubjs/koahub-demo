export default {

    add: function (a, b) {
        console.log(a + b);
        return a + b;
    },

    dis: function (a, b) {
        console.log(a - b);
        return a - b;
    }
}

export function add(a, b) {
    console.log(a + b);
    return a + b;
}

export function dis(a, b) {
    console.log(a - b);
    return a - b;
}
