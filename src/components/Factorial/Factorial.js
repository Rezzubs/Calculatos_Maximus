const factorial = num => {
    return (n !== 1) ? num * factorial(num - 1) : 1;
}