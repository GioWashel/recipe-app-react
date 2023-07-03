import "./App.css";
import { Home } from "./pages/HomePage";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Profile } from "./pages/ProfilePage";
import { DetailPage } from "./pages/DetailPage";
import { NavBar } from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import { ExplorePage } from "./pages/ExplorePage";
import { useState } from "react";

function App() {
  // Temporary testing data for dev purposes----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  const recipes = [
    {
      name: "Caprese Salad",
      imageURL:
        "https://mammamiachebuono.com/wp-content/uploads/2021/04/caprese-salad-8830_1920.jpg",
      ingredients: [
        "4 ripe tomatoes, sliced",
        "8 oz. fresh mozzarella, sliced",
        "1/4 cup fresh basil leaves, torn",
        "3 tbsp extra-virgin olive oil",
        "2 tbsp balsamic vinegar",
        "Salt and pepper to taste",
      ],
      serving: "4 servings",
      instructions: [
        "Arrange the tomato and mozzarella slices on a large platter.",
        "Scatter the torn basil leaves over the top.",
        "Drizzle the olive oil and balsamic vinegar over the salad.",
        "Season with salt and pepper to taste.",
        "Serve and enjoy!",
      ],
    },
    {
      name: "Beef Stew",
      imageURL:
        "https://th.bing.com/th/id/R.a36ffe66a54be3c223d2a625e457191e?rik=c0eGxKBSm3Tc1w&riu=http%3a%2f%2ftastefoodblog.files.wordpress.com%2f2010%2f12%2fbeef-bourguignon-txt.jpg&ehk=ngb29r8Hdzbbhq7ARRJ%2bD83Q5sJGaMww%2fOvoaTvXIPw%3d&risl=&pid=ImgRaw&r=0",
      ingredients: [
        "2 lbs. beef chuck, cut into 1-inch cubes",
        "2 tbsp all-purpose flour",
        "2 tbsp olive oil",
        "4 cups beef broth",
        "1 cup red wine",
        "4 medium carrots, peeled and sliced",
        "2 celery stalks, sliced",
        "1 large onion, chopped",
        "4 garlic cloves, minced",
        "2 bay leaves",
        "1 tsp dried thyme",
        "Salt and pepper to taste",
      ],
      serving: "6 servings",
      instructions: [
        "In a large bowl, toss the beef cubes with the flour to coat.",
        "In a Dutch oven or large pot, heat the olive oil over medium-high heat.",
        "Add the beef cubes and brown on all sides.",
        "Add the beef broth, red wine, carrots, celery, onion, garlic, bay leaves, thyme, salt, and pepper.",
        "Bring to a boil, then reduce the heat to low and simmer for 2-3 hours or until the beef is tender.",
        "Remove the bay leaves and serve hot.",
        "Enjoy!",
      ],
    },
    {
      name: "Classic Chocolate Chip Cookies",
      imageURL: "https://bing.com/th?id=OSK.7e5f596f36e3056ec48727f8b75281e6",
      ingredients: [
        "2 1/4 cups all-purpose flour",
        "1 tsp baking soda",
        "1 tsp salt",
        "1 cup unsalted butter, softened",
        "3/4 cup white granulated sugar",
        "3/4 cup brown sugar",
        "2 large eggs",
        "1 tsp vanilla extract",
        "2 cups semisweet chocolate chips",
      ],
      serving: "24 cookies",
      instructions: [
        "Preheat the oven to 375°F (190°C).",
        "In a small bowl, combine the flour, baking soda, and salt.",
        "In a large bowl, beat the softened butter, white granulated sugar, and brown sugar until creamy.",
        "Add the eggs, one at a time, and stir in the vanilla extract.",
        "Gradually add the flour mixture to the butter mixture and stir until well combined.",
        "Stir in the chocolate chips.",
        "Scoop rounded tablespoons of the dough and place them 2 inches apart on a baking sheet.",
        "Bake for 10-12 minutes or until golden brown.",
        "Allow the cookies to cool on the baking sheet for 5 minutes before removing them to a wire rack to cool completely.",
        "Serve and enjoy!",
      ],
    },
    {
      name: "Spaghetti Carbonara",
      imageURL:
        "https://th.bing.com/th/id/R.a0246b9032f0cd5338d8391642d8bcf1?rik=B8NK%2biKQg0zVmg&riu=http%3a%2f%2fwww.casaacorte.com%2fwp-content%2fuploads%2f2014%2f01%2fCarbonara-pepper-web.jpg&ehk=cJqi017Y10hmUui9pXcu3tNrn%2blKjkDpSwktNMz0cx4%3d&risl=&pid=ImgRaw&r=0",
      ingredients: [
        "1 pound spaghetti.",
        "6 ounces pancetta or bacon, diced.",
        "4 large eggs.",
        "1 cup freshly grated Parmesan cheese.",
        "1/4 cup chopped fresh parsley.",
        "Salt and freshly ground black pepper to taste.",
      ],
      serving: "4 servings",
      instructions: [
        "Cook the spaghetti according to package instructions until al dente. Reserve 1 cup of the pasta cooking water, then drain the spaghetti.",
        "In a large skillet, cook the pancetta or bacon over medium heat until crisp. Remove the pancetta or bacon with a slotted spoon and drain on paper towels.",
        "In a large bowl, whisk together the eggs, Parmesan cheese, and chopped parsley.",
        "Add the hot drained spaghetti to the bowl with the egg mixture and toss well to coat.",
        "Add the cooked pancetta or bacon to the bowl and toss again.",
        "If the pasta seems too dry, add a little of the reserved pasta cooking water to moisten it.",
        "Season the pasta with salt and freshly ground black pepper to taste.",
        "Serve the spaghetti carbonara hot, garnished with additional Parmesan cheese and chopped parsley if desired.",
      ],
    },
    {
      name: "Roasted Chicken with Lemon and Thyme",
      imageURL:
        "https://th.bing.com/th/id/R.7ddfa6a8ea6c6e5dad1b71da454e1135?rik=%2fcn%2bfxy%2fM0bxcA&pid=ImgRaw&r=0",
      ingredients: [
        "1 whole chicken (about 4 pounds)",
        "2 lemons, quartered",
        "1 bunch fresh thyme",
        "6 garlic cloves, smashed",
        "3 tbsp olive oil",
        "Salt and pepper to taste",
      ],
      serving: "4 servings",
      instructions: [
        "Preheat the oven to 425°F (220°C).",
        "Rinse the chicken and pat it dry with paper towels.",
        "Season the chicken with salt and pepper inside and out.",
        "Stuff the cavity of the chicken with the lemon quarters, fresh thyme, and garlic cloves.",
        "Rub the outside of the chicken with olive oil, and sprinkle with additional salt and pepper.",
        "Place the chicken on a roasting pan and roast for 1 hour and 15 minutes or until the internal temperature reaches 165°F (75°C).",
        "Remove the chicken from the oven and let it rest for 10-15 minutes before carving.",
        "Serve and enjoy!",
      ],
    },
  ];
  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  const [recipe, setRecipe] = useState(recipes[0]);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/details" element={<DetailPage recipe={recipe} />}></Route>
        <Route
          path="/explore"
          element={<ExplorePage recipes={recipes} setRecipe={setRecipe} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
