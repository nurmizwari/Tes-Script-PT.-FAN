import { detailsPokemon } from "../store/action/action";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

import { useState } from "react";

const Details = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsPokemon());
  }, []);
  const navigate = useNavigate();
  const detail = useSelector((state) => {
    return state.details;
  });

  console.log(detail, "<<detail");

  const [userData, setUserData] = useState({
    labels: detail.stats.map((el) => el.stat.name),
    datasets: [
      {
        label: detail.name,
        data: detail.stats.map((el) => el.base_stat),
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

  return (
    <div class="container mb-5 mt-5">
      <div class="card shadow">
        <img
          src={detail.sprites.front_default}
          class="card-img-top mx-auto"
          alt="..."
          style={{ width: 300, height: 300, objectFit: "contain" }}
        />
        <div class="card-body">
          <p class="card-text">Name: {detail.name}</p>
          <p class="card-text">
            Ability: {detail.abilities[0].ability.name} +{" "}
            {detail.abilities[1].ability.name}
          </p>
          <p class="card-text">Height: {detail.height}</p>
          <p class="card-text">Species: {detail.species.name}</p>

          <div style={{ width: 700 }}>
            <Bar data={userData} />
          </div>
          <div className="d-grid mt-3">
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
    </div>
  );
};

export default Details;
