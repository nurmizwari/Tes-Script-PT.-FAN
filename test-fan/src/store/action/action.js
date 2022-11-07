export const fetchingPokemon = (payload) => {
  return {
    type: "fetchItem",
    payload,
  };
};
export const fetchingDetail = (payload) => {
  return {
    type: "fetchDetails",
    payload,
  };
};
export const searching = (payload) => {
  return {
    type: "search",
    payload,
  };
};

export const FetchPokemon = () => {
  return (dispatch) => {
    let url = `https://pokeapi.co/api/v2/pokemon/`;

    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something Error Fetch Items");
        }
        return response.json();
      })
      .then((data) => {
        dispatch(fetchingPokemon(data));
      });
  };
};
export const FetchPokemonSearch = ({ inputan }) => {
  console.log(inputan, "<<< inputan dari action search");
  return (dispatch) => {
    let url;
    if (inputan) {
      url = `https://pokeapi.co/api/v2/pokemon/${inputan}`;
    } else {
      url = `https://pokeapi.co/api/v2/pokemon/`;
    }
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something Error Fetch Items");
        }
        return response.json();
      })
      .then((data) => {
        dispatch(searching(data));
        // console.log(data, "<< data search");
      });
  };
};
export const NextPokemon = (link) => {
  console.log(link, "<< ini dari action");
  return (dispatch) => {
    return fetch(`${link}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something Error Fetch Items");
        }
        return response.json();
      })
      .then((data) => {
        dispatch(fetchingPokemon(data));
      });
  };
};
export const previousPokemon = (link) => {
  console.log(link, "<< ini dari action");
  return (dispatch) => {
    return fetch(`${link}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something Error Fetch Items");
        }
        return response.json();
      })
      .then((data) => {
        dispatch(fetchingPokemon(data));
      });
  };
};
export const detailsPokemon = (pokemon) => {
  console.log(pokemon, "<<<< pokemon");
  return (dispatch) => {
    return fetch(pokemon)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something Error Fetch Items");
        }
        return response.json();
      })
      .then((data) => {
        dispatch(fetchingDetail(data));
      });
  };
};
