import { Row } from 'react-bootstrap';
import { useRecipesContext } from '../../Context/RecipesContext';
import RecipeCard from '../RecipeCard/RecipeCard';
import '../../scss/Search.scss';

function ResultsList() {
  const { recipeList } = useRecipesContext();
  return (
    <>
      <div className='page-title'>{recipeList && 'Search results'}</div>
      <Row className='results' xs={1} sm={2} md={3} lg={5}>
        {recipeList.map((rec) => {
          return <RecipeCard recipe={rec} />;
        })}
      </Row>
    </>
  );
}

export default ResultsList;
