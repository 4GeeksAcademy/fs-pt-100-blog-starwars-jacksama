const handleError = (error, context) => {
    console.error(`Error cargando ${context}`, error);
};

export const getCaracters = async (dispatch) => {
    try {
        const response = await fetch ('https://www.swapi.tech/api/people/')
        const data = await response.json()
        dispatch({
            type:'set_caracters',
            payload: data.results
        })
    } catch (error) {
        handleError(error, 'personajes');
    }
}

export const getPlanets = async (dispatch) => {
    try {
        const response = await fetch ('https://www.swapi.tech/api/planets/')
        const data = await response.json()
        dispatch({
            type: 'set_planets',
            payload: data.results
        })
        console.log(data)
    } catch (error) {
       handleError(error, 'planetas');
    }
}


export const getVehicles = async (dispatch) => {
    try {
        const response = await fetch ('https://www.swapi.tech/api/vehicles/')
        const data = await response.json()
        dispatch({
            type: 'set_vehicles',
            payload: data.results
        })
        console.log(data)
    } catch (error) {
     handleError(error, 'vehículos');   
    }
}

