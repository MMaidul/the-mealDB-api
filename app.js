const loadMeal = () => {
    const inputField = document.getElementById('input-search');
    const inputText = inputField.value;
    inputField.value = '';

    const singleSearchResult = document.getElementById('single-result');
    singleSearchResult.innerText = '';


    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`)
        .then(res => res.json())
        .then(data => displaySearchMeals(data.meals))

}

const displaySearchMeals = meals => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    meals.forEach(meal => {

        const div = document.createElement('div');
        div.classList.add('col');
        div.classList.add('mb-3');
        div.innerHTML = `
        <div onclick="singleMealInfo('${meal.idMeal}')" class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
        </div>
       </div>
        `
        searchResult.appendChild(div);


    });
};



const singleMealInfo = mealId => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i= ${mealId}`)
        .then(res => res.json())
        .then(data => singleDisplayMeal(data.meals[0]))
}


const singleDisplayMeal = meal => {
    console.log(meal);
    const singleSearchResult = document.getElementById('single-result');
    singleSearchResult.innerText = '';
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card mb-3">
    <div class="row g-0">
        <div class="col-md-4">
            <img src="${meal.strMealThumb}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
                <a href="${meal.strYoutube}"  target="_blank" class="btn btn-success">Learn form tutorial</a>
            </div>
        </div>
    </div>
   </div>
    `;

    singleSearchResult.appendChild(div);
}