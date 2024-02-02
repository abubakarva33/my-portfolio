import { Button, Form, Input, Select, Space } from "antd";
const { Option } = Select;
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useCreateResumeMutation, useUpdateResumeMutation } from "../../../../../../redux/api";
import { memo } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import Spinner from "../../../Spinner/Spinner";

const ResumeForm = memo(({ mode = "create", data = {}, isLoading = false }) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [updateResume] = useUpdateResumeMutation();
  const [createResume] = useCreateResumeMutation();

  if (isLoading) {
    return <Spinner />;
  }

  const { title, details, location, institute, startYear, endYear, type, _id } = data;

  const onFinish = async (values) => {
    form.resetFields();
    if (mode === "create") {
      createResume(values);
      Swal.fire({
        icon: "success",
        title: "Your book has been added successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(-1);
    } else if (mode === "update") {
      updateResume({ _id, ...values });
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
        <h4>{mode === "create" ? "Create New Resume Part" : "Update This"} </h4>
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
          details,
          institute,
          location,
          startYear,
          endYear,
          type,
        }}
        layout="vertical"
        className=" serviceTable my-4  rounded p-4"
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: "title is required",
            },
          ]}
        >
          <Input placeholder="Please enter title here..." className="inputBox" />
        </Form.Item>

        <Form.Item
          label="Description"
          name="details"
          rules={[
            {
              required: true,
              message: "Description is required",
            },
          ]}
        >
          <Input placeholder="Please enter description here..." className="inputBox" />
        </Form.Item>

        <Form.Item
          label="Institute Name"
          name="institute"
          rules={[
            {
              required: true,
              message: "Institute name is required",
            },
          ]}
        >
          <Input placeholder="Please enter institute name here..." className="inputBox" />
        </Form.Item>
        <Form.Item
          label="Institute location"
          name="location"
          rules={[
            {
              required: true,
              message: "Institute location is required",
            },
          ]}
        >
          <Input placeholder="Please enter institute location here..." className="inputBox" />
        </Form.Item>

        <Space.Compact block>
          <Form.Item
            name="startYear"
            label="Start Year"
            style={{
              width: "100%",
            }}
            rules={[
              {
                required: true,
                message: "Institute name is required",
              },
            ]}
          >
            <Input
              placeholder="Please enter institute name here..."
              style={{
                width: "100%",
              }}
              className="inputBox"
            />
          </Form.Item>
          <Form.Item
            name="endYear"
            label="End Year"
            style={{
              width: "100%",
            }}
            rules={[
              {
                required: true,
                message: "Institute name is required",
              },
            ]}
          >
            <Input
              placeholder="Please enter institute name here..."
              style={{
                width: "100%",
              }}
              className="inputBox"
            />
          </Form.Item>
        </Space.Compact>

        <Form.Item
          label="Select Category"
          name="type"
          rules={[
            {
              required: true,
              message: "Category is required",
            },
          ]}
        >
          <Select placeholder="Select Category">
            <Option value="academic">Academic</Option>
            <Option value="programming">Programming</Option>
            <Option value="job">Job</Option>
            <Option value="training">Training</Option>
          </Select>
        </Form.Item>

        <div className="d-flex justify-content-center  ">
          <Button type="primary" htmlType="submit" className="w-50 h-auto">
            <span className="fs-5">{mode === "create" ? "Add Blog" : "Edit Blog"}</span>
          </Button>
        </div>
      </Form>
    </div>
  );
});

ResumeForm.displayName = "ResumeForm";
export default ResumeForm;
