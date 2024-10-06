function fibonacciSequence(n: number): number[] {
    const sequence: number[] = [0, 1];

    while (sequence[sequence.length - 1] <= n) {
        const nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        sequence.push(nextNumber);
    }

    return sequence;
}

function isInFibonacci(n: number): boolean {
    const sequence = fibonacciSequence(n);
    return sequence.includes(n);
}

export function execExercise1(numberToCheck: number): void {
    if (isInFibonacci(numberToCheck)) {
        console.log(`${numberToCheck} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${numberToCheck} não pertence à sequência de Fibonacci.`);
    }
}