import { Row, Col } from 'react-bootstrap';
import MapChart from '../Components/Homepage/MapChart';

import RecipeCard from '../Components/RecipeCard/RecipeCard';
import { useRecipesContext } from '../Context/RecipesContext';
import '../scss/Home.scss';

function Home() {
  const { recipeList, setRecipeList } = useRecipesContext();

  // console.log(recipeList);

  // setRecipeList([recipe, recipe]);

  //     <Container>
  //     <Row xs={1} md={3} lg={5}>
  //       {recipeList.map((rec) => {
  //         console.log(rec);
  //         return <RecipeCard recipe={rec} />;
  //       })}
  //     </Row>
  //   </Container>

  return (
    <div className='main-container'>
      <MapChart />
      <div className='container'>
        <h1 className='title'>Explore the world through food.</h1>
        <Row xs={1} sm={2} md={3} lg={5}>
          {recipeList.map((rec) => {
            return <RecipeCard recipe={rec} />;
          })}
        </Row>
      </div>
    </div>
  );
}

export default Home;
