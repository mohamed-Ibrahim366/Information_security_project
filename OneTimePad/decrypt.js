// One-Time Pad Decryption
function oneTimePadDecrypt(ciphertext, key) {
    if (ciphertext.length !== key.length) {
        throw new Error("Key must be the same length as the ciphertext.");
    }

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    ciphertext = ciphertext.toUpperCase();
    key = key.toUpperCase();

    let plaintext = "";
    for (let i = 0; i < ciphertext.length; i++) {
        const cipherCharIndex = alphabet.indexOf(ciphertext[i]);
        const keyCharIndex = alphabet.indexOf(key[i]);

        if (cipherCharIndex === -1 || keyCharIndex === -1) {
            throw new Error("Ciphertext and key must only contain alphabetic characters.");
        }

        const plainCharIndex = (cipherCharIndex - keyCharIndex + 26) % 26;
        plaintext += alphabet[plainCharIndex];
    }
    return plaintext;
}
