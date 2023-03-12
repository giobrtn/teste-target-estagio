function fibonacci(num){
    let fib = [0, 1];
    let i = 2;

    while (fib[i - 1] + fib[i - 2] <= num){
        fib[i] = fib[i - 1] + fib[i - 2];
        i++;
    }

    if (fib.includes(num)){
        console.log(`O número ${num} pertence à sequência de Fibonacci: ${fib}`);
    }else{
        console.log(`O número ${num} não pertence à sequência de Fibonacci: ${fib}`)
    }
}

console.log(fibonacci(34)); // Saída: O número 34 pertence à sequência de Fibonacci: 0,1,1,2,3,5,8,13,21,34