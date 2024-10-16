document.getElementById('calorieButton').addEventListener('click', function() {
    const weight = document.getElementById('weight').value;
    const heightFeet = document.getElementById('heightFeet').value;
    const heightInches = document.getElementById('heightInches').value;
    const age = document.getElementById('age').value;

    if (!weight || !heightFeet || !heightInches || !age) {
        alert("Please enter your weight, height, and age.");
        return;
    }

    // Convert height to inches
    const totalHeightInches = (parseInt(heightFeet) * 12) + parseInt(heightInches);

    // Calculate Basal Metabolic Rate (BMR) using Mifflin-St Jeor Equation (for men)
    const maintenanceCalories = (10 * weight) + (6.25 * totalHeightInches * 2.54) - (5 * age) + 5;

    // Calculate calories to lose 1 pound per week (500 calorie deficit per day)
    const idealCalories = maintenanceCalories - 500;

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Your ideal daily calorie intake to lose approximately 1 pound per week is around ${Math.round(idealCalories)} calories.</p>`;
});

document.getElementById('proteinButton').addEventListener('click', function() {
    const weight = document.getElementById('weight').value;

    if (!weight) {
        alert("Please enter your weight.");
        return;
    }

    const proteinPerPound = 1;
    const recommendedProteinIntake = weight * proteinPerPound;

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Your recommended daily protein intake for muscle growth is around ${Math.round(recommendedProteinIntake)} grams.</p>`;
});
