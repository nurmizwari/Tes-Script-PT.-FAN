import { detailsPokemon } from "../store/action/action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const ListPokemon = ({ pokemon }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const detail = () => {
    dispatch(detailsPokemon(pokemon.url)).then(() => {
      navigate(`/detail`);
    });
  };

  return (
    <div className="col col-md-3 mt-5">
      {pokemon.length == 0 ? (
        <h2>Pokemon Not Found</h2>
      ) : (
        <div class="card kartu  h-100">
          <img
            src="https://www.microoci.com/wp-content/uploads/2021/07/16145196328904.jpg"
            alt="pokemon"
          />
          <div class="card-body">
            <h5 class="card-title text-center">Name: {pokemon.name}</h5>
            <div className="d-grid">
              <button onClick={detail} type="button" class="btn btn-primary">
                Detail
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListPokemon;
