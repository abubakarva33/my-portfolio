import "./ServiceEdit.css";
import { Button, Form, Input, InputNumber, Select } from "antd";
import { DatePicker } from "antd";
const { Option } = Select;
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useGetAServiceQuery } from "../../../../../../redux/api";
import { useEffect } from "react";

const ServiceEdit = () => {
  const [form] = Form.useForm();
  const { serviceId } = useParams();
  const { data, isLoading } = useGetAServiceQuery(serviceId);


  console.log({ data, isLoading });

  if (isLoading) {
    return <> loading </>;
  }

  const { serviceName, about, registered, picture } = data;

  const onFinish = (values) => {
    form.resetFields();
    Swal.fire({
      icon: "success",
      title: "Your book has been added successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="w-75 mx-auto">
      <Form
        name="complex-form"
        form={form}
        onFinish={onFinish}
        initialValues={{
          title: serviceName,
          description: about,
          picture: picture,
        }}
        layout="vertical"
        className="my-4 border rounded p-4"
      >
        <h3 className="bookCenter"> Update this book Now! </h3>
        <Form.Item
          label="Service Title"
          name="title"
          rules={[
            {
              required: true,
              message: "Book Title is required",
            },
          ]}
        >
          <Input placeholder="Please input book title" />
        </Form.Item>

        <Form.Item
          label="Service Description"
          name="description"
          rules={[
            {
              required: true,
              message: "Book Title is required",
            },
          ]}
        >
          <Input placeholder="Please input book title" />
        </Form.Item>
        <Form.Item
          label="Select Picture"
          name="picture"
          rules={[
            {
              required: true,
              message: "Picture is required",
            },
          ]}
        >
          <Select placeholder="Select Picture">
            <Option value="Thriller">Thriller</Option>
            <Option value="Science Fiction">Science Fiction</Option>
            <Option value="Religious">Religious</Option>
            <Option value="Horor">Horor</Option>
            <Option value="Romantic">Romantic</Option>
            <Option value="others">Others</Option>
          </Select>
        </Form.Item>

        <div className="bookCenter ">
          <Button type="primary" htmlType="submit" className="w-50 h-auto">
            <span className="fs-5">Add Book </span>
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ServiceEdit;
