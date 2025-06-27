/**
 * Event handler for 'Statistics' button.
 * Calculates following values for the given text and displays them in corresponding fields:
 * 1. Count of characters;
 * 2. Count of spaces;
 * 3. Count of chars for vowels and consonants;
 * 4. Count of words.
 * @param {object} event - Event class
 */
function onStatisticsClicked(event) {
    //TODO: Implement this function
    console.log('onStatisticsClicked called');

    const text = document.getElementById('text').value;
    // 1) Characters count
    const charCount = text.length;

    // 2) Spaces count
    let spacesCount = 0;
    for (let char of text) {
        if (char === ' ') {
            spacesCount++;
        }
    }

    // 3) Vowels count and Consonants count *only english letters
    let vowelsCount = 0;
    let consonantsCount = 0;
    const vowels = 'aeiou';
    const consonants = 'bcdfghjklmnpqrstvwxyz';
    
    for (const char of text) {
        if (vowels.includes(char.toLowerCase())) {
            vowelsCount++;
        } else if (consonants.includes(char)) {
            consonantsCount++;
        }
    }

    // 4) Words count
    const wordsArray = text.trim() === "" ? [] : text.trim().split(/\s+/);
    const wordsCount = wordsArray.length;

    document.getElementById('valCharCount').value = charCount;
    document.getElementById('valSpacesCount').value = spacesCount;
    document.getElementById('valVowelsCount').value = vowelsCount;
    document.getElementById('valConsonantsCount').value = consonantsCount;
    document.getElementById('valWordsCount').value = wordsCount;
}

/**
 * Event handler for 'Statistics' button.
 * Removes all the even words in the given text (starting from 1) and displays result in corresponding field.
 * @param {object} event - Event class
 */
function onRemoveWordsClicked(event) {
    //TODO: Implement this function
    console.log('onRemoveWordsClicked called');

    const text = document.getElementById('text').value;
    const words = text.trim().split(/\s+/);
    
    const oddWords = words.filter((word, index) => index % 2 === 0);
    const oddWordsResult = oddWords.join(' ');

    document.getElementById('valOddWords').value = oddWordsResult;
}


/**********************************************/

function init() {
    const text = document.getElementById('text');
    text.value = txt;
    // Назначаем обработчики кнопкам
    document.getElementById('statistics').addEventListener('click', onStatisticsClicked);
    document.getElementById('removewords').addEventListener('click', onRemoveWordsClicked);
}

document.addEventListener('DOMContentLoaded', init);
