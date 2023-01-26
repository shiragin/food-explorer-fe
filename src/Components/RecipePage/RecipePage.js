import { Card } from "react-bootstrap";
import { useParams } from "react-router";
import StarGrade from "../StarGrade/StarGrade";
import "./RecipePage.css";

export default function RecipePage() {
  const recipe = {
    idMeal: "52923",
    strMeal: "Canadian Butter Tarts",
    strDrinkAlternate: null,
    strCategory: "Dessert",
    strArea: "Canadian",
    strInstructions:
      "Preheat the oven to fan 170C/ conventional 190C/gas 5. Roll out the pastry on a lightly floured surface so it\u2019s slightly thinner than straight from the pack. Then cut out 18-20 rounds with a 7.5cm fluted cutter, re-rolling the trimmings. Use the rounds to line two deep 12-hole tart tins (not muffin tins). If you only have a regular-sized, 12-hole tart tin you will be able to make a few more slightly shallower tarts.\r\nBeat the eggs in a large bowl and combine with the rest of the ingredients except the walnuts. Tip this mixture into a pan and stir continuously for 3-4 minutes until the butter melts, and the mixture bubbles and starts to thicken. It should be thick enough to coat the back of a wooden spoon. Don\u2019t overcook, and be sure to stir all the time as the mixture can easily burn. Remove from the heat and stir in the nuts.\r\nSpoon the filling into the unbaked tart shells so it\u2019s level with the pastry. Bake for 15-18 minutes until set and pale golden. Leave in the tin to cool for a few minutes before lifting out on to a wire rack. Serve warm or cold.",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/wpputp1511812960.jpg",
    strTags: "Speciality,Snack,Desert,Pudding",
    strYoutube: "https://www.youtube.com/watch?v=WUpaOGghOdo",
    strIngredient1: "Shortcrust Pastry",
    strIngredient2: "Eggs",
    strIngredient3: "Muscovado Sugar",
    strIngredient4: "Raisins",
    strIngredient5: "Vanilla Extract",
    strIngredient6: "Butter",
    strIngredient7: "Single Cream",
    strIngredient8: "Walnuts",
    strIngredient9: "",
    strIngredient10: "",
    strIngredient11: "",
    strIngredient12: "",
    strIngredient13: "",
    strIngredient14: "",
    strIngredient15: "",
    strIngredient16: "",
    strIngredient17: "",
    strIngredient18: "",
    strIngredient19: "",
    strIngredient20: "",
    strMeasure1: "375g",
    strMeasure2: "2 large",
    strMeasure3: "175g",
    strMeasure4: "100g ",
    strMeasure5: "1 tsp ",
    strMeasure6: "50g",
    strMeasure7: "4 tsp",
    strMeasure8: "50g",
    strMeasure9: "",
    strMeasure10: "",
    strMeasure11: "",
    strMeasure12: "",
    strMeasure13: "",
    strMeasure14: "",
    strMeasure15: "",
    strMeasure16: "",
    strMeasure17: "",
    strMeasure18: "",
    strMeasure19: "",
    strMeasure20: "",
    strSource: "https://www.bbcgoodfood.com/recipes/1837/canadian-butter-tarts",
    strImageSource: null,
    strCreativeCommonsConfirmed: null,
    dateModified: null,
  };
  const { id } = useParams();
  console.log(recipe);

  return (
    <Card>
      <Card.Header className="text-center" as={"h1"}>
        {recipe.strMeal}
      </Card.Header>
      <Card.Body className="recipePageBody">
        <div className="MediaPart">
          <img src={recipe.strMealThumb} alt="Food Pic" width={"100%"} />
        </div>
        <div className="TextPart">
          <a href={recipe.strYoutube}>Youtube Instructions Link</a>
          <span> Food Category- {recipe.strCategory}</span>
          <span>Country Of Origin - {recipe.strArea}</span>
          <span>Ingredient's :</span>
          {recipe.strIngredient1 && (
            <span>
              {recipe.strIngredient1}- {recipe.strMeasure1}
            </span>
          )}
          {recipe.strIngredient2 && (
            <span>
              {recipe.strIngredient2}- {recipe.strMeasure2}
            </span>
          )}
          {recipe.strIngredient3 && (
            <span>
              {recipe.strIngredient3}- {recipe.strMeasure3}
            </span>
          )}
          {recipe.strIngredient4 && (
            <span>
              {recipe.strIngredient4}- {recipe.strMeasure4}
            </span>
          )}
          {recipe.strIngredient5 && (
            <span>
              {recipe.strIngredient5}- {recipe.strMeasure5}
            </span>
          )}
          {recipe.strIngredient6 && (
            <span>
              {recipe.strIngredient6}- {recipe.strMeasure6}
            </span>
          )}
          {recipe.strIngredient7 && (
            <span>
              {recipe.strIngredient7}- {recipe.strMeasure7}
            </span>
          )}
          {recipe.strIngredient8 && (
            <span>
              {recipe.strIngredient8}- {recipe.strMeasure8}
            </span>
          )}
          {recipe.strIngredient9 && (
            <span>
              {recipe.strIngredient9}- {recipe.strMeasure9}
            </span>
          )}
          {recipe.strIngredient10 && (
            <span>
              {recipe.strIngredient10}- {recipe.strMeasure10}
            </span>
          )}
          {recipe.strIngredient11 && (
            <span>
              {recipe.strIngredient11}- {recipe.strMeasure11}
            </span>
          )}
          {recipe.strIngredient12 && (
            <span>
              {recipe.strIngredient12}- {recipe.strMeasure12}
            </span>
          )}
          {recipe.strIngredient13 && (
            <span>
              {recipe.strIngredient13}- {recipe.strMeasure13}
            </span>
          )}
          {recipe.strIngredient14 && (
            <span>
              {recipe.strIngredient14}- {recipe.strMeasure14}
            </span>
          )}
          {recipe.strIngredient15 && (
            <span>
              {recipe.strIngredient15}- {recipe.strMeasure15}
            </span>
          )}
          {recipe.strIngredient16 && (
            <span>
              {recipe.strIngredient16}- {recipe.strMeasure16}
            </span>
          )}
          {recipe.strIngredient17 && (
            <span>
              {recipe.strIngredient17}- {recipe.strMeasure17}
            </span>
          )}
          {recipe.strIngredient18 && (
            <span>
              {recipe.strIngredient18}- {recipe.strMeasure18}
            </span>
          )}
          {recipe.strIngredient19 && (
            <span>
              {recipe.strIngredient19}- {recipe.strMeasure19}
            </span>
          )}
          {recipe.strIngredient20 && (
            <span>
              {recipe.strIngredient20}- {recipe.strMeasure20}
            </span>
          )}
          <span>Instructions : {recipe.strInstructions}</span>
        </div>
      </Card.Body>
      <Card.Footer>
        Tags - {recipe.strTags} <a href={recipe.strSource}> Recipe source</a> rating <StarGrade dbRating={3} />
      </Card.Footer>
    </Card>
  );
}
