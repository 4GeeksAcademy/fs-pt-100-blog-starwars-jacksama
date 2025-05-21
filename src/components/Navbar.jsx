import useGlobalReducer from "../hooks/useGlobalReducer";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer();
	const [Dropdown, setDropdown] = useState(false);

	const toggleDropdown = () => setDropdown(!Dropdown);

	const removeFavorite = (item) => {
		dispatch({
			type: "toggle_favorite",
			payload: item,
		});
	};

	return (
		<nav className="navbar navbar-light bg-light">
			<Link to="/" className="navbar-brand"> <img src="https://img.icons8.com/?size=100&id=38539&format=png&color=000000" alt="image"/></Link>

			<div className="favorites-container">
				<button onClick={toggleDropdown} className="favorites-button btn btn-primary">
					Favoritos ({store.favorites.length})
				</button>

				{Dropdown && (
					<div className="favorites-dropdown">
						{store.favorites.length === 0 ? (
							<p className="empty-msg">Sin favoritos aún</p>
						) : (store.favorites.map((item) => (
							<div key={`${item.uid}-${item.category}`} className="favorites-item">
								<span>{item.name}</span>
								<button onClick={() => removeFavorite(item)}>🗑️​</button>
							</div>
						))
						)}
					</div>
				)}
			</div>
		</nav>
	);
};

