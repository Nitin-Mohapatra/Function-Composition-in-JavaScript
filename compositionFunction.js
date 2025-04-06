const compose = function(functions) {
    functions = functions.reverse(); // Apply right-to-left composition
    return function composer(x) {
        for (let fn of functions) {
            x = fn(x);
        }
        return x;
    };
};
