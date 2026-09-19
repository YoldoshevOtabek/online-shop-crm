import { Button, Input, Modal, Switch } from "antd"
import type { BrandModalProps } from "../types/brandType"


export const BrandModal = ({
    open , setOpen, editingBrand, handleSubmit,
    handleChange, formData,setFormData,
    createBrand,    updateBrand,
    }:BrandModalProps) => {


        
  return (
    <Modal 
    open={open}
    onCancel={() => setOpen(false)}
    footer={null}
    centered
    title={editingBrand ? "Edit Brand" : "Create Brand"}
    width={600}
  >
    <div className="content-mood mt-5 rounded-xl border border-gray-200 bg-white p-5 dark:border-[#25282a] dark:bg-[#111414]">

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

        {/* Name */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Brand Name
          </label>

          <Input
          className="content-input"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter brand name"
          />
        </div>

        {/* Slug */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Slug
          </label>

          <Input
          className="content-input"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            placeholder="acer"
          />
        </div>

        {/* Logo */}
        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium">
            Logo URL
          </label>

          <Input
          className="content-input"
            name="logo"
            value={formData.logo}
            onChange={handleChange}
            placeholder="https://example.com/logo.png"
          />
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium">
            Description
          </label>

          <Input.TextArea
          className="content-input"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter brand description"
            rows={4}
          />
        </div>

        {/* Active */}
        <div className="flex items-center justify-between rounded-lg border border-gray-200 px-4 py-3 dark:border-[#25282a]">
          <div>
            <p className="text-sm font-medium">
             {formData.isActive ? "Active" : "Inactive"} 
            </p>

            <p className="text-xs text-gray-500">
              {formData.isActive ? "Brandni inaktiv qilish" : "Brandni aktiv qilish"}
              </p>
          </div>

          <Switch
            checked={formData.isActive}
            onChange={(checked) =>
              setFormData((prev) => ({
                ...prev,
                isActive: checked,
              }))
            }
          />
        </div>

      </div>

      {/* Buttons */}
      <div className="mt-6 flex justify-end gap-3">
        <Button onClick={() => setOpen(false)}>
          Cancel
        </Button>

        <Button
          type="primary"
          loading={
            createBrand.isPending ||
            updateBrand.isPending
          }
          onClick={handleSubmit}
        >
          {editingBrand ? "Update" : "Create"}
        </Button>
      </div>

    </div>
  </Modal>
  )
}
