import axios from "axios";
import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function RecipeCard({ recipe }) {
  const nav = useNavigate();


//     <Container>
//     <Row xs={1} md={3} lg={5}>
//       {recipeList.map((rec) => {
//         console.log(rec);
//         return <RecipeCard recipe={rec} />;
//       })}
//     </Row>
//   </Container>

const handleSeeMore = () => {
  nav(`/RecipePage/${recipe.idMeal}`);
};
    
  return (
    <Col>
      <Card>
        <Card.Header as="h5">
            {recipe.strMeal}
        </Card.Header>
        <Card.Body>
          
          <Card.Text>
            <img
              src={recipe.strMealThumb}
              alt="petPic"
              className="imgPetCard"
              width={"95%"}
            />
          </Card.Text>
          <Card.Footer>
            <Button
              variant="primary"
              onClick={handleSeeMore}
            >
              See More
            </Button>{" "}
          </Card.Footer>
        </Card.Body>
      </Card>
    </Col>
  );
}
