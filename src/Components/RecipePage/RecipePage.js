import { useState, useEffect } from 'react';
import axios from 'axios';
import { TbWorldDownload } from 'react-icons/tb';
import { BiCategory } from 'react-icons/bi';
import { useParams } from 'react-router';
import { MdRestaurantMenu } from 'react-icons/md';
import StarGrade from '../StarGrade/StarGrade';
import '../../scss/RecipePage.scss';

export default function RecipePage() {
  const { id } = useParams();

  console.log(id);

  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    const getDish = async () => {
      const res = await axios.get(`http://localhost:8080/recipes/${id}`);
      console.log(res);
      setRecipe(res.data.data[0]);
    };
    getDish();
  }, []);

  useEffect(() => {
    console.log(recipe);
  }, [recipe]);

  return (
    <div className='recipe-page'>
      <img
        className='main-img'
        src={recipe.strMealThumb}
        alt='Food Pic'
        width={'100%'}
      />
      <div className='container'>
        <div className='page-title'>{recipe.strMeal}</div>
        <StarGrade id={id} />
        <div className='page-info'>
          <div>
            <span>
              <TbWorldDownload />
              Origin:
            </span>{' '}
            {recipe.strArea}
          </div>
          <div>
            <span>
              <BiCategory />
              Category:
            </span>{' '}
            {recipe.strCategory}
          </div>
        </div>
        <div className='page-ing'>
          {recipe?.strIngredient.map((ing, index) => (
            <div>
              <MdRestaurantMenu /> {ing} ({recipe.strMeasure[index].trim()})
            </div>
          ))}
        </div>
        <div className='page-inst'>{recipe.strInstructions}</div>
      </div>
    </div>
  );
}
