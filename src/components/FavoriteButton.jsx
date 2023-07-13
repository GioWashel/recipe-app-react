import { useNavigate} from "react-router-dom";
import { addToFavorites} from "../services/endpoints/recipes";
import "./FavoriteButton.css";
import {FaHeart} from "react-icons/fa";
import { useEffect, useState } from "react";
import { isFav } from "../services/utils/isFav";
export const FavoriteButton = ({slug}) => {
  const [isFavorite, setIsFavorite] = useState();

  useEffect(()=>{
      const isFavorite = async()=>{
        const fav =  await isFav(slug);
        setIsFavorite(fav);
      }
      isFavorite();
    },[slug])
  const handleClickFavorite = async() => {
    try{
    await addToFavorites(slug);
    setIsFavorite(!isFavorite);
    }catch(error){
        console.error(error);
    }
  };
  return (
   <button
      className={`fav-btn ${isFavorite ? 'active' : ''}`}
      onClick={handleClickFavorite}
    >
      <FaHeart className={`heart-icon ${isFavorite ? 'active' : ''}`} />
    </button>
  );
};
