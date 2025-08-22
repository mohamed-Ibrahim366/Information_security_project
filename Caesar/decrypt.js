// Caesar Cipher Decryption
function caesarDecrypt(ciphertext, shift) {
    return ciphertext.split('').map(char => {
        if (/[a-zA-Z]/.test(char)) {
            const base = char === char.toUpperCase() ? 65 : 97;
            return String.fromCharCode((char.charCodeAt(0) - base - shift + 26) % 26 + base);
        }
        return char;
    }).join('');
}
