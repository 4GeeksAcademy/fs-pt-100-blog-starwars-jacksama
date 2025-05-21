import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import "./Details.css"



export const Details = () => {
    const { category, uid } = useParams();
    const [item, setItem] = useState(null);

    const apiCategory =
        category === "personaje"
            ? "people"
            : category === "planeta"
                ? "planets"
                : "vehicles";

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/${apiCategory}/${uid}`)
            .then((res) => res.json())
            .then((data) => setItem(data.result))
            .catch((err) => console.error("Error al cargar los detalles", err));
    }, [category, uid]);

    if (!item) return <p className="text-center mt-5">Cargando...</p>;

    const imageUrl = `https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/${category == "personaje" ? "characters" : category == "planeta" ? "planets" : "vehicles"}/${uid}.jpg?raw=true`;
    // No logro que carguen las imágenes de personajes y planetas en la vista Details, solo se muestran correctamente los vehículos.


    return (
        <div className="detail-layout">
            <div className="detail-top">
                <img className="detail-image"
                    src={imageUrl}
                    alt={item.properties.name}
                    onError={(e) => (e.target.src = "https://fakeimg.pl/600x400?text=sin+imagen")}
                />

                <div className="detail-description">
                    <h1>{item.properties.name}</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                        praesentium. Omnis officiis obcaecati repellat esse, deleniti
                        ducimus inventore porro!
                    </p>
                </div>
            </div>

            <hr className="detail-divider" />

            <div className="detail-bottom">
                {Object.entries(item.properties).slice(0, 6).map(([key, value])  => (
                    <div className="detail-data" key={key}>
                        <span className="data-label">{key.replaceAll("_", " ")}</span> <br/>
                        <span className="data-value">{value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
