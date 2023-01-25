import axios from 'axios';
import { useNavigate } from 'react-router';
import { Button, Card, Col } from 'react-bootstrap';
import '../../scss/RecipeCard.scss';
import { useRecipesContext } from '../../Context/RecipesContext';

export default function RecipeCard({ recipe }) {
  const navigate = useNavigate();
  return (
    <Col>
      <Card>
        <Card.Img variant='top' src={recipe.strMealThumb} alt='recipePic' />
        <Card.Body>
          <Card.Text>{recipe.strMeal}</Card.Text>
          <Button
            variant='primary'
            onClick={() => {
              navigate(`/recipe/${recipe.idMeal}`);
              console.log(recipe.idMeal);
            }}
          >
            See More
          </Button>{' '}
        </Card.Body>
      </Card>
    </Col>
  );
}
