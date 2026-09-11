import { Search } from "lucide-react";
const products = [
    {
      id: 1,
      name: "Apple iPhone 13",
      image: "📱",
      price: "$999.00",
    },
    {
      id: 2,
      name: "Nike Air Jordan",
      image: "👟",
      price: "$72.40",
    },
    {
      id: 3,
      name: "T-shirt",
      image: "👕",
      price: "$35.40",
    },
    {
      id: 4,
      name: "Assorted Cross Bag",
      image: "👜",
      price: "$80.00",
    },
  ];
export const TopProducts = () => {
  return (
    <div className="content-mood shadow-[0px_1px_3px_0px_#00000033] rounded-lg col-span-4 p-[20px_65px_10px_16px]">
        <div className="flex items-center justify-between px-4 ">
        <h2 className="text-[18px] font-semibold ">
          Top Products
        </h2>

        <button className="text-[12px] text-[#5B5FEF]">
          All products
        </button>
      </div>

      {/* Search */}
      <div className="px-4 py-3">
        <div className="flex h-10 items-center gap-3 rounded-md border border-[#E5E7EB] bg-[#F9FAFB] px-3">
          <Search
            size={20}
            strokeWidth={1.8}
            className="text-[#697586]"
          />

          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent text-sm text-[#374151] outline-none placeholder:text-[#8A94A6]"
          />
        </div>
      </div>

      {/* Products */}
      <div className="border-t border-[#E1E1E1]">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex min-h-[80px] items-center justify-between border-b border-[#E1E1E1] px-4"
          >
            {/* Left */}
            <div className="flex items-center gap-4">
              <div className="flex h-[50px] w-[50px] items-center justify-center">
                  {product.image}
              </div>

              <div>
                <h3 className="max-w-[130px] text-[14px] font-medium leading-[17px]">
                  {product.name}
                </h3>

                <p className="mt-1 text-[12px] text-[#8A94A6]">
                  Item: #FXZ-4567
                </p>
              </div>
            </div>

            {/* Price */}
            <div className="text-[15px] font-semibold ">
              {product.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
