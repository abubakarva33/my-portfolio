import { Button, Form, Input, Select } from "antd";
const { Option } = Select;
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useCreateSkillMutation, useUpdateSkillMutation } from "../../../../../../redux/api";
import { memo } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import Spinner from "../../../Spinner/Spinner";

const SkillForm = memo(({ mode = "create", data = {}, isLoading = false }) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [updateBlog] = useUpdateSkillMutation();
  const [createBlog] = useCreateSkillMutation();

  if (isLoading) {
    return <Spinner />;
  }

  const { title, value, type, _id } = data;

  const onFinish = async (values) => {
    form.resetFields();
    if (mode === "create") {
      createBlog(values);
      Swal.fire({
        icon: "success",
        title: "Your book has been added successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(-1);
    } else if (mode === "update") {
      updateBlog({ _id, ...values });
      Swal.fire({
        icon: "success",
        title: "Your book has been updated successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(-1);
    }
  };
  // const addCategory = async () => {
  //   const { value: text } = await Swal.fire({
  //     input: "text",
  //     inputLabel: "Category",
  //     inputPlaceholder: "Enter category here...",
  //     inputAttributes: {
  //       "aria-label": "Enter Category here",
  //     },
  //     showCancelButton: true,
  //   });

  //   if (text) {
  //     const res = await addCategorys({ name: text }).unwrap();
  //     if (res?.success) {
  //       Swal.fire("Created!", "Category has been deleted.", "success");
  //     }
  //   }
  // };

  return (
    <div>
      <div className=" pageBoxInner px-2">
        <div>
          <HiOutlineArrowLeft className="fs-2 my-2" onClick={() => navigate(-1)} />
        </div>
        <h4>{mode === "create" ? "Create New Skill" : "Update This Skill"} </h4>
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
          type,
          value,
          _id,
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
          label="Value"
          name="value"
          rules={[
            {
              required: true,
              message: "Value is required",
            },
          ]}
        >
          <Input placeholder="Please enter value here..." className="inputBox" />
        </Form.Item>
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
            <Option value="development">Development</Option>
            <Option value="design">Design</Option>
          </Select>
        </Form.Item>

        <div className="d-flex justify-content-center  ">
          <Button type="primary" htmlType="submit" className="w-50 h-auto">
            <span className="fs-5">{mode === "create" ? "Add Skill" : "Update Skill"}</span>
          </Button>
        </div>
      </Form>
    </div>
  );
});

SkillForm.displayName = "SkillForm";

export default SkillForm;
