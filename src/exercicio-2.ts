function countLetterA(inputString: string): { exists: boolean; count: number } {
    const matches = inputString.match(/a/gi);
    return {
        exists: matches !== null,
        count: matches ? matches.length : 0
    };
}

export function execExercise2(testString: string): void {
    const result = countLetterA(testString);
    if (result.exists) {
        console.log(`A letra 'a' (maiúscula ou minúscula) aparece ${result.count} vezes.`);
    } else {
        console.log("A letra 'a' não está presente na string.");
    }
}
