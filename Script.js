function validateForm() {
    const name = document.getElementById('name').value; // الحصول على قيمة الاسم
    const weight = document.getElementById('weight').value; // الحصول على قيمة الوزن
    const height = document.getElementById('height').value; // الحصول على قيمة الطول

    if (name === ""  weight === ""  height === "") {
        alert("All fields are required!"); // تحقق من أن جميع الحقول مملوءة
        return false;
    }

    if (isNaN(weight) || isNaN(height)) {
        alert("Weight and height must be numeric values!"); // تحقق من أن الوزن والطول قيم رقمية
        return false;
    }

    return true; // إذا كانت البيانات صحيحة، يتم إرسال النموذج
}
