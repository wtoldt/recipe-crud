import React from 'react';
import RecipeListHeader from './RecipeListHeader/RecipeListHeader';

import './RecipeList.scss';

export default function RecipeList({ isLoading, recipes}) {

  return (
    <div className='recipe-list'>
      <RecipeListHeader isLoading={isLoading} count={recipes.length} />
      <ul className="list">
        {recipes.map((recipe, index) =>
          <li key={index}>{recipe.name}</li>
        )}
      </ul>
    </div>
  );
}