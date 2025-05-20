import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"



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

    return (
        <div className="text-center mt-5">
            <h1>{item.properties.name}</h1>
            <p>UID: {item.uid}</p>
            <p>{JSON.stringify(item.properties, null, 2)}</p>
        </div>
    );
};
