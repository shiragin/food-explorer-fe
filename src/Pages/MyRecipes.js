import userEvent from '@testing-library/user-event';
import { useUserContext } from '../Context/UserContext';

function MyRecipes() {
  const { logUser } = useUserContext();

  console.log(logUser);
  return (
    <div className='container'>
      <h1 className='page-title'>My Saved Recipes</h1>
      {logUser?.reviewDishes.length < 4 && (
        <div className='page-text fs-5'>
          You need to review at least four dishes to get our specialised
          recommandations!
        </div>
      )}
    </div>
  );
}

export default MyRecipes;
