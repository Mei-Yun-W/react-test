import "./Form.css";
import React, { useState } from "react";
import { toast } from "react-toastify";

export const FormPage = () => {
  const notify = () => toast("Wow so easy !");
  const [userInfo, setUserInfo] = useState({
    album_file: "",
    animal_id: "",
    animal_kind: "",
    animal_colour: "",
    animal_sex: "",
    shelter_address: "",
    shelter_name: "",
    shelter_tel: "",
  });
  function handleChange(e) {
    const { value, name } = e.target;
    setUserInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(e);
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    toast.error("suceess!!", {
      position: "top-right",
      autoClose: 10000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    // alert(JSON.stringify(userInfo));
    // console.log(JSON.stringify(userInfo));
    // const data = await axios.post("/user/register", userInfo);
    // console.log(data);
  };
  return (
    <div className="formpage">
      <form className="form" onSubmit={handleSubmit}>
        <input
          name="username"
          value={userInfo.username}
          onChange={handleChange}
          required
          placeholder="name"
          className="textbox"
        ></input>
        <input
          name="email"
          value={userInfo.email}
          onChange={handleChange}
          required
          placeholder="email"
          className="textbox"
        ></input>
        <select
          name="county"
          value={userInfo.county}
          onChange={handleChange}
          required
          className="textbox"
        >
          <option value="">請選擇居住地</option>
          <option value="Hsinchu">新竹</option>
          <option value="Taichung">台中</option>
          <option value="Yunlin">雲林</option>
          <option value="Tainan">台南</option>
        </select>
        <input type="submit" className="textbox"></input>
      </form>
    </div>
  );
};
