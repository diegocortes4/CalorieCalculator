document.getElementById('calorieForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const weight = document.getElementById('weight').value;
    const caloriesPerPound = 3500; // 1 pound = 3500 calories
    const deficitPerDay = caloriesPerPound / 7; // to lose 1 pound per week
    const maintenanceCalories = weight * 15; // basic maintenance calculation: 15 calories per lb of body weight
    const idealCalories = maintenanceCalories - deficitPerDay;

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `To lose 1 pound per week, your ideal daily calorie intake is approximately ${Math.round(idealCalories)} calories.`;
});
