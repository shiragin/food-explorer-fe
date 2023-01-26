import userEvent from '@testing-library/user-event';
import { useState, useEffect } from 'react';
import { useUserContext } from '../Context/UserContext';
import Food from './world-food.jpg';
import '../scss/MyRecipes.scss';

function MyRecipes() {
  const { logUser } = useUserContext();

  const [reviewed, setReviewed] = useState();

  useEffect(() => {
    const reviewedList = logUser?.reviewDishes?.filter((dish) => dish.reviewed);
    console.log(reviewed);
    setReviewed(reviewedList);
  }, [logUser]);

  console.log(logUser);
  return (
    <div className='container my-recipes'>
      <h1 className='page-title'>My Saved Recipes</h1>
      {reviewed?.length < 4 && (
        <div className='page-text review'>
          <img src={Food} />
          <div>
            You need to rate at least four dishes to get our specialised
            recommandations!
          </div>
        </div>
      )}
    </div>
  );
}

export default MyRecipes;
