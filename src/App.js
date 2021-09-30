import React, { Component } from 'react';
import Axios from 'axios';
import Navbar from './components/Navbar/Navbar';
import RecipeList from './components/RecipeList/RecipeList';
import './App.scss';

export default class App extends Component {
  state = {
    isLoading: true,
    recipes: []
  }

  async componentDidMount() {
    let recipes = [];
    try {
      const { data } = await Axios.get('/recipes.json');
      recipes = data.recipes;
    } catch (error) {
      console.error('failed to fetch recipes', error);
    }
    this.setState({ isLoading: false, recipes });
  }

  render() {
    const { isLoading, recipes } = this.state;
    return (
      <div className="recipes-crud-app">
        <Navbar />
        <div className="content-body">
          <h2>Recipes</h2>
          <p>Take a look at these tasty recipes!</p>
          <RecipeList isLoading={isLoading} recipes={recipes} />
        </div>
      </div>
    );
  }

}

