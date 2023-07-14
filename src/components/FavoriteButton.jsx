import { addToFavorites} from "../services/endpoints/recipes";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { isFav } from "../services/utils/isFav";
import { Alert, Button } from "antd";
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
    <> 
      <Button
          type="primary"
          shape="circle"
          icon={isFavorite ? <HeartFilled /> : <HeartOutlined />}
          onClick={handleClickFavorite}
      />
    </> 
  //  <button
  //     className={`fav-btn ${isFavorite ? 'active' : ''}`}
  //     onClick={handleClickFavorite}
  //   >
  //     <FaHeart className={`heart-icon ${isFavorite ? 'active' : ''}`} />
  //   </button>
  );
};
