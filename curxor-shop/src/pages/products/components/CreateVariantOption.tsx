import { Form, Input, InputNumber, Select } from "antd";
import type { VariantOption } from "@/types/products";

const CreateVariantOption = () => {
  const [form] = Form.useForm();

  const onFinish = (values: Partial<VariantOption>) => {
    console.log("Form Submitted:", values);
  };

  return (
    <Form layout="vertical" form={form} onFinish={onFinish}>
      <Form.Item
        name="variant"
        label="Select Variant"
        rules={[{ required: true, message: "Please select a variant!" }]}
      >
        <Select placeholder="Choose a variant">
          <Select.Option value="variant_1">Variant 1</Select.Option>
          <Select.Option value="variant_2">Variant 2</Select.Option>
          <Select.Option value="variant_3">Variant 3</Select.Option>
        </Select>
      </Form.Item>
      <div className="flex items-center justify-between gap-x-2">
        <Form.Item
          name="stock"
          label="Stock Quantity"
          rules={[
            { required: true, message: "Please enter stock quantity!" },
            { type: "number", min: 1, message: "Stock must be at least 1!" },
          ]}
        >
          <InputNumber
            min={1}
            placeholder="Enter stock quantity"
            className="w-full"
          />
        </Form.Item>
        <Form.Item
          name="sku"
          label="SKU"
          rules={[
            { required: true, message: "Please enter SKU!" },
            { min: 3, message: "SKU must be at least 3 characters!" },
          ]}
        >
          <Input placeholder="Enter SKU" />
        </Form.Item>
        <Form.Item
          name="price"
          label="Price"
          rules={[
            { required: true, message: "Please enter a price!" },
            {
              type: "number",
              min: 1,
              message: "Price must be greater than 0!",
            },
          ]}
        >
          <InputNumber min={1} placeholder="Enter price" className="w-full" />
        </Form.Item>
      </div>
    </Form>
  );
};

export default CreateVariantOption;
