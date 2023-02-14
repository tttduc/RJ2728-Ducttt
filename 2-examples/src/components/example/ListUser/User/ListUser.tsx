import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IHs {
    name: string;
    age: number;
    id: string | number;
    city: string;
}

const ListUser: React.FC = () => {
    const navigate = useNavigate();
    const [listHs, setListHs] = useState<Array<IHs>>([]);

    useEffect(() => {
        getListXe();
    }, []);
    const getListXe = () => {
        const url = "https://63a06c2124d74f9fe837cb19.mockapi.io/api/v1/users";
        fetch(url, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                setListHs(data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };
    const handleDelete = (id: string | number) => {
        const url = "https://63a06c2124d74f9fe837cb19.mockapi.io/api/v1/users" + id;
        fetch(url, {
            method: "DELETE",
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                getListXe();
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
        <table>
            <thead>
                <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">City</th>
                </tr>
            </thead>
            <tbody>
                {listHs.map((item, index) => (
                    <tr key={item.id}>
                        <td scope="row">{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.city}</td>
                        <td>
                            <button onClick={() => handleDelete(item.id)} className="btn btn-danger">Delete</button>
                        </td>
                        <td>
                            <button onClick={() => handleDetail}>Detail</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
export default ListUser;
