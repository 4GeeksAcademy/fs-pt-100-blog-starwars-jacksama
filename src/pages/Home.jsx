// import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { CardItem } from "../components/CardItem.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import "./Home.css";

export const Home = () => {

  const { store } =useGlobalReducer()

	return (
		<div className="text-center mt-5">
			<h1>Star Wars Blog</h1>

			<section>
				<h2>Personajes</h2>
				<div className="scroll-container">
					{store.caracters?.map((caracter) => (
						<CardItem key={caracter.uid || caracter.name} title={caracter.name} category="Personaje" uid={caracter.uid}/>
					))}					
				</div>
			</section>

			<section>
				<h2>Planetas</h2>
				<div className="scroll-container">
					{store.planets?.map((planet) => (
						<CardItem key={planet.uid || planet.name} title={planet.name} category="Planeta" uid={planet.uid}/>
					))}					
				</div>
			</section>
			
			<section>
				<h2>Vehículos</h2>
				<div className="scroll-container">
					{store.vehicles?.map((vehicle) => (
						<CardItem key={vehicle.uid || vehicle.name} title={vehicle.name} category="Vehículo" uid={vehicle.uid}/>
					))}				
				</div>
			</section>
		</div>
	);
}; 