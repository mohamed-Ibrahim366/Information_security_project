// One-Time Pad Encryption
function oneTimePadEncrypt(plaintext, key) {
    if (plaintext.length !== key.length) {
        throw new Error("Key must be the same length as the plaintext.");
    }

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    plaintext = plaintext.toUpperCase();
    key = key.toUpperCase();

    let ciphertext = "";
    for (let i = 0; i < plaintext.length; i++) {
        const plainCharIndex = alphabet.indexOf(plaintext[i]);
        const keyCharIndex = alphabet.indexOf(key[i]);

        if (plainCharIndex === -1 || keyCharIndex === -1) {
            throw new Error("Plaintext and key must only contain alphabetic characters.");
        }

        const cipherCharIndex = (plainCharIndex + keyCharIndex) % 26;
        ciphertext += alphabet[cipherCharIndex];
    }
    return ciphertext;
}
