import { Button, Form, Input, Upload, Select } from "antd";
import type { UploadProps } from "antd";
import { UploadOutlined } from "@ant-design/icons";

function CreateProduct() {
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const props: UploadProps = {
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    onChange({ file, fileList }) {
      if (file.status !== "uploading") {
        console.log(file, fileList);
      }
    },
    defaultFileList: [
      {
        uid: "1",
        name: "xxx.png",
        status: "uploading",
        url: "http://www.baidu.com/xxx.png",
        percent: 33,
      },
      {
        uid: "2",
        name: "yyy.png",
        status: "done",
        url: "http://www.baidu.com/yyy.png",
      },
      {
        uid: "3",
        name: "zzz.png",
        status: "error",
        response: "Server Error 500",
        url: "http://www.baidu.com/zzz.png",
      },
    ],
  };
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
      <Form.Item label="Product Image">
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Upload</Button>
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
