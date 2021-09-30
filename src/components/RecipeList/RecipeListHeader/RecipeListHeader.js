import React from 'react';

import './RecipeListHeader.scss';

export default function RecipeListHeader({ count, isLoading, onRefresh }) {
  return (
    <div className="recipe-list-header">
      <div className="left">{isLoading ? 'loading...' : `${count} recipes`}</div>
      <div className="right">
        <button onClick={onRefresh}>🔃</button>
      </div>
    </div>
  );
}