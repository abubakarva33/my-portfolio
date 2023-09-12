import "./MessageTable.css";
import React, { useState } from "react";
import { Button, ConfigProvider, Pagination, Space, Table } from "antd";
import { Col, Row } from "react-bootstrap";
import { MdImportantDevices } from "react-icons/md";
import { BiMessageDots } from "react-icons/bi";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import moment from "moment";
import {
  useDeleteMessageMutation,
  useDeleteMultipleMessageMutation,
  useGetMessageQuery,
} from "../../../../../../redux/api";
import Swal from "sweetalert2";

const MessageTable = () => {
  const [page, setPage] = useState(1);
  const [selectedIds, setSelectedIds] = useState([]);
  const [deleteId, setDeleteId] = useState();
  const { data, isLoading } = useGetMessageQuery(page);
  const [deleteMessage] = useDeleteMessageMutation();
  const [allDelete] = useDeleteMultipleMessageMutation();
  if (isLoading) {
    return null;
  }
  const { total, size } = data?.meta;
  const onChange = (current) => {
    setPage(current);
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (_, record) =>
        record.name.length > 25 ? `${record.name.slice(0, 25)}...` : record.name,
    },
    {
      title: "Message",
      dataIndex: "message",
      render: (_, record) =>
        record.message.length > 25 ? `${record.message.slice(0, 25)}...` : record.message,
      align: "left",
    },
    {
      title: "Time",
      dataIndex: "createdAt",
      render: (_, record) => moment(record.createdAt).format(" HH:MM A  DD/MM/YYYY"),
      align: "right",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/main-admin/private-route/abubakar/dashboard/contact/${record._id}`}>
            <h6 className="p-2  border rounded text-light bg-primary tableActionIcon">
              <AiOutlineEye />
            </h6>
          </Link>
          <h6 className="p-2  border rounded text-light bg-secondary tableActionIcon bg-danger">
            <AiOutlineDelete onClick={() => handleSingleDelete(record._id)} />
          </h6>
        </Space>
      ),
    },
  ];
  const onSelectChange = (selectedRowKeys) => {
    setSelectedIds(selectedRowKeys);
  };

  const rowSelection = {
    selections: [Table.SELECTION_ALL, Table.SELECTION_NONE],
    selectedRowKeys: selectedIds,
    onChange: onSelectChange,
  };
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        if (selectedIds.length > 1) {
          const res = await allDelete({ ids: selectedIds }).unwrap();
          if (res?.success) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        } else {
          const res = await deleteMessage(selectedIds).unwrap();
          if (res?.success) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        }
      }
    });
  };
  const handleSingleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteMessage(id).unwrap();
        if (res?.success) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      }
    });
  };
  const clearSelection = () => {
    setSelectedIds([]);
  };

  return (
    <div>
      {selectedIds?.length > 0 ? (
        <div className="my-3 mx-5">
          <h6 className="text-center mb-2">{selectedIds.length} items selected</h6>
          <Button className="me-2" onClick={handleDelete}>
            Delete
          </Button>
          <Button className="me-2" onClick={clearSelection}>
            Clear Selection
          </Button>
          <Button className="me-2" onClick={clearSelection}>
            Mark Important
          </Button>
        </div>
      ) : null}
      <ConfigProvider
        theme={{
          token: {
            colorBgContainer: "transparent",
            pagination: "false",
          },
          components: {
            Table: {
              rowHoverBg: "#bae0ff",
              rowSelectedBg: "#bae0ff",
            },
          },
        }}
      >
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data?.data}
          rowKey="_id"
          pagination={false}
        />
      </ConfigProvider>
      {total > size && (
        <Pagination defaultCurrent={1} total={total} onChange={onChange} className="mb-4" />
      )}
    </div>
  );
};

export default MessageTable;
