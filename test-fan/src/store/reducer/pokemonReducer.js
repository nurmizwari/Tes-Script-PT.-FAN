const initialState = {
  pokemons: [],
  next: [],
  previous: {},
  details: {},
  linkNext: {},
  dataSearch: {},
};

function pokemonReducer(state = initialState, action) {
  switch (action.type) {
    case "fetchItem":
      return {
        ...state,
        pokemons: action.payload,
        linkNext: action.payload.next,
        previous: action.payload.previous,
      };
    case "fetchDetails":
      return { ...state, details: action.payload };
    case "search":
      return { ...state, dataSearch: action.payload };
    default:
      return state;
  }
}

export default pokemonReducer;
