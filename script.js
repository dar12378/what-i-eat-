const foods = {
  "סנדוויץ": {
    calories: 420,
    protein: 18,
    carbs: 46,
    fat: 17,
    sugar: 5,
    sodium: 690,
    cholesterol: 85
  },
  "פלפל ממולא": {
    calories: 360,
    protein: 16,
    carbs: 42,
    fat: 13,
    sugar: 8,
    sodium: 740,
    cholesterol: 55
  },
  "פסטה": {
    calories: 560,
    protein: 19,
    carbs: 78,
    fat: 19,
    sugar: 7,
    sodium: 620,
    cholesterol: 45
  }
};

const photoInput = document.getElementById("photoInput");
const preview = document.getElementById("preview");

photoInput.addEventListener("change", function () {
  const file = photoInput.files[0];

  if (file) {
    preview.src = URL.createObjectURL(file);
    preview.style.display = "block";
  }
});

function analyzeMeal() {
  const meal = document.getElementById("mealInput").value.trim();
  const portion = document.getElementById("portion").value;

  if (!meal) {
    alert("כתוב מה אכלת");
    return;
  }

  let selectedFood = foods["סנדוויץ"];

  for (let key in foods) {
    if (meal.includes(key)) {
      selectedFood = foods[key];
    }
  }

  let multiplier = 1;
  if (portion === "small") multiplier = 0.75;
  if (portion === "large") multiplier = 1.35;

  document.getElementById("result").innerHTML = `
    <h3>${meal}</h3>
    ${row("קלוריות", Math.round(selectedFood.calories * multiplier), "kcal")}
    ${row("חלבון", Math.round(selectedFood.protein * multiplier), "g")}
    ${row("פחמימות", Math.round(selectedFood.carbs * multiplier), "g")}
    ${row("שומן", Math.round(selectedFood.fat * multiplier), "g")}
    ${row("סוכר", Math.round(selectedFood.sugar * multiplier), "g")}
    ${row("נתרן", Math.round(selectedFood.sodium * multiplier), "mg")}
    ${row("כולסטרול", Math.round(selectedFood.cholesterol * multiplier), "mg")}
    <p class="note">הערכה בלבד.</p>
  `;
}

function row(label, value, unit) {
  return `
    <div class="result-row">
      <strong>${label}</strong>
      <span>${value} ${unit}</span>
    </div>
  `;
}

function quickMeal(name) {
  document.getElementById("mealInput").value = name;
  analyzeMeal();
}
