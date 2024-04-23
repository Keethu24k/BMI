document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height)) {
        alert('Please enter valid weight and height.');
        return;
    }

    const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
    let message;

    if (bmi < 18.5) {
        message = 'You are underweight.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        message = 'Your weight is normal.';
    } else {
        message = 'You are overweight.';
    }

    document.getElementById('result').innerHTML = `Your BMI is ${bmi}. ${message}`;
});