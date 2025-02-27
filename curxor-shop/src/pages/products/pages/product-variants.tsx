import { useState } from "react";
import { Button, Modal, Space } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import VariantList from "@/pages/products/components/VariantList";
import CreateVariant from "@/pages/products/components/CreateVariant";
import CreateVariantOption from "@/pages/products/components/CreateVariantOption";
import VariantOptionList from "@/pages/products/components/VariantOptionList";

function ProductVariants() {
  const [openModal, setOpenModal] = useState(false);
  const [openOptionModal, setOpenOptionModal] = useState(false);
  return (
    <div className="mt-4">
      <div className="flex w-full justify-end">
        <Space>
          <Button
            onClick={() => setOpenModal(!openModal)}
            icon={<PlusCircleOutlined />}
          >
            Add New Variant
          </Button>
          <Button
            onClick={() => setOpenOptionModal(!openModal)}
            icon={<PlusCircleOutlined />}
          >
            Add Variant Option
          </Button>
        </Space>
      </div>
      <VariantList />
      <VariantOptionList />
      <Modal
        title="Create New Variant"
        open={openModal}
        okText="Save"
        onCancel={() => setOpenModal(!openModal)}
      >
        <CreateVariant />
      </Modal>
      <Modal
        title="Create New Variant Option"
        open={openOptionModal}
        okText="Save"
        onCancel={() => setOpenOptionModal(!openOptionModal)}
      >
        <CreateVariantOption />
      </Modal>
    </div>
  );
}

export default ProductVariants;
