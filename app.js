const loadMeal = () => {
    const inputField = document.getElementById('input-search');
    const inputText = inputField.value;
    inputField.value = '';


    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`)
        .then(res => res.json())
        .then(data => displaySearchMeals(data.meals))

}

const displaySearchMeals = meals => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    meals.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.classList.add('mb-3');
        div.innerHTML = `
        <div class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
        </div>
       </div>
        `
        searchResult.appendChild(div);


    });
}