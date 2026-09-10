import { useState } from "react";

interface FilterModalProps {
  onClose: () => void;
  onFilter: (filters: {
    search: string;
    status: string;
    minPrice: string;
    maxPrice: string;
  }) => void;
}

export const FilterModal = ({
  onClose,
  onFilter,
}: FilterModalProps) => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleFilter = () => {
    onFilter({
      search,
      status,
      minPrice,
      maxPrice,
    });

    onClose();
  };

  const handleReset = () => {
    setSearch("");
    setStatus("");
    setMinPrice("");
    setMaxPrice("");
  };

  return (
    <div className=" fixed inset-0 z-50 flex items-center justify-center bg-black/50">

      <div className="mood w-[450px] rounded-lg bg-white p-5 shadow-[0px_1px_3px_0px_#00000033]">

        {/* Header */}
        <div className="flex items-center justify-between border-b pb-4">
          <h2 className="text-[20px] font-semibold ">
            Filter Products
          </h2>

          <button
            onClick={onClose}
            className="cursor-pointer text-[20px] text-gray-500 hover:text-red-700"
          >
            ✕
          </button>
        </div>

        {/* Product Search */}
        <div className="mt-5">
          <label className="mb-2 block text-sm font-medium">
            Product
          </label>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search product..."
            className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-green-700"
          />
        </div>

        {/* Status */}
        <div className="mt-4">
          <label className="mb-2 block text-sm font-medium">
            Status
          </label>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="mood w-full rounded-lg border border-gray-300 px-3 py-2  focus:border-green-700"
          >
            <option value="">All Status</option>
            <option value="Stock">Stock</option>
            <option value="Stock out">Stock out</option>
          </select>
        </div>

        {/* Price */}
        <div className="mt-4">
          <label className="mb-2 block text-sm font-medium">
            Price
          </label>

          <div className="flex gap-3">
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              placeholder="Min price"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-green-700"
            />

            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              placeholder="Max price"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-green-700"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-end gap-3">

          <button
            onClick={handleReset}
            className="cursor-pointer rounded-lg border border-gray-300 px-4 py-2 text-sm"
          >
            Reset
          </button>

          <button
            onClick={handleFilter}
            className="cursor-pointer rounded-lg bg-green-800 px-5 py-2 text-sm text-white"
          >
            Apply Filter
          </button>

        </div>

      </div>
    </div>
  );
};