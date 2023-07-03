import "./App.css";
import { Home } from "./pages/HomePage";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Profile } from "./pages/ProfilePage";
import { DetailPage } from "./pages/DetailPage";
import { NavBar } from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import { ExplorePage } from "./pages/ExplorePage";
import { useEffect, useState } from "react";
import { fetchRecipes } from "./services/endpoints/recipes";

function App() {
  const [recipes, setRecipes] = useState([]);
  useEffect(()=>{
    const fetchData = async () =>{
      try{
        const recipesData = await fetchRecipes();
        setRecipes(recipesData);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    }
    fetchData();
  },[]);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path={`/recipe/:slug`} element={<DetailPage />}></Route>
        <Route
          path="/explore"
          element={<ExplorePage recipes={recipes}/>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
