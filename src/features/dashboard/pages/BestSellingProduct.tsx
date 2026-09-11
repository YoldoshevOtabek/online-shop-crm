import { useState } from "react";
import { FilterModal } from "./FilterModal";


const products = [
  {
    id: 1,
    name: "Apple iPhone 13",
    image: "📱",
    orders: 104,
    status: "Stock",
    price: "$999.00",
  },
  {
    id: 2,
    name: "Nike Air Jordan",
    image: "👟",
    orders: 56,
    status: "Stock out",
    price: "$999.00",
  },
  {
    id: 3,
    name: "T-shirt",
    image: "👕",
    orders: 266,
    status: "Stock",
    price: "$999.00",
  },
  {
    id: 4,
    name: "Cross Bag",
    image: "👜",
    orders: 506,
    status: "Stock",
    price: "$999.00",
  },
];

export const BestSellingProduct = () => {
  const [openModal, setOpenModal] = useState(false)
  const [filters, setFilters] = useState({
    search: "",
    status: "",
    minPrice: "",
    maxPrice: "",
  });
  return (
    <div className="content-mood shadow-[0px_1px_3px_0px_#00000033] rounded-lg col-span-8 p-2.5">
      <div className="flex justify-between items-center">
        <span className="text-[18px]">Best Selling Product</span>
        <button onClick={()=> setOpenModal(!openModal)} className="bg-green-800 text-white text-[14px] rounded-lg px-3 py-1.5 flex items-center gap-2 cursor-pointer">
          Filter <i className="bi bi-filter text-[20px]"></i>{" "}
        </button>
       
      </div>
      {openModal && (
      <FilterModal
        onClose={() => setOpenModal(false)}
        onFilter={(newFilters) => setFilters(newFilters)}
      />
    )}
      <div className="mt-4 grid grid-cols-4 items-center rounded-lg bg-[#e0e2e0] px-4 py-3 text-[11px] font-medium uppercase text-[#68727D]">
        <div>Product</div>
        <div>Total Order</div>
        <div>Status</div>
        <div>Price</div>
      </div>

      {/* Rows */}
      <div>
        {products.map((product) => (
          <div
            key={product.id}
            className="grid grid-cols-4 items-center px-4 py-3 text-sm"
          >
            {/* Product */}
            <div className="flex items-center gap-3">
              <div className="flex h-7 w-7 items-center justify-center text-xl">
                {product.image}
              </div>

              <span className="font-semibold ">{product.name}</span>
            </div>

            {/* Total Order */}
            <div className="text-[#5a6472]">{product.orders}</div>

            {/* Status */}
            <div
              className={`flex items-center gap-2 ${
                product.status === "Stock" ? "text-[#16B957]" : "text-[#FF4444]"
              }`}
            >
              <span
                className={`h-2 w-2 rounded-full ${
                  product.status === "Stock" ? "bg-[#16B957]" : "bg-[#FF4444]"
                }`}
              ></span>

              <span>{product.status}</span>
            </div>

            {/* Price */}
            <div className="font-semibold ">{product.price}</div>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-5">
        <button className="cursor-pointer text-[#6467F2] px-[24.5px] py-1 rounded-[50px] border-2 border-[#6467F2]">
          Details
        </button>
      </div>
    </div>
  );
};
