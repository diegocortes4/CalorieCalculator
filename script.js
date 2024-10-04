document.getElementById('calorieButton').addEventListener('click', function() {
    const weight = document.getElementById('weight').value;
    const caloriesPerPound = 3500;
    const deficitPerDay = caloriesPerPound / 7;
    const maintenanceCalories = weight * 15;
    const idealCalories = maintenanceCalories - deficitPerDay;

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Your ideal daily calorie intake is approximately ${Math.round(idealCalories)} calories.</p>`;
});

document.getElementById('proteinButton').addEventListener('click', function() {
    const weight = document.getElementById('weight').value;
    const proteinPerPound = 1;
    const recommendedProteinIntake = weight * proteinPerPound;

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Your recommended daily protein intake for muscle growth ${Math.round(recommendedProteinIntake)} grams.</p>`;
});
