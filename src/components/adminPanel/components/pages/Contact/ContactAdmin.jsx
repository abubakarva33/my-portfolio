import "./ContactAdmin.css";
import React, { useState } from "react";
import { Space, Table } from "antd";
import { useDeleteMessageMutation, useGetMessageQuery } from "../../../../../redux/api";
import { Col, Row } from "react-bootstrap";
import { MdImportantDevices } from "react-icons/md";
import { BiMessageDots } from "react-icons/bi";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import moment from "moment";

const ContactAdmin = () => {
  const [selectedIds, setSelectedIds] = useState([]);
  const { data, isLoading } = useGetMessageQuery();
  const [deleteMessage] = useDeleteMessageMutation();
  if (isLoading) {
    return null;
  }
  console.log(data?.data);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Message",
      dataIndex: "message",
      align: "left",
    },
    {
      title: "Time",
      dataIndex: "createdAt",
      render: (_, record) => (
        moment(record.createdAt).format(" HH:MM A  DD/MM/YYYY")
      ),
      align: "right",
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/main-admin/private-route/abubakar/dashboard/contact/${record._id}`}>
          <h6 className="p-2  border rounded text-light bg-primary tableActionIcon">
            <AiOutlineEye />
          </h6>
        </Link>
          <h6 className="p-2  border rounded text-light bg-secondary tableActionIcon bg-danger">
          <AiOutlineDelete onClick={()=>deleteMessage(record._id)} />
        </h6>
        </Space>
      ),
    },
  ];
  const onSelectChange = (selectedRowKeys) => {
    setSelectedIds(selectedRowKeys);
  };

  console.log(selectedIds);
  const rowSelection = {
    selections: [Table.SELECTION_ALL, Table.SELECTION_NONE],
    selectedRowKeys: selectedIds,
    onChange: onSelectChange,
  };
  const handleDelete = () => {
    deleteMessage(selectedIds);
  };
  const handleSingleDelete = () => {
    deleteMessage(data?.data?._id);
  };
  const clearSelection = () => {
    setSelectedIds([]);
  };

  return (
    <Row>
      <Col xs={12} md={2}>
        <h6>
          <BiMessageDots /> All Message
        </h6>
        <h6>
          <MdImportantDevices /> Important
        </h6>
      </Col>
      <Col xs={12} md={10}>
        <div>
          {selectedIds?.length > 0 ? (
            <div>
              <h6>{selectedIds.length} items selected</h6>
              <button onClick={handleDelete}>Delete</button>
              <button onClick={clearSelection}>Clear Selection</button>
              <button onClick={clearSelection}>Mark Important</button>
            </div>
          ) : null}
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data?.data}
            rowKey="_id"
          />
        </div>
      </Col>
    </Row>
  );
};

export default ContactAdmin;
