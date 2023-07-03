import "./Detailpage.css";

export const DetailPage = ({ recipe }) => {
  return (
    <div className="recipe-container">
      <div className="recipe">
        <div className="img-container">
          <img src={recipe.imageURL} alt={recipe.name} />
        </div>
        <div className="details">
          <h2 className="title">{recipe.name}</h2>
          <div className="serving">
            <h3>Serving</h3>
            <p>{recipe.serving}</p>
          </div>
          <div className="ingredients">
            <h3>Ingredients</h3>
            <ul>
              {recipe.ingredients.map((item, index) => (
                <li key={index}>
                  <label htmlFor={`ingredient-${index}`}>
                    <p>{item}</p>
                    <input
                      type="checkbox"
                      name={`ingredient-${index}`}
                      id={`ingredient-${index}`}
                    />
                    <div class="check-mark"></div>
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div className="instructions">
            <h3>Instructions</h3>
            <ul>
              {recipe.instructions.map((item, index) => (
                <li key={index}>
                  <label htmlFor={`instruction-${index}`}>
                    <p>{item}</p>
                    <input
                      type="checkbox"
                      name={`instruction-${index}`}
                      id={`instruction-${index}`}
                    />
                    <div class="check-mark"></div>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
