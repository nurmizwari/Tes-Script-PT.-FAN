import { FetchPokemon, FetchPokemonSearch } from "../store/action/action";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ListPokemon from "./ListPokemon";
import { NextPokemon, previousPokemon } from "../store/action/action";

import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();

  const pokemons = useSelector((state) => {
    return state.pokemons;
  });
  const navigate = useNavigate();

  const linkNext = useSelector((state) => {
    return state.linkNext;
  });
  const previous = useSelector((state) => {
    return state.previous;
  });

  const [input, setInput] = useState({
    inputan: "",
  });

  const inputSearch = (e) => {
    e.preventDefault();
    dispatch(FetchPokemonSearch(input));
    navigate("/detail-search");
  };

  useEffect(() => {
    dispatch(FetchPokemon());
  }, []);

  let data = pokemons.results;

  if (data == undefined) {
    return <h2>Loading</h2>;
  }

  const next = (e) => {
    e.preventDefault();
    dispatch(NextPokemon(linkNext));
  };
  const previousPage = (e) => {
    e.preventDefault();
    dispatch(previousPokemon(previous));
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div class=" mb-3 mt-5">
            <form onSubmit={inputSearch}>
              <div className="row">
                <div className="div col-11">
                  <input
                    onChange={(e) => {
                      setInput({
                        ...input,
                        inputan: e.target.value,
                      });
                    }}
                    type="text"
                    class="form-control"
                    placeholder="Search By Name"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="col-1">
                  <button
                    type="submit"
                    class="btn btn-primary"
                    id="basic-addon1"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>

          {data.map((pokemon) => {
            return <ListPokemon pokemon={pokemon} />;
          })}

          <div className="mt-5">
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                <li class="page-item ">
                  <a onClick={previousPage} class="page-link" href="#">
                    Previous
                  </a>
                </li>

                <li class="page-item">
                  <a onClick={next} class="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
