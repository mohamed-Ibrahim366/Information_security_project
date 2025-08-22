function railFenceCipherEncrypt(text, rails) {
    // إزالة المسافات من النص
    text = text.replace(/\s+/g, '');
    
    // إنشاء مصفوفة تحتوي على الصفوف
    let rail = Array(rails).fill().map(() => []);
    
    // تحديد الاتجاه (من الأعلى إلى الأسفل أو العكس)
    let down = false;
    let row = 0;
    
    // ملء المصفوفة بالاحرف من النص
    for (let i = 0; i < text.length; i++) {
        rail[row].push(text[i]);
        
        // تغيير الاتجاه عند الوصول إلى أعلى أو أسفل
        if (row === 0 || row === rails - 1) {
            down = !down;
        }
        
        row += down ? 1 : -1;
    }
    
    // قراءة الحروف من الصفوف بشكل أفقي لخلق النص المشفر
    let encryptedText = '';
    for (let i = 0; i < rails; i++) {
        encryptedText += rail[i].join('');
    }
    
    return encryptedText;
}

