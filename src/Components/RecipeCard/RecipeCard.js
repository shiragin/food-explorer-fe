import axios from 'axios';
import { useNavigate } from 'react-router';
import { Button, Card, Col } from 'react-bootstrap';
import '../../scss/RecipeCard.scss';
import { useRecipesContext } from '../../Context/RecipesContext';

export default function RecipeCard({ recipe }) {
  return (
    <Card>
      <Card.Img variant='top' src={recipe.strMealThumb} alt='recipePic' />
      <Card.Header as='h5'>{recipe.strMeal}</Card.Header>
      <Card.Body>
        <Card.Footer>
          <Button
            variant='primary'
            onClick={() => {
              console.log(recipe.idMeal);
            }}
          >
            See More
          </Button>{' '}
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}
