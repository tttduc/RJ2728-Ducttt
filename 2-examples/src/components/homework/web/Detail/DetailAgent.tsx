import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface IAg {
    id: string | number;
    name: string | undefined;
    avatar: string;
    country: string | undefined;
  }

const DetailAgent: React.FC = () => {
  let params = useParams();
  const [Ag, setAg] = useState<IAg | undefined>({
    name: "Yoru",
    avatar: "cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/506.jpg",
    country: "Japan",
    id: 4,
  });
  useEffect(() => {
    getAg();
  }, []);
  const getAg = () => {
    console.log(params.id);
    const url =
      "https://63a06c2124d74f9fe837cb19.mockapi.io/api/v1/agents/" + params.id;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setAg(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <table className="table table-bordered border-danger w-75 m-auto table-striped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Avatar</th>
          <th scope="col">Country</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{Ag?.id}</th>
          <td>{Ag?.name}</td>
          <td>{Ag?.avatar}</td>
          <td>{Ag?.country}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default DetailAgent;