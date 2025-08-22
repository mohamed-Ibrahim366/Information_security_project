function railFenceCipherDecrypt(ciphertext, rails) {
    // إنشاء مصفوفة للصفوف تحتوي على نفس عدد الصفوف
    let rail = Array(rails).fill().map(() => []);
    
    // تحديد اتجاه الكتابة (من أعلى إلى أسفل أو العكس)
    let down = false;
    let row = 0;
    
    // توزيع الحروف المشفرة عبر الصفوف
    let index = 0;
    for (let i = 0; i < ciphertext.length; i++) {
        rail[row].push('*'); // حجز مكان الحروف المشفرة في الصفوف
        if (row === 0 || row === rails - 1) {
            down = !down;
        }
        row += down ? 1 : -1;
    }
    
    // ملء الصفوف بمحتويات النص المشفر
    for (let i = 0; i < rails; i++) {
        for (let j = 0; j < rail[i].length; j++) {
            if (index < ciphertext.length) {
                rail[i][j] = ciphertext[index++];
            }
        }
    }
    
    // فك التشفير وقراءة النص عموديًا عبر الصفوف
    let decryptedText = '';
    row = 0;
    down = false;
    for (let i = 0; i < ciphertext.length; i++) {
        decryptedText += rail[row].shift(); // أخذ الحرف من الصف
        if (row === 0 || row === rails - 1) {
            down = !down;
        }
        row += down ? 1 : -1;
    }
    
    return decryptedText;
}

