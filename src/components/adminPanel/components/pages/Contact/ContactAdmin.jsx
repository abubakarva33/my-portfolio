import "./ContactAdmin.css";
import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDeleteMessageMutation, useGetMessageQuery } from "../../../../../redux/api";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "email",
    align: "center",
  },
  {
    title: "Address",
    dataIndex: "message",
    align: "right",
  },
];

const ContactAdmin = () => {
  const [selectedIds, setSelectedIds] = useState([]);
  const { data, isLoading } = useGetMessageQuery();
  const [deleteMessage] = useDeleteMessageMutation();

  if (isLoading) {
    return null;
  }

  const onSelectChange = (selectedRowKeys) => {
    setSelectedIds(selectedRowKeys);
  };
  console.log(selectedIds);
  const rowSelection = {
    selectedRowKeys: selectedIds,
    onChange: onSelectChange,
  };
  const handleDelete = () => {
    deleteMessage(selectedIds);
  };

  return (
    <div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data?.data} rowKey="_id" />
      <button onClick={handleDelete}>delete</button>
    </div>
  );
};

export default ContactAdmin;
