// الحصول على جميع الأزرار الملونة
const colorButtons = document.querySelectorAll('.btn-primary, .btn-warning, .btn-dark');

colorButtons.forEach(button => {
    button.addEventListener('click', () => {
        // الحصول على الزر الذي يحتوي على 'btn btn-secondary' بعد الزر الملون
        const secondaryButton = button.nextElementSibling;

        // التحقق مما إذا كان الزر التالي يحتوي على الكلاس 'btn btn-secondary'
        if (secondaryButton && secondaryButton.classList.contains('btn-secondary')) {
            // تبديل عرض الزر (إظهار إذا كان مخفيًا والعكس)
            if (secondaryButton.style.display === 'none' || secondaryButton.style.display === '') {
                secondaryButton.style.display = 'block';
            } else {
                secondaryButton.style.display = 'none';
            }
        }
    });
});
