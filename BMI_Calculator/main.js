const form = document.querySelector('form');
// const height = parseInt(document.querySelector('#height').value);
// this gives empty value

form.addEventListener('submit', function (e) {
    e.preventDefault();
    // 🔄 Page will reload (default behavior), even if fields are empty

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    // Validation
    if (isNaN(height) || height <= 0) {
        results.innerHTML =  "Please enter a valid height (in cm)";
    } else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = "Please enter a valid weight (in kg)";
    } else {
        // Correct BMI formula: (weight in kg) / ((height in m)^2)
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

        let category = "";

        if (bmi < 18.6) {
            category = "Underweight";
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            category = "Normal Range";
        } else {
            category = "Overweight";
        }

        results.innerHTML = `<span>Your BMI is <strong>${bmi}</strong> — <strong>${category}</strong></span>`;

    }

}); 