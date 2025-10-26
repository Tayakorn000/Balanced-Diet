function calculateCalories() {
    const age = parseFloat(document.getElementById('cal-age').value);
    const gender = document.getElementById('cal-gender').value;
    const weight = parseFloat(document.getElementById('cal-weight').value);
    const height = parseFloat(document.getElementById('cal-height').value);
    const activityLevel = document.getElementById('cal-activity').value;

    if (!age || !weight || !height || !gender || !activityLevel) {
        document.getElementById('calories-result').textContent = 'กรุณากรอกข้อมูลให้ครบ';
        return;
    }

    let bmr;
    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    const factors = {
        sedentary: 1.2,
        light: 1.375,
        moderate: 1.55,
        active: 1.725,
        'very-active': 1.9
    };

    const calorieNeed = bmr * factors[activityLevel];
    document.getElementById('calories-result').textContent =
        `ความต้องการแคลอรีต่อวันของคุณคือ ${calorieNeed.toFixed(2)} kcal`;
}
