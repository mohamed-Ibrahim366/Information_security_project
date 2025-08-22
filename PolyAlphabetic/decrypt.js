// Polyalphabetic Cipher Decryption (Vigenère)
function polyalphabeticDecrypt(ciphertext, key) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const keyArray = key.toLowerCase().split('');
    let keyIndex = 0;

    return ciphertext.split('').map(char => {
        if (/[a-zA-Z]/.test(char)) {
            const base = char === char.toUpperCase() ? 65 : 97;
            const shift = alphabet.indexOf(keyArray[keyIndex % keyArray.length]);
            keyIndex++;
            return String.fromCharCode((char.charCodeAt(0) - base - shift + 26) % 26 + base);
        }
        return char;
    }).join('');
}
