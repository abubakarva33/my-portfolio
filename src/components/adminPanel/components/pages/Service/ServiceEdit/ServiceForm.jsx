import "./ServiceEdit.css";
import { Button, Form, Input, Select } from "antd";
const { Option } = Select;
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useCreateServiceMutation, useUpdateServiceMutation } from "../../../../../../redux/api";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import Spinner from "../../../Spinner/Spinner";

const ServiceForm = ({ mode = "create", data = {}, isLoading = false }) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [updateService] = useUpdateServiceMutation();
  const [createService] = useCreateServiceMutation();

  if (isLoading) {
    return <Spinner />;
  }
  const { title, description, _id, img } = data;

  const onFinish = async (values) => {
    form.resetFields();
    if (mode === "create") {
      createService(values);
      Swal.fire({
        icon: "success",
        title: "Your book has been added successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(-1);
    } else if (mode === "update") {
      updateService({ _id, ...values });
      Swal.fire({
        icon: "success",
        title: "Your book has been updated successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(-1);
    }
  };

  return (
    <div>
      <div className=" pageBoxInner px-2">
        <div>
          <HiOutlineArrowLeft className="fs-2 my-2" onClick={() => navigate(-1)} />
        </div>
        <h4>{mode === "create" ? "CREATE NEW SERVICE" : "UPDATE SERVICE"} </h4>
        <button className="btn btn-primary" onClick={() => location.reload()}>
          Reload
        </button>
      </div>
      <Form
        name="complex-form"
        form={form}
        onFinish={onFinish}
        initialValues={{
          title,
          description,
          img,
        }}
        layout="vertical"
        className=" serviceTable my-4  rounded p-4"
      >
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
          <Input placeholder="Please input book title" className="inputBox" />
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
          <Input placeholder="Please input book title" className="inputBox" />
        </Form.Item>
        <Form.Item
          label="Select Picture"
          name="img"
          rules={[
            {
              required: true,
              message: "Picture is required",
            },
          ]}
        >
          <Select placeholder="Select Picture">
            <Option value="service1">Service 1</Option>
            <Option value="service2">Service 2</Option>
            <Option value="service3">Service 3</Option>
          </Select>
        </Form.Item>

        <div className="d-flex justify-content-center ">
          <Button type="primary" htmlType="submit" className="w-50 h-auto">
            <span className="fs-5">{mode === "create" ? "Add Book" : "Update Book"}</span>
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ServiceForm;
