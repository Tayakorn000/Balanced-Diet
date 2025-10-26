function calculateBMI() {
    const weight = parseFloat(document.getElementById('bmi-weight').value);
    const height = parseFloat(document.getElementById('bmi-height').value) / 100;

    if (!weight || !height) {
        document.getElementById('bmi-result').innerHTML = 'กรุณากรอกน้ำหนักและส่วนสูงที่ถูกต้อง';
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    let text = `ค่าดัชนีมวลกาย (BMI) ของคุณคือ ${bmi} `;

    if (bmi < 18.5) text += '<br>คุณน้ำหนักน้อยกว่ามาตรฐาน';
    else if (bmi < 24.9) text += '<br>คุณน้ำหนักปกติ';
    else if (bmi < 29.9) text += '<br>คุณน้ำหนักเกินมาตรฐาน';
    else text += '<br>คุณอยู่ในภาวะอ้วน';

    document.getElementById('bmi-result').innerHTML = text;
}