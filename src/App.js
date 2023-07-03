import "./App.css";
import { Home } from "./pages/HomePage";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Profile } from "./pages/ProfilePage";
import { DetailPage } from "./pages/DetailPage";
import { NavBar } from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import { ExplorePage } from "./pages/ExplorePage";

function App() {
  // Temporary testing data for dev purposes----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  const recipe = {
    name: `Spaghetti Carbonara`,
    imageURL: `https://th.bing.com/th/id/R.a0246b9032f0cd5338d8391642d8bcf1?rik=B8NK%2biKQg0zVmg&riu=http%3a%2f%2fwww.casaacorte.com%2fwp-content%2fuploads%2f2014%2f01%2fCarbonara-pepper-web.jpg&ehk=cJqi017Y10hmUui9pXcu3tNrn%2blKjkDpSwktNMz0cx4%3d&risl=&pid=ImgRaw&r=0`,
    ingredients: [
      `1 pound spaghetti.`,
      `6 ounces pancetta or bacon, diced.`,
      `4 large eggs.`,
      `1 cup freshly grated Parmesan cheese.`,
      `1/4 cup chopped fresh parsley.`,
      `Salt and freshly ground black pepper to taste.`,
    ],
    serving: `4 servings`,
    instructions: [
      `Cook the spaghetti according to package instructions until al dente. Reserve 1 cup of the pasta cooking water, then drain the spaghetti.`,
      `In a large skillet, cook the pancetta or bacon over medium heat until crisp. Remove the pancetta or bacon with a slotted spoon and drain on paper towels.`,
      `In a large bowl, whisk together the eggs, Parmesan cheese, and chopped parsley.`,
      `Add the hot drained spaghetti to the bowl with the egg mixture and toss well to coat.`,
      `Add the cooked pancetta or bacon to the bowl and toss again.`,
      `If the pasta seems too dry, add a little of the reserved pasta cooking water to moisten it.`,
      `Season the pasta with salt and freshly ground black pepper to taste.`,
      `Serve the spaghetti carbonara hot, garnished with additional Parmesan cheese and chopped parsley if desired.`,
    ],
  };
  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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
          element={<ExplorePage recipe={recipe} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
