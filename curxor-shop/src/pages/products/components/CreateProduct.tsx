import { Button, Form, Input, Upload, Select } from "antd";
import { UploadOutlined } from "@ant-design/icons";

function CreateProduct() {
  const [form] = Form.useForm();
  const { TextArea } = Input;
  return (
    <Form layout="vertical" form={form}>
      <div className="flex items-center justify-between">
        <Form.Item
          name={"title"}
          label="Product Title"
          rules={[
            { required: true, message: "Please input the product title" },
          ]}
        >
          <Input placeholder="Product Title" />
        </Form.Item>
        <Form.Item name="slug" label="Slug">
          <Input disabled placeholder="Slug" />
        </Form.Item>
      </div>
      <Form.Item
        name="description"
        label="Description"
        rules={[
          { required: true, message: "Please enter the product description" },
        ]}
      >
        <TextArea placeholder="Description" style={{ height: 100 }} />
      </Form.Item>
      <Form.Item
        label="Upload Image"
        name="image"
        valuePropName="fileList"
        getValueFromEvent={(e) => e?.fileList}
        rules={[{ required: true, message: "Please upload an image" }]}
      >
        <Upload listType="picture" beforeUpload={() => false}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </Form.Item>
      <Form.Item
        name="category"
        label="Category"
        rules={[{ required: true, message: "Please select a category" }]}
      >
        <Select placeholder="Select category">
          <Select.Option value="electronics">Electronics</Select.Option>
          <Select.Option value="fashion">Fashion</Select.Option>
          <Select.Option value="books">Books</Select.Option>
        </Select>
      </Form.Item>
      <div className="flex items-center justify-between">
        <Form.Item
          name="brand"
          label="Brand"
          rules={[{ required: true, message: "Please input the brand" }]}
        >
          <Input placeholder="Brand" />
        </Form.Item>
        <Form.Item
          name="origin"
          label="Origin"
          rules={[{ required: true, message: "Please input the origin" }]}
        >
          <Input placeholder="Origin" />
        </Form.Item>
      </div>
    </Form>
  );
}

export default CreateProduct;
