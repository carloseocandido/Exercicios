export function execExercise5(): void {
    const logicText = `
        1. Eu deixaria o primeiro interruptor (A) ligado:
        Manteria o Interruptor A ligado e desligaria o Interruptor B e o Interruptor C.
        
        2. Eu iria até a sala das lâmpadas:
        Verificaria quais lâmpadas estão acesas e quais estão apagadas:
        - Se a lâmpada correspondente ao Interruptor A estiver acesa, eu saberia que ela é controlada por A.
        - Se a lâmpada correspondente a B ou C estiver apagada, eu ainda não saberia qual delas é controlada por qual interruptor.
        
        3. Eu voltaria e desativaria o Interruptor A:
        Agora, ligaria o Interruptor B.
        
        4. Eu iria até a sala das lâmpadas novamente:
        Agora, eu verificaria novamente as lâmpadas.
        - Se a lâmpada que estava apagada anteriormente agora estiver ligada, eu saberia que ela é controlada pelo Interruptor B.
        - A lâmpada que continua apagada é controlada pelo Interruptor C (que eu nunca liguei).
    `;

    console.log(logicText);
}