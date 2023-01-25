import axios from "axios";
import { Button, Card, Col } from "react-bootstrap";

export default function RecipeCard({ recipe }) {
    console.log(recipe);

//     <Container>
//     <Row xs={1} md={3} lg={5}>
//       {recipeList.map((rec) => {
//         console.log(rec);
//         return <RecipeCard recipe={rec} />;
//       })}
//     </Row>
//   </Container>
    
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
              onClick={() => {
                console.log(recipe.idMeal);
              }}
            >
              See More
            </Button>{" "}
          </Card.Footer>
        </Card.Body>
      </Card>
    </Col>
  );
}
