// Monoalphabetic Cipher Decryption
function monoalphabeticDecrypt(ciphertext, cipherAlphabet) {

    const normalAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    const cipherMap = {};
    for (let i = 0; i < cipherAlphabet.length; i++) {
        cipherMap[cipherAlphabet[i]] = normalAlphabet[i];
    }

    // Decrypt the ciphertext
    let decryptedMessage = '';
    for (let i = 0; i < ciphertext.length; i++) {
        let char = ciphertext[i];

        // If the character is in the cipher alphabet, replace it
        if (cipherMap[char]) {
            decryptedMessage += cipherMap[char];
        } else {
            // If the character is not in the cipher alphabet (e.g., space or punctuation), leave it unchanged
            decryptedMessage += char;
        }
    }

    return decryptedMessage;
}


