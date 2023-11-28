async function getAllMeal() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );
  const data = await response.json();
  return data.meals;
}

function displayMeal() {
  console.log(getAllMeal());
  //   getAllMeal().then((meals) => {
  //     const mealContainer = document.querySelector("#meal-container");
  //     meals.forEach((meal) => {
  //       const mealDiv = document.createElement("div");
  //       mealDiv.className = "meal";
  //       mealDiv.innerHTML = `
  //         <img src="${meal.strMealThumb}" alt="">
  //         <h3>${meal.strMeal}</h3>
  //         <button onclick="displayMealDetails('${meal.strMeal}')">Details</button>
  //         `;
  //       mealContainer.appendChild(mealDiv);
  //     });
  //   });
}
