import "./Detailpage.css";

export const DetailPage = () => {
  // testing data ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  const recipeTitle = `Spaghetti Carbonara`;
  const recipeImageURL = `https://th.bing.com/th/id/R.a0246b9032f0cd5338d8391642d8bcf1?rik=B8NK%2biKQg0zVmg&riu=http%3a%2f%2fwww.casaacorte.com%2fwp-content%2fuploads%2f2014%2f01%2fCarbonara-pepper-web.jpg&ehk=cJqi017Y10hmUui9pXcu3tNrn%2blKjkDpSwktNMz0cx4%3d&risl=&pid=ImgRaw&r=0`;
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
    <div className="recipe-container">
      <div className="recipe">
        <div className="img-container">
          <img src={recipeImageURL} alt={recipeTitle} />
        </div>
        <div className="details">
          <h2 className="title">{recipeTitle}</h2>
          <div className="serving">
            <h3>Serving</h3>
            {serving}
          </div>
          <div className="ingredients">
            <h3>Ingredients</h3>
            <ul>
              {ingredients.map((item, index) => (
                <li key={index}>
                  <label htmlFor={`ingredient-${index}`}>{item}</label>
                  <input
                    type="checkbox"
                    name={`ingredient-${index}`}
                    id={`ingredient-${index}`}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="instructions">
            <h3>Instructions</h3>
            <ol>
              {instructions.map((item, index) => (
                <li key={index}>
                  <label htmlFor={`ingredient-${index}`}>{item}</label>
                  <input
                    type="checkbox"
                    name={`ingredient-${index}`}
                    id={`ingredient-${index}`}
                  />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};
