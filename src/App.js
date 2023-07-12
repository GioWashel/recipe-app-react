import "./App.css";
import { Home } from "./pages/HomePage";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Profile } from "./pages/ProfilePage";
import { DetailPage } from "./pages/DetailPage";
import { NavBar } from "./components/NavBar";
import { Routes, Route, useLocation} from "react-router-dom";
import { ExplorePage } from "./pages/ExplorePage";
import { useEffect, useState } from "react";
import { fetchRecipes } from "./services/endpoints/recipes";
import { isAuth } from "./services/utils/isAuth";
import { Create } from "./pages/Createpage";
import Skeleton from "react-loading-skeleton";
import { SearchPage } from "./pages/SearchPage";
import axios from 'axios';


function App() {
  const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken"));
  const [refreshToken, setRefreshToken] = useState(localStorage.getItem("refreshToken"));
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading ] = useState(true);
  const [tags, setTags] = useState([])

  // location change everytime user in different location
  const location = useLocation();
  //fetch data
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const recipesData = await fetchRecipes();
        setRecipes(recipesData.results);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);


  useEffect( () => {
    function getTags() {
        const url = 'http://localhost:8000/api/tags/';
        axios.get(url, {
            headers: {'Content-Type': 'application/json'}
        })
        .then(response => setTags(response.data))
        .catch(error => console.error(error))
    };
    getTags();
  }, [] );


  // check auth
  useEffect(()=>{
    const checkAuth = async () => {
      const isAuthenticated = await isAuth();
      if(!isAuthenticated) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        setAccessToken(null);
        setRefreshToken(null);
        setAuthenticated(false);
      }else{
        setAuthenticated(true);
      }
      setLoading(false);
    }
    checkAuth();
  },[accessToken, location]);



  
  // when checkAuth is still loading
  if(loading){
    return "";
  }
  console.log(tags);
  return (
    <div className="App">
      <NavBar authenticated={authenticated} />
      <Routes>
        <Route path="/" element={<Home authenticated={authenticated}/>}></Route>
        <Route path="/home" element={<Home authenticated={authenticated}/> }></Route>
        <Route path="/login" element={<Login />} setAccessToken={setAccessToken}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/profile" element={authenticated ? <Profile /> : <Login />}></Route>
        <Route path={`/recipe/:slug`} element={authenticated ? <DetailPage /> : <Login /> }></Route>
        <Route path="/explore" element={authenticated ? <ExplorePage recipes={recipes} /> : <Login /> }></Route>
        <Route path="/create" element={authenticated ? <Create tags={tags}/> : <Login /> }></Route>
        <Route path={`/search/:query`} element={<SearchPage />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
