import React from "react";
import "./CardItem.css";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

export const CardItem = ({ title, category, uid}) => {
    const { store, dispatch } = useGlobalReducer();

    const isFavorite = store.favorites.some(fav => fav.uid === uid && fav.category === category);

    const toggleFavorite = () => {
        dispatch({
            type: "toggle_favorite",
            payload: { uid, name: title, category },
        });
    };

    const imageUrl = `https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/${category == "Personaje" ? "characters" : category == "Planeta" ? "planets" : "vehicles"}/${uid}.jpg?raw=true`;

    return (
        <div className="card">
            <div className="card-top">
                <img className="card-image" src={imageUrl} alt={title}
                onError={(e) => (e.target.src = "https://fakeimg.pl/220x220?text=sin+imagen")}/>
            </div>
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-subtitle">{category}</p>
                <div className="card-actions">
                    <Link to={`/${category.toLowerCase()}/${uid}`} className="card-btn">Ver más</Link>
                    <button className="fav-btn" onClick={toggleFavorite}>{isFavorite ? "💛" : "🩶​"}</button>
                </div>
            </div>
        </div>
    );
};
