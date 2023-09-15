import { Button, Divider, Form, Input, InputNumber, Select, Space } from "antd";
const { Option } = Select;
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useCreateProfileMutation, useUpdateProfileMutation } from "../../../../../../redux/api";
import { memo, useEffect, useRef, useState } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi2";

const ProfileForm = memo(({ mode = "create", data = {}, isLoading = false }) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [updateProfile] = useUpdateProfileMutation();
  const [createProfile] = useCreateProfileMutation();

  if (isLoading) {
    return <> loading </>;
  }

  const { name, email, createdAt, anotherNumber, number, updatedAt, _id } = data;

  const onFinish = async (values) => {
    form.resetFields();
    if (mode === "create") {
      createProfile(values);
      Swal.fire({
        icon: "success",
        title: "Your book has been added successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(-1);
    } else if (mode === "update") {
      updateProfile({ _id, ...values });
      Swal.fire({
        icon: "success",
        title: "Your book has been updated successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(-1);
    }
  };
  const addCategory = async () => {
    const { value: text } = await Swal.fire({
      input: "text",
      inputLabel: "Category",
      inputPlaceholder: "Enter category here...",
      inputAttributes: {
        "aria-label": "Enter Category here",
      },
      showCancelButton: true,
    });

    if (text) {
      const res = await addCategorys({ name: text }).unwrap();
      if (res?.success) {
        Swal.fire("Created!", "Category has been deleted.", "success");
      }
    }
  };

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
          name,
          email,
          number,
          anotherNumber,
          _id,
        }}
        layout="vertical"
        className=" serviceTable my-4 border rounded p-4"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Name is required",
            },
          ]}
        >
          <Input placeholder="Please enter name here..." />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Email is required",
            },
          ]}
        >
          <Input placeholder="Please enter email here..." />
        </Form.Item>

        <Form.Item
          label="Number"
          name="number"
          rules={[
            {
              required: true,
              message: "Number is required",
            },
          ]}
        >
          <Input placeholder="Please enter number here..." />
        </Form.Item>
        <Form.Item
          label="Alternative Number"
          name="anotherNumber"
          rules={[
            {
              required: true,
              message: "Alternative number is required",
            },
          ]}
        >
          <Input placeholder="Please enter alternative number here..." />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Password  is required",
            },
          ]}
        >
          <Input placeholder="Please enter password  here..." />
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

export default ProfileForm;
