import { Console } from 'console';
import React, { useEffect, useId, useState } from 'react'


type Props = {};

interface IUser {
    name: string;
    age: number;
    id: string | number;
}

function ListUser(props: Props) {
    const [listUser, setListUser] = useState<Array<IUser>>([]);

    useEffect(() => {
        getListUser();
    }, []);

    const getListUser = () => {
        const url = "https://63a06c2124d74f9fe837cb19.mockapi.io/api/v1/basic/";
        fetch(url, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success", data);
                setListUser(data);
            })
            .catch((error) => {
                console.log("Error", error);
            });
    }
    const handleDelete = (id: string | number) => {
        const url = "https://63a06c2124d74f9fe837cb19.mockapi.io/api/v1/basic/"+ id;
        fetch(url, {
            method: "DELETE",
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success", data);
                getListUser();
            })
            .catch((error) => {
                console.log("Error", error);
            });
    }
    const handleDetail = () => {
        console.log("Detail");
    };
    return (
        <table>
            <thead>
                <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                </tr>
            </thead>
            <tbody>
                {listUser.map((item, index) => (
                    <tr key={item.id}>
                        <td scope="row">{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>  
                            <button onClick={() => handleDelete(item.id)} className="btn btn-danger">Delete</button>
                        </td>
                        <td>
                            <button onClick={() =>handleDetail}>Detail</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
export default ListUser;
