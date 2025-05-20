export const initialStore=()=>{
  return{
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    caracters: [],
    planets: [],
    vehicles: [],
    favorites: [],
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task': {
      const { id,  color } = action.payload;
      return {
        ...store,
        todos: store.todos.map((todo) => todo.id === id ? { ...todo, background: color } : todo),
      };
    }

      case 'set_caracters':
        return {...store, caracters:action.payload};

      case 'set_planets':
        return {...store, planets:action.payload};
        
      case 'set_vehicles':
        return {...store, vehicles:action.payload};

      case 'toggle_favorite' : {
        const item = action.payload;
        const exist = store.favorites.find(fav => fav.uid === item.uid && fav.category === item.category);
        return {...store, favorites: exist ? store.favorites.filter(fav => !(fav.uid === item.uid && fav.category === item.category )) : [...store.favorites, item]
        };
      } 

    default:
      throw Error('Unknown action.');
  }    
}




