document.getElementById('calorieButton').addEventListener('click', function() {
    const weight = parseFloat(document.getElementById('weight').value);
    const age = parseInt(document.getElementById('age').value);
    const heightFeet = parseInt(document.getElementById('heightFeet').value);
    const heightInches = parseInt(document.getElementById('heightInches').value);

    const heightInCm = (heightFeet * 30.48) + (heightInches * 2.54);

    // Use a simple BMR formula for men: BMR = 66 + (6.23 × weight in lbs) + (12.7 × height in inches) - (6.8 × age)
    // For women: BMR = 655 + (4.35 × weight in lbs) + (4.7 × height in inches) - (4.7 × age)
    const bmrMen = 66 + (6.23 * weight) + (12.7 * ((heightFeet * 12) + heightInches)) - (6.8 * age);
    const bmrWomen = 655 + (4.35 * weight) + (4.7 * ((heightFeet * 12) + heightInches)) - (4.7 * age);

    const maintenanceCaloriesMen = bmrMen * 1.2; // Assuming sedentary activity level
    const maintenanceCaloriesWomen = bmrWomen * 1.2; // Assuming sedentary activity level

    const idealCaloriesMen = maintenanceCaloriesMen - 500; // To lose weight
    const idealCaloriesWomen = maintenanceCaloriesWomen - 500; // To lose weight

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>For Men: Your ideal daily calorie intake to lose weight is approximately ${Math.round(idealCaloriesMen)} calories.</p>
        <p>For Women: Your ideal daily calorie intake to lose weight is approximately ${Math.round(idealCaloriesWomen)} calories.</p>
    `;
});

document.getElementById('proteinButton').addEventListener('click', function() {
    const weight = parseFloat(document.getElementById('weight').value);
    const proteinPerPound = 1;
    const recommendedProteinIntake = weight * proteinPerPound;

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Your recommended daily protein intake for muscle growth is around ${Math.round(recommendedProteinIntake)} grams.</p>`;
});
