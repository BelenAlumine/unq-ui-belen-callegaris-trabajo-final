import { clearWord } from './wordUtils';

export const validateSubmission = (word, { lastWord, wordList, gameOver, isSubmitting }) => {
    const cleanWord = clearWord(word.trim().toLowerCase());

    if (isSubmitting) return { cleanWord, valid: false, error: "PROCESANDO..." };
    if (!cleanWord || gameOver) return { cleanWord, valid: false, error: "JUEGO TERMINADO" };
    if (wordList.includes(cleanWord)) return { cleanWord, valid: false, error: "PALABRA REPETIDA" };

    if (lastWord) {
        const initial = lastWord.slice(-1);
        if (!cleanWord.startsWith(initial)) {
            return { cleanWord, valid: false, error: `DEBE INICIAR EN '${initial}'` };
        }
    }

    return { cleanWord, valid: true };
};
