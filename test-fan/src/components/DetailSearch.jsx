import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const DetailSearch = () => {
  const dataSearch = useSelector((state) => {
    return state.dataSearch;
  });

  const navigate = useNavigate();
  console.log(dataSearch, "<< data search detailss");

  const [userData, setUserData] = useState({
    labels: dataSearch.stats.map((el) => el.stat.name),
    datasets: [
      {
        label: "Pokemon",
        data: dataSearch.stats.map((el) => el.base_stat),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  if (!dataSearch) {
    return <h2>Loading ..</h2>;
  }

  return (
    <div class="container mb-5 mt-5">
      <div class="card shadow">
        <img
          src={dataSearch.sprites.front_default}
          class="card-img-top mx-auto"
          alt="..."
          style={{ width: 300, height: 300, objectFit: "contain" }}
        />
        <div class="card-body">
          <p class="card-text">Name: {dataSearch.name}</p>
          <p class="card-text">
            Ability: {dataSearch.abilities[0].ability.name}
          </p>
          <p class="card-text">Height: {dataSearch.height}</p>
          <p class="card-text">Species: {dataSearch.species.name}</p>
          <div style={{ width: 700 }}>
            <Bar data={userData} />
          </div>
          <button
            onClick={() => {
              navigate("/");
            }}
            type="button"
            class="btn btn-primary"
          >
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailSearch;
