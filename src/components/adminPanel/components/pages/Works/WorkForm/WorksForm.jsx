import { Button, Divider, Form, Input, InputNumber, Select, Space } from "antd";
import { DatePicker } from "antd";
const { Option } = Select;
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useCreateWorkMutation, useUpdateWorkMutation } from "../../../../../../redux/api";
import { memo, useEffect, useRef, useState } from "react";

const WorkForm = memo(({ mode = "create", data = {}, isLoading = false }) => {
  const [form] = Form.useForm();
  const [tagsList, setTagsList] = useState([]);
  const [newTag, setNewTag] = useState("");
  const [featuresList, setFeaturesList] = useState([]);
  const [newFeature, setNewFeature] = useState("");
  const [materialList, setMaterialList] = useState([]);
  const [newMaterial, setNewMaterial] = useState("");

  const [updateWork] = useUpdateWorkMutation();
  const [createWork] = useCreateWorkMutation();

  useEffect(() => {
    if (data) {
      setTagsList(data.tags);
      setFeaturesList(data.keyFeatures)
      setMaterialList(data.materialUsed)
    }
  }, [data]);

  if (isLoading) {
    return <> loading </>;
  }
  const {
    title,
    description,
    shortDescription,
    link,
    img,
    projectType,
    tags,
    materialUsed,
    keyFeatures,
    createdAt,
    updatedAt,
    _id,
  } = data;

  const onFinish = async (values) => {
    values.tags = tagsList;
    values.materialUsed = materialList;
    values.keyFeatures = featuresList;
    form.resetFields();
    if (mode === "create") {
      createWork(values);
      Swal.fire({
        icon: "success",
        title: "Your book has been added successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (mode === "update") {
      updateWork({ _id, ...values });
      Swal.fire({
        icon: "success",
        title: "Your book has been updated successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="w-75 mx-auto">
      <Form
        name="complex-form"
        form={form}
        onFinish={onFinish}
        initialValues={{
          title,
          description,
          shortDescription,
          link,
          img,
          projectType,
          tags,
          materialUsed,
          keyFeatures,
          _id,
        }}
        layout="vertical"
        className="my-4 border rounded p-4"
      >
        <h3 className="bookCenter">
          {mode === "create" ? "Create Recent Project" : "Update this Project Now!"}
        </h3>
        <Form.Item
          label="Service Title"
          name="title"
          rules={[
            {
              required: true,
              message: "Service title is required",
            },
          ]}
        >
          <Input placeholder="Please enter service title here..." />
        </Form.Item>

        <Form.Item
          label="Short Description"
          name="shortDescription"
          rules={[
            {
              required: true,
              message: "Short description is required",
            },
          ]}
        >
          <Input placeholder="Please enter short description here..." />
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
          label="Project Type"
          name="projectType"
          rules={[
            {
              required: true,
              message: "Project Type is required",
            },
          ]}
        >
          <Input placeholder="Please enter project type here..." />
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
            <Option value="Thriller">Thriller</Option>
            <Option value="Science Fiction">Science Fiction</Option>
            <Option value="Religious">Religious</Option>
            <Option value="Horor">Horor</Option>
            <Option value="Romantic">Romantic</Option>
            <Option value="others">Others</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Live Link"
          name="link"
          rules={[
            {
              required: true,
              message: "Live Link is required",
            },
          ]}
        >
          <Input placeholder="Please enter live link here..." />
        </Form.Item>

        <Form.Item label="Tags">
          <Select
            mode="multiple"
            name="tags"
            placeholder="custom dropdown render"
            onSearch={(e) => setNewTag(e)}
            onChange={(e) => setTagsList(e)}
            value={tagsList}
            maxTagCount={5}
            maxTagTextLength={20}
            dropdownRender={(menu) => (
              <>
                {menu}
                <Divider
                  style={{
                    margin: "8px 0",
                  }}
                />
              </>
            )}
            options={[{ label: newTag, value: newTag }]}
          />
        </Form.Item>

        <Form.Item label="Key Features">
          <Select
            mode="multiple"
            name="keyFeatures"
            placeholder="Enter Key Features"
            onSearch={(e) => setNewFeature(e)}
            onChange={(e) => setFeaturesList(e)}
            value={featuresList}
            maxTagCount={5}
            maxTagTextLength={20}
            dropdownRender={(menu) => (
              <>
                {menu}
                <Divider
                  style={{
                    margin: "8px 0",
                  }}
                />
              </>
            )}
            options={[{ label: newFeature, value: newFeature }]}
          />
        </Form.Item>

        <Form.Item label="Materials Used">
          <Select
            mode="multiple"
            name="materialUsed"
            placeholder="Enter Materials here..."
            onSearch={(e) => setNewMaterial(e)}
            onChange={(e) => setMaterialList(e)}
            value={materialList}
            maxTagCount={5}
            maxTagTextLength={20}
            dropdownRender={(menu) => (
              <>
                {menu}
                <Divider
                  style={{
                    margin: "8px 0",
                  }}
                />
              </>
            )}
            options={[{ label: newMaterial, value: newMaterial }]}
          />
        </Form.Item>

        <div className="bookCenter ">
          <Button type="primary" htmlType="submit" className="w-50 h-auto">
            <span className="fs-5">{mode === "create" ? "Add Book" : "Edit Book"}</span>
          </Button>
        </div>
      </Form>
    </div>
  );
});

export default WorkForm;
