// Monoalphabetic Cipher Encryption
function monoalphabeticEncrypt(plaintext, key) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return plaintext.split('').map(char => {
        const lowerChar = char.toLowerCase();
        const index = alphabet.indexOf(lowerChar);
        return index === -1 ? char : key[index];
    }).join('');
}
