import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { useUserContext } from './UserContext';

export const RecipesContext = createContext();

export function useRecipesContext() {
  return useContext(RecipesContext);
}

export default function RecipesContextProvider({ children }) {
  async function getRecipesByCode(codes) {
    console.log('CODES', codes);
    try {
      const res = await axios.get(`http://localhost:8080/recipes/`, {
        params: { strArea: codes },
      });

      if (res?.data?.ok) {
        return res.data;
      }
    } catch (err) {
      console.error(err);
    }
  }

  const [recipeList, setRecipeList] = useState([
    {
      strMeal: 'Mediterranean Pasta Salad',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg',
      idMeal: '52777',
    },
    {
      strMeal: 'Mee goreng mamak',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/xquakq1619787532.jpg',
      idMeal: '53048',
    },
    {
      strMeal: 'Nasi lemak',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/wai9bw1619788844.jpg',
      idMeal: '53051',
    },
    {
      strMeal: 'Portuguese fish stew (Caldeirada de peixe)',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/do7zps1614349775.jpg',
      idMeal: '53045',
    },
  ]);

  return (
    <RecipesContext.Provider
      value={{ recipeList, setRecipeList, getRecipesByCode }}
    >
      {children}
    </RecipesContext.Provider>
  );
}
