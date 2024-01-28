import { Button, Form, Input, Select, Space } from "antd";
const { Option } = Select;
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  useCreateBlogMutation,
  useCreateCategoryMutation,
  useGetCategoryQuery,
  useUpdateBlogMutation,
} from "../../../../../../redux/api";
import { memo } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import Spinner from "../../../Spinner/Spinner";

const BlogForm = memo(({ mode = "create", data = {}, isLoading = false }) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [updateBlog] = useUpdateBlogMutation();
  const [createBlog] = useCreateBlogMutation();
  const categories = useGetCategoryQuery();
  const [addCategorys] = useCreateCategoryMutation();

  if (isLoading && categories.isLoading) {
    return <Spinner />;
  }

  const { title, description, img, category, _id } = data;

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
        <h4>{mode === "create" ? "Create New Blog" : "Update This Blog"} </h4>
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
          category: category?.name,
          _id,
        }}
        layout="vertical"
        className=" serviceTable my-4 border rounded p-4"
      >
        <Form.Item
          label="Blog Title"
          name="title"
          rules={[
            {
              required: true,
              message: "Service title is required",
            },
          ]}
        >
          <Input placeholder="Please enter blog title here..." />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: "Description is required",
            },
          ]}
        >
          <Input placeholder="Please enter description here..." />
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
            <Option value="blog1">Blog 1</Option>
            <Option value="blog2">Blog 2</Option>
            <Option value="blog3">Blog 3</Option>
          </Select>
        </Form.Item>

        <p className="mb-2"> Select Category</p>
        <Space.Compact block>
          <Form.Item
            name="category"
            style={{
              width: "70%",
            }}
            rules={[
              {
                required: true,
                message: "Picture is required",
              },
            ]}
          >
            <Select placeholder="Select Category">
              {categories?.data?.data.map((category) => (
                <Option key={category._id} value={category._id}>
                  {category?.name}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Button
            onClick={addCategory}
            style={{
              width: "30%",
            }}
          >
            Add Category
          </Button>
        </Space.Compact>

        <div className="d-flex justify-content-center  ">
          <Button type="primary" htmlType="submit" className="w-50 h-auto">
            <span className="fs-5">{mode === "create" ? "Add Blog" : "Edit Blog"}</span>
          </Button>
        </div>
      </Form>
    </div>
  );
});

BlogForm.displayName = "BlogForm";

export default BlogForm;
