import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';



interface IAg {
    id: string | number;
    name: string | undefined;
    avatar: undefined;
    country: string | undefined;
  }
  const ListAgent : React.FC = () => {
    const navigate = useNavigate();
    const [listAg, setListAg] = useState<Array<IAg>>([]);
  
    useEffect(() => {
      getListAg();
    }, []);
    const getListAg = () => {
      const url = "https://63a06c2124d74f9fe837cb19.mockapi.io/api/v1/agents";
      fetch(url, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          setListAg(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
    const handleDelete = (id: string | number) => {
      const url = "https://63a06c2124d74f9fe837cb19.mockapi.io/api/v1/agents/" + id;
      fetch(url, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          getListAg();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
    const handleUpdate = (id: string | number) => {
      console.log("handleDetail", id);
      navigate(`form/${id}`);
    };
    const handleDetail = (id: string | number) => {
      console.log("Detail", id);
      navigate(`detail/${id}`);
    };
    return (
      <>
        <table className="table table-bordered border-danger w-75 m-auto table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Avata</th>
              <th scope="col">Country</th>
            </tr>
          </thead>
          <tbody>
            {listAg.map((item) => (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.avatar}</td>
                <td>{item.country}</td>
                <td className="col-3 m-auto">
                  <button
                    
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                  <button
                    
                    onClick={() => handleDetail(item.id)}
                  >
                    Detail
                  </button>
                  <button
                    
                    onClick={() => handleUpdate(item.id)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  };
export default ListAgent;