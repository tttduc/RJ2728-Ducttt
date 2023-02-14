import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"

const ID = undefined;

const UserForm: React.FC = () => {
    let params = useParams();
    /* const [searchParams, setSearchParams] = useSearchParams(); */
    const [userName, setUserName] = useState<string>();
    const [userAge, setUserAge] = useState<number>();
    const [userCity, setUserCity] = useState<string>();

    useEffect(() => {
        if (params.id) {
            getUser(params.id);
        }
    }, []);
    const getUser = (userId: string) => {
        console.log(params.id);
        const url = "https://63a06c2124d74f9fe837cb19.mockapi.io/api/v1/users" + userId;
        fetch(url, {
          method: "GET",
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Success:", data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (params.id){
            console.log('handleSubmit','Update');
            updateUser(userName, userAge, userCity);
        } else {
            console.log('handleSubmit','Create');
            createUser(userName, userAge, userCity);
        }
    };

    const handleChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setUserName(e.target.value);
    };

    const handleChangeUserAge = (e: React.ChangeEvent<HTMLInputElement>) => {
        const tempValue = e.target.value;
        console.log(tempValue);
        setUserAge(parseInt(tempValue));
    };
    const handleChangeUserCity = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setUserCity(e.target.value);
    };
    const createUser = (name: string | undefined, age: number | undefined, city: string | undefined) => {
        console.log(name, age, city);
        const url = 'https://63a06c2124d74f9fe837cb19.mockapi.io/api/v1/usres'
        const data = {
            name: name,
            age: age,
            city: city,
        };
        fetch(url,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success: ", data);
        }) 
        .catch((error) => {
            console.log("Error: ", error)
        })
    }

    const updateUser = (name: string | undefined, age: number | undefined, city: string | undefined) => {
        const url = 'https://63a06c2124d74f9fe837cb19.mockapi.io/api/v1/users/' + ID;
        const data = {
            name: name,
            age: age,
            city: city,
        };
        fetch(url,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success: ", data);
        }) 
        .catch((error) => {
            console.log("Error: ", error)
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                defaultValue={userName}
                onChange={handleChangeUserName} 
            />

            <input type="number"
                defaultValue={userAge}
                onChange={handleChangeUserAge} />
            <input type="city"
                defaultValue={userCity}
                onChange={handleChangeUserAge} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default UserForm;