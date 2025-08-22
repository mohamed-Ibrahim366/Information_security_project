// Playfair Cipher Encryption
function playfairEncrypt(plaintext, key) {
    const prepareText = (text) => text.toUpperCase().replace(/[^A-Z]/g, "").replace(/J/g, "I");
    const createMatrix = (key) => {
        const matrix = [];
        const seen = new Set();
        key = prepareText(key + "ABCDEFGHIKLMNOPQRSTUVWXYZ"); // Append alphabet, excluding J

        for (const char of key) {
            if (!seen.has(char)) {
                matrix.push(char);
                seen.add(char);
            }
        }
        return Array.from({ length: 5 }, (_, i) => matrix.slice(i * 5, i * 5 + 5));
    };

    const getCoords = (matrix, char) => {
        for (let row = 0; row < 5; row++) {
            const col = matrix[row].indexOf(char);
            if (col !== -1) return [row, col];
        }
        return null;
    };

    const matrix = createMatrix(key);
    const text = prepareText(plaintext).replace(/(.)\1/g, "$1X$1"); // Add 'X' between duplicates

    const result = [];
    for (let i = 0; i < text.length; i += 2) {
        const a = text[i], b = text[i + 1] || "X";
        const [r1, c1] = getCoords(matrix, a);
        const [r2, c2] = getCoords(matrix, b);

        if (r1 === r2) {
            result.push(matrix[r1][(c1 + 1) % 5], matrix[r2][(c2 + 1) % 5]);
        } else if (c1 === c2) {
            result.push(matrix[(r1 + 1) % 5][c1], matrix[(r2 + 1) % 5][c2]);
        } else {
            result.push(matrix[r1][c2], matrix[r2][c1]);
        }
    }

    return result.join("");
}
