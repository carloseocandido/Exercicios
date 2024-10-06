export function execExercise4(): void {
    const sequences = {
        a: [1, 3, 5, 7, 9], // Próximo elemento é 9
        b: [2, 4, 8, 16, 32, 64, 128], // Próximo elemento é 128
        c: [0, 1, 4, 9, 16, 25, 36, 49], // Próximo elemento é 49
        d: [4, 16, 36, 64, 100], // Próximo elemento é 100
        e: [1, 1, 2, 3, 5, 8, 13], // Próximo elemento é 13
        f: [2, 10, 12, 16, 17, 18, 19, 20] // Próximo elemento é 20
    };
    
    const result = {
        exerciseName: 'Exercicio 4', 
        result: sequences
    };

    console.log(result); 
}
