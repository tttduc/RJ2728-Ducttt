import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./FormAgent.module.css"

const FormAgent: React.FC = () => {
  let params = useParams();
  const [name, setName] = useState<string | undefined>();
  const [avatar, setAvatar] = useState<any>();
  const [country, setCountry] = useState<string | undefined>();

  useEffect(() => {
    if (params.id) {
      getUser(params.id);
    }
  }, []);
  const getUser = (userId: string) => {
    console.log(params.id);
    const url = "https://63a06c2124d74f9fe837cb19.mockapi.io/api/v1/agents" + userId;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setName(data.xe);
        setAvatar(data.loaixe);
        setCountry(data.giaxe);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (params.id) {
      console.log("handleSubmit", "Update");
      updateUser(name, avatar, country);
    } else {
      console.log("handleSubmit", "Create");
      createUser(name, avatar, country);
    }
  };
  const createUser = (
    name: string | undefined,
    avatar: any,
    country: string | undefined,
  ) => {
    const url = "https://63a06c2124d74f9fe837cb19.mockapi.io/api/v1/agents";
    const data = {
      name: name,
      avatar: avatar,
      country: country,
    };
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const updateUser = (
    name: string | undefined,
    avatar: any,
    country: string | undefined
  ) => {
    const url =
      "https://63a06c2124d74f9fe837cb19.mockapi.io/api/v1/agents/" + params.id;
    const data = {
        name: name,
        avatar: avatar,
        country: country,
    };
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const handleChangeAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
setAvatar(e.target.value);
  };
  const handleChangeCoutry = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setCountry(e.target.value);
  };
  return (
    <form className="row g-3 w-50 m-auto my-3" onSubmit={handleSubmit}>
      <div className="col-md-6">
        <label className="form-label text-black">Name</label>
        <input
          className="form-control"
          type="text"
          placeholder="Name..."
          defaultValue={name}
          onChange={handleChangeName}
        />
      </div>
      <div className="col-md-6">
        <label className="form-label text-black">Avatar</label>
        <input
          className="form-control"
          type="text"
          placeholder="Avatar..."
          defaultValue={avatar}
          onChange={handleChangeAvatar}
        />
      </div>
      <div className="col-md-6">
        <label className="form-label text-black">Country</label>
        <input
          className="form-control"
          type="text"
          placeholder="Country..."
          defaultValue={country}
          onChange={handleChangeCoutry}
        />
      </div>
      <button type="submit" className={styles.button}>
        Xác Nhận
      </button>
    </form>
  );
};

export default FormAgent;