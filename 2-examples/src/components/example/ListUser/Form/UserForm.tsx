import React, { useEffect, useState } from 'react'
import {useSearchParams} from "react-router-dom"

const ID = undefined;

const UserForm: React.FC = () => {
    
    /* const [searchParams, setSearchParams] = useSearchParams(); */
    const [userName, setUserName] = useState<string>();
    const [userAge, setUserAge] = useState<number>();
    
    useEffect(() => {
        /* const useID = searchParams.get("id");
        console.log('useID', useID); */
    }, []);
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('handleSubmit', userName, userAge);
        createUser(userName, userAge);
        if (ID){
            console.log('handleSubmit','Update');
            updateUser(userName, userAge);
        } else {
            console.log('handleSubmit','Create');
            createUser(userName, userAge);
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

    const createUser = (name: string | undefined, age: number | undefined) => {
        console.log(name, age);
        const url = 'https://63a06c2124d74f9fe837cb19.mockapi.io/api/v1/basic'
        const data = {
            name: name,
            age: age,
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

    const updateUser = (name: string | undefined, age: number | undefined) => {
        const url = 'https://63a06c2124d74f9fe837cb19.mockapi.io/api/v1/basic/' + ID;
        const data = {
            name: name,
            age: age,
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
            <button type="submit">Submit</button>
        </form>
    );
};

export default UserForm;