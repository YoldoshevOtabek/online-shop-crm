import CategoryTable from "./CategoryTable"
import "../styles/category.css"
import { useState } from "react";
import CategoryModal from "./CategoryModal";

export const Categories = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="text-[22px]">Discover</span>
        <div className="flex items-center gap-3">
          <button
             onClick={() => setOpenModal(true)}
            className="flex items-center gap-1 rounded-lg bg-green-700 px-5 py-3 text-white cursor-pointer"
          >
            <i className="bi bi-plus-circle"></i>

            <span className="text-[15px]">Add Product</span>
          </button>
          <button className="flex items-center gap-1 px-5 py-3 rounded-lg cursor-pointer bg-white text-black">
            <span className="text-[15px]">More Action</span>
            <i className="bi bi-three-dots-vertical"></i>
          </button>
        </div>
      </div>
    {/* Table */}
    
    <div className="mt-5">
      <CategoryTable/>
    </div>

      {/* Category Modal */}
      <CategoryModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </div>
  )
}
