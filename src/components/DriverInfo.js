import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function DriverInfo() {
  const params = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    fetchList();
  }, []);

  async function fetchList() {
    fetch(
      "https://whispering-eyrie-86232.herokuapp.com/drivers/" + params.id,
      {
        mode: "cors",
      }
    )
      .then((response) => {
        console.log(response);
        if (response.status === 500) {
          navigate("../PageNotFound");
        }
      })
      .catch(() => {
        navigate("../PageNotFound");
      });
  }

  return (
    <div>
       <h1>testing</h1>
    </div>
  );
}
