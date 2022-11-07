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
          <div class="card-body">
            <h5 class="card-title">Name: {pokemon.name}</h5>
            <div>
              <button
                onClick={detail}
                type="button"
                class="btn btn-outline-primary"
              >
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
