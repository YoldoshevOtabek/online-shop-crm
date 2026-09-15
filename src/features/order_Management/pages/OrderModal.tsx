import { useState } from "react";
import { Input, Modal, Select, message } from "antd";
import useCreateOrder from "../hooks/usecreateOrders";

interface AddOrderModalProps {
  open: boolean;
  onClose: () => void;
}

const OrderModal = ({
  open,
  onClose,
}: AddOrderModalProps) => {
  const { mutate, isPending } = useCreateOrder();

  const [formData, setFormData] = useState({
    customerName: "",
    phone: "",
    productName: "",
    productImage: "",
    productSku: "",
    quantity: 1,
    paymentStatus: "UNPAID",
    status: "PENDING",
    address: "",
  });

  const handleChange = (
    field: string,
    value: string | number
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    if (
      !formData.customerName ||
      !formData.phone ||
      !formData.productName ||
      !formData.productImage
    ) {
      message.warning("Required fieldsni to'ldiring");
      return;
    }

    const orderData = {
      customerSnapshot: {
        firstName: formData.customerName,
        lastName: "",
        phone: formData.phone,
        email: "",
      },

      items: [
        {
          productName: formData.productName,
          productImage: formData.productImage,
          productSku: formData.productSku,
          quantity: formData.quantity,
        },
      ],

      paymentStatus: formData.paymentStatus,
      status: formData.status,

      address: formData.address,
    };

    mutate(orderData, {
      onSuccess: () => {
        onClose();

        setFormData({
          customerName: "",
          phone: "",
          productName: "",
          productImage: "",
          productSku: "",
          quantity: 1,
          paymentStatus: "UNPAID",
          status: "PENDING",
          address: "",
        });
      },
    });
  };

  return (
    <Modal
      open={open}
      onCancel={onClose}
      title="Add New Order"
      centered
      width={600}
      footer={[
        <button
          key="cancel"
          onClick={onClose}
          className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm hover:bg-gray-100"
        >
          Cancel
        </button>,

        <button
          key="submit"
          onClick={handleSubmit}
          disabled={isPending}
          className="ml-2 rounded-lg bg-green-700 px-5 py-2.5 text-sm text-white hover:bg-green-800 disabled:opacity-50"
        >
          {isPending ? "Saving..." : "Add Order"}
        </button>,
      ]}
    >
      <div className="grid grid-cols-2 gap-4 pt-4">

        {/* Customer */}
        <div>
          <label className="mb-1.5 block text-sm font-medium">
            Customer Name
          </label>

          <Input
            size="large"
            placeholder="Customer name"
            value={formData.customerName}
            onChange={(e) =>
              handleChange(
                "customerName",
                e.target.value
              )
            }
          />
        </div>

        {/* Phone */}
        <div>
          <label className="mb-1.5 block text-sm font-medium">
            Phone
          </label>

          <Input
            size="large"
            placeholder="+998 90 123 45 67"
            value={formData.phone}
            onChange={(e) =>
              handleChange(
                "phone",
                e.target.value
              )
            }
          />
        </div>

        {/* Product */}
        <div>
          <label className="mb-1.5 block text-sm font-medium">
            Product
          </label>

          <Input
            size="large"
            placeholder="Product name"
            value={formData.productName}
            onChange={(e) =>
              handleChange(
                "productName",
                e.target.value
              )
            }
          />
        </div>

        {/* SKU */}
        <div>
          <label className="mb-1.5 block text-sm font-medium">
            Product SKU
          </label>

          <Input
            size="large"
            placeholder="SKU-12345"
            value={formData.productSku}
            onChange={(e) =>
              handleChange(
                "productSku",
                e.target.value
              )
            }
          />
        </div>

        {/* Product Image */}
        <div className="col-span-2">
          <label className="mb-1.5 block text-sm font-medium">
            Product Image URL
          </label>

          <Input
            size="large"
            placeholder="https://example.com/product.jpg"
            value={formData.productImage}
            onChange={(e) =>
              handleChange(
                "productImage",
                e.target.value
              )
            }
          />

          {/* Image preview */}
          {formData.productImage && (
            <div className="mt-3 flex items-center gap-3">
              <img
                src={formData.productImage}
                alt="Product preview"
                className="h-16 w-16 rounded-lg border object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />

              <span className="text-sm text-gray-500">
                Image preview
              </span>
            </div>
          )}
        </div>

        {/* Quantity */}
        <div>
          <label className="mb-1.5 block text-sm font-medium">
            Quantity
          </label>

          <Input
            size="large"
            type="number"
            min={1}
            value={formData.quantity}
            onChange={(e) =>
              handleChange(
                "quantity",
                Number(e.target.value)
              )
            }
          />
        </div>

        {/* Payment */}
        <div>
          <label className="mb-1.5 block text-sm font-medium">
            Payment Status
          </label>

          <Select
            size="large"
            className="w-full"
            value={formData.paymentStatus}
            onChange={(value) =>
              handleChange(
                "paymentStatus",
                value
              )
            }
            options={[
              {
                label: "Paid",
                value: "PAID",
              },
              {
                label: "Unpaid",
                value: "UNPAID",
              },
            ]}
          />
        </div>

        {/* Status */}
        <div>
          <label className="mb-1.5 block text-sm font-medium">
            Order Status
          </label>

          <Select
            size="large"
            className="w-full"
            value={formData.status}
            onChange={(value) =>
              handleChange(
                "status",
                value
              )
            }
            options={[
              {
                label: "Pending",
                value: "PENDING",
              },
              {
                label: "Shipped",
                value: "SHIPPED",
              },
              {
                label: "Delivered",
                value: "DELIVERED",
              },
              {
                label: "Cancelled",
                value: "CANCELLED",
              },
            ]}
          />
        </div>

        {/* Address */}
        <div>
          <label className="mb-1.5 block text-sm font-medium">
            Address
          </label>

          <Input
            size="large"
            placeholder="Delivery address"
            value={formData.address}
            onChange={(e) =>
              handleChange(
                "address",
                e.target.value
              )
            }
          />
        </div>
      </div>
    </Modal>
  );
};

export default OrderModal;