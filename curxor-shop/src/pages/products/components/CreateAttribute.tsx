import { Form, Input, Select } from "antd";

const { Option } = Select;

const CreateAttribute = () => {
  const [form] = Form.useForm();

  return (
    <Form layout="vertical" form={form}>
      <div className="flex items-center justify-between gap-4">
        <Form.Item
          name="name"
          label="Name"
          rules={[
            { required: true, message: "Please enter the attribute name" },
            { min: 2, message: "Name must be at least 2 characters long" },
          ]}
        >
          <Input placeholder="Enter a name of attribute" />
        </Form.Item>
        <Form.Item
          name="value"
          label="Value"
          rules={[
            { required: true, message: "Please enter the attribute value" },
            { min: 1, message: "Value cannot be empty" },
          ]}
        >
          <Input placeholder="Enter value of attribute" />
        </Form.Item>
      </div>
      <Form.Item
        name="product"
        label="Product"
        rules={[{ required: true, message: "Please select a product" }]}
      >
        <Select placeholder="Select a product">
          <Option value="nike">Nike</Option>
          <Option value="adidas">Adidas</Option>
          <Option value="puma">Puma</Option>
        </Select>
      </Form.Item>
    </Form>
  );
};

export default CreateAttribute;
