import React from "react";
import "./CardItem.css";
import useGlobalReducer from "../hooks/useGlobalReducer";

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
                <img className="card-image" src={imageUrl} alt={title} />
            </div>
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-subtitle">{category}</p>
                <div className="card-actions">
                    <button className="card-btn">Ver más</button>
                    <button className="fav-btn" onClick={toggleFavorite}>{isFavorite ? "💛" : "🩶​"}</button>
                </div>
            </div>
        </div>
    );
};