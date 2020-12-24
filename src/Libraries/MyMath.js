export const factorial = (n) => {
    return n >= 1 ? n * factorial(n - 1) : 1;
}

export const choose = (a,b) => {
    let result = (factorial(a))/(factorial(b) * factorial(a-b));
    console.log(a + " , " + b + " = " + result);
    return result;
}