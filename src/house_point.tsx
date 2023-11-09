import { useState, useEffect } from "react";
import { Table, Button } from "antd";
import React from "react";
import { getHouses, getPoint } from "./api/house.api";
import { Link } from "react-router-dom";

export default function Houses() {
  const [datas, setData] = useState([]);

  useEffect(() => {
    getHouses().then((data: any) => {
      setData(data);
    });
    getPoint().then((data: any) => {
      setData(data);
    });
  }, []);

  const columns = [
    {
      title: "Logo",
      dataIndex: "logo",
      key: "logo",
      render: (url: string) => (
        <img src={url} alt="logo" style={{ width: 60, borderRadius: 50 }} />
      ),
      width: 100,
    },

    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Point",
      dataIndex: "point",
      key: "point",
    },
  ];

  return (
    <div className="App">
      <Table dataSource={datas} columns={columns} />
      <Button type="primary">
        <Link to="/addHousePoint" style={{ color: "white" }}>
          Add HousePoint
        </Link>
      </Button>
    </div>
  );
}
