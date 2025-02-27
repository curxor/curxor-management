import { useState } from "react";
import { Button, Modal } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import AttributeList from "@/pages/products/components/AttributeList";
import CreateAttribute from "@/pages/products/components/CreateAttribute";

function ProductAttributes() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="mt-4">
      <div className="flex w-full items-center justify-end">
        <Button
          onClick={() => setOpenModal(!openModal)}
          icon={<PlusCircleOutlined />}
        >
          Add New Attribute
        </Button>
      </div>
      <AttributeList />
      <Modal
        title="Create New Attribute"
        open={openModal}
        okText="Save"
        onCancel={() => setOpenModal(!openModal)}
      >
        <CreateAttribute />
      </Modal>
    </div>
  );
}

export default ProductAttributes;
