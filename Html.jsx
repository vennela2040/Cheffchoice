import React, { useState } from 'react';
import './styles/index.css';

function Html() {
  const [searchInput, setSearchInput] = useState('');
  const [meals, setMeals] = useState([]);
  const [showRecipe, setShowRecipe] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState({});
  const [searched, setSearched] = useState(false); // Added state variable

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const getMealList = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`)
      .then(response => response.json())
      .then(data => {
        setSearched(true); // Set searched to true
        if (data.meals) {
          setMeals(data.meals);
        } else {
          setMeals([]);
        }
      })
      .catch(error => {
        console.error('Error fetching meal list:', error);
      });
  };

  const getMealRecipe = (e) => {
    e.preventDefault();
    if (e.target.classList.contains('recipe-btn')) {
      let mealItem = e.target.parentElement.parentElement;
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
        .then(response => response.json())
        .then(data => {
          setSelectedMeal(data.meals[0]);
          setShowRecipe(true);
        })
        .catch(error => {
          console.error('Error fetching meal recipe:', error);
        });
    }
  };

  const mealRecipeModal = () => {
    if (!selectedMeal.idMeal) return null;
    
    return (
      <div className={`meal-details ${showRecipe ? 'showRecipe' : ''}`}>
        <button type="button" className="btn recipe-close-btn" onClick={() => setShowRecipe(false)}>
          <i className="fas fa-times"></i>
        </button>
        <div className="meal-details-content">
          <h2 className="recipe-title">{selectedMeal.strMeal}</h2>
          <p className="recipe-category">{selectedMeal.strCategory}</p>
          <div className="recipe-instruct">
            <h3>Instructions:</h3>
            <p>{selectedMeal.strInstructions}</p>
          </div>
          <div className="recipe-meal-img">
            <img src={selectedMeal.strMealThumb} alt="" />
          </div>
          <div className="recipe-link">
            <a href={selectedMeal.strYoutube} target="_blank" rel="noopener noreferrer">Watch Video</a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="container">
        <div className="meal-wrapper">
          <div className="meal-search">
            <h2 className="title">Find your meal!</h2>
            <blockquote>
              There is no sincere love than the love for food.<br />
              <cite> – George Bernard Shaw</cite>
            </blockquote>

            <div className="meal-search-box">
              <input 
                type="text" 
                className="search-control" 
                placeholder="Enter an ingredient" 
                value={searchInput}
                onChange={handleSearchInput}
              />
              <button 
                type="submit" 
                className="search-btn btn" 
                onClick={getMealList}
              >
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>

          <div className="meal-result">
            <h2 className="title1">Your Search Results:</h2>
            <div id="meal">
              {meals.length > 0 ? (
                meals.map(meal => (
                  <div className="meal-item" key={meal.idMeal} data-id={meal.idMeal}>
                    <div className="meal-img">
                      <img src={meal.strMealThumb} alt="food" />
                    </div>
                    <div className="meal-name">
                      <h3>{meal.strMeal}</h3>
                      <a href="#" className="recipe-btn" onClick={getMealRecipe}>Get Recipe</a>
                    </div>
                  </div>
                ))
              ) : searched ? (
                <p>Sorry, we didn't find any meal!</p>
              ) : null}
            </div>
          </div>

          {mealRecipeModal()}
        </div>
      </div>
    </>
  );
}

export default Html;
