import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Formbody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
`;
const Title = styled.h1`
  font-weight: normal;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 50px;
`;
const Text = styled.p``;

const Textbox = styled.input`
  margin: 10px 0;
  padding: 10px;
  font-size: 20px;
`;
const Select = styled.select`
  margin: 10px 0;
  padding: 10px;
  font-size: 20px;
`;

export const FormPage = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    county: "",
    email: "",
  });
  function handleChange(e) {
    const { value, name } = e.target;
    setUserInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(e);
  }
  const handleSubmit =  (e) => {
    e.preventDefault();

    alert(JSON.stringify(userInfo));
    // console.log(JSON.stringify(userInfo));
    // const data = await axios.post("/user/register", userInfo);
    // console.log(data);
  };

  return (
    <Formbody>
      <Title>Form</Title>
      <Form onSubmit={handleSubmit}>
        <Text>姓名</Text>
        <Textbox
          name="username"
          placeholder="name"
          value={userInfo.username}
          onChange={handleChange}
          required
        ></Textbox>
        <Text>居住地</Text>
        <Select
          name="county"
          value={userInfo.county}
          onChange={handleChange}
          required
        >
          <option value="">請選擇居住地</option>
          <option value="Hsinchu">新竹</option>
          <option value="Taichung">台中</option>
          <option value="Yunlin">雲林</option>
          <option value="Tainan">台南</option>
        </Select>
        <Text>信箱</Text>
        <Textbox
          name="email"
          placeholder="email"
          value={userInfo.email}
          onChange={handleChange}
          required
        ></Textbox>

        <br />
        <Textbox type="submit" value="Submit"></Textbox>
        <br />
      </Form>
    </Formbody>
  );
};
