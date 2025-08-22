// Caesar Cipher Encryption
function caesarEncrypt(plaintext, shift) {
    return plaintext.split('').map(char => {
        if (/[a-zA-Z]/.test(char)) {
            const base = char === char.toUpperCase() ? 65 : 97; // ASCII base for uppercase/lowercase
            return String.fromCharCode((char.charCodeAt(0) - base + shift) % 26 + base);
        }
        return char; // Keep non-alphabetic characters as is
    }).join('');
}
