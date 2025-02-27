import { Form, Input, Select, Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import type { Variants } from "@/types/products";

const { Option } = Select;

const CreateVariant = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values: Variants) => {
    console.log("Form values:", values);
  };

  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={handleSubmit}
      initialValues={{ product: "nike" }}
    >
      <Form.Item
        label="Variant Name"
        name="name"
        rules={[
          { required: true, message: "Please enter the variant name" },
          { min: 3, message: "Name must be at least 3 characters" },
        ]}
      >
        <Input placeholder="Enter variant name" />
      </Form.Item>
      <Form.Item
        label="Product"
        name="product"
        rules={[{ required: true, message: "Please select a product" }]}
      >
        <Select placeholder="Select a product">
          <Option value="nike">Nike</Option>
          <Option value="adidas">Adidas</Option>
          <Option value="puma">Puma</Option>
          <Option value="new_balance">New Balance</Option>
        </Select>
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
    </Form>
  );
};

export default CreateVariant;
