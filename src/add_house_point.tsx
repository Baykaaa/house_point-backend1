import { useState } from "react";
import { Button, Input, Typography } from "antd";
import axios from "axios";
import { Select } from "antd";
import React from "react";

export default function AddHousePoint() {
  const [id, setId] = useState("");
  const [point, setPoint] = useState("");
  const [pointDate, setPointDate] = useState("");
  const [description, setDescription] = useState("");
  const [season, setSeason] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = async (event: any) => {
    const housePoint = {
      id,
      season,
      year,
      point,
      description,
      pointDate,
    };
    console.log(housePoint);
    axios.put("/addHousePoint", housePoint).then((res) => {
      console.log(res.data);
    });
  };
  const { Option } = Select;

  return (
    <div className="App">
      <Typography.Title level={3}>Add House Point</Typography.Title>

      <Select
        placeholder="Select an ID"
        style={{ width: id ? "100%" : 200, marginBottom: 16 }}
        value={id}
        onChange={(value) => setId(value)}
      >
        <Option value="1">Hawt</Option>
        <Option value="2">Maza</Option>
        <Option value="3">Tsa</Option>
        <Option value="4">Tsen</Option>
        <Option value="5">Khant</Option>
        <Option value="6">Buhu</Option>
        <Option value="7">Irve</Option>
        <Option value="8">Yang</Option>
      </Select>

      <Input
        placeholder="Хэдэн оноо авсан"
        style={{ marginBottom: 16 }}
        value={point}
        onChange={(e) => setPoint(e.target.value)}
      />
      <Input
        placeholder="Оноо авсан огноо Жнь:2023-05-15 00:00:00"
        style={{ marginBottom: 16 }}
        value={pointDate}
        onChange={(e) => setPointDate(e.target.value)}
      />
      <Input
        placeholder="Тайлбар"
        style={{ marginBottom: 16 }}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Input
        placeholder="Улирал"
        style={{ marginBottom: 16 }}
        value={season}
        onChange={(e) => setSeason(e.target.value)}
      />
      <Input
        placeholder="Хичээлийн жил"
        style={{ marginBottom: 16 }}
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <Button type="primary" onClick={handleSubmit}>
        Add House Point
      </Button>
    </div>
  );
}
