function calculateSum(index: number): number {
    if (!Number.isInteger(index) || index < 1) {
        throw new Error('O índice deve ser um número inteiro positivo.');
    }

    let sum = 0;
    let k = 1;

    while (k < index) {
        k = k + 1;
        sum = sum + k;
    }

    return sum;
}

export function execExercise3(index: number): void {

    try {
        const result = calculateSum(index);
        console.log(`O valor da soma é: ${result}`);
    } catch (error) {
        console.error(error.message);
    }
}