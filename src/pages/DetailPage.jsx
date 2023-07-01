import React from "react";
import "./Detailpage.css";

export const DetailPage = () => {
  // testing data ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  const recipeTitle = `Spaghetti Carbonara`;
  const ingredients = [
    `1 pound spaghetti.`,
    `6 ounces pancetta or bacon, diced.`,
    `4 large eggs.`,
    `1 cup freshly grated Parmesan cheese.`,
    `1/4 cup chopped fresh parsley.`,
    `Salt and freshly ground black pepper to taste.`,
  ];
  const serving = `4 servings`;
  const instructions = [
    `Cook the spaghetti according to package instructions until al dente. Reserve 1 cup of the pasta cooking water, then drain the spaghetti.`,
    `In a large skillet, cook the pancetta or bacon over medium heat until crisp. Remove the pancetta or bacon with a slotted spoon and drain on paper towels.`,
    `In a large bowl, whisk together the eggs, Parmesan cheese, and chopped parsley.`,
    `Add the hot drained spaghetti to the bowl with the egg mixture and toss well to coat.`,
    `Add the cooked pancetta or bacon to the bowl and toss again.`,
    `If the pasta seems too dry, add a little of the reserved pasta cooking water to moisten it.`,
    `Season the pasta with salt and freshly ground black pepper to taste.`,
    `Serve the spaghetti carbonara hot, garnished with additional Parmesan cheese and chopped parsley if desired.`,
  ];
  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  return (
    <>
      <div className="recipe">
        <h2 className="title">{recipeTitle}</h2>

        <img
          src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt={`${recipeTitle}`}
        />

        <div className="ingredients">
          <h3>Ingredients</h3>
          <ul>
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="serving">
          <h3>Serving</h3>
          {serving}
        </div>

        <div className="instructions">
          <h3>Instructions</h3>
          <ol>
            {instructions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};
