import ApexChart from "../../../components/ui/ApexChart"
import "../styles/diogramm.css"
import { BestSellingProduct } from "./BestSellingProduct"
import { TopProducts } from "./TopProducts"
import UsersInfo from "./UsersInfo"


export const Dashboard = () => {
  return (
    <div className="w-full position-relative">
    <div className="grid grid-cols-3 gap-4 w-full">
      
      {/* Total Sales */}
      <div className="total-card h-55.5 rounded-lg p-5 ">
        <div className="flex justify-between items-center">
          <b className="text-[18px] ">Total Sales</b>
          <span>
            <i className="bi bi-three-dots-vertical"></i>
          </span>
        </div>
  
        <span className="text-[#b3bbcc] text-[14px]">Last 7 days</span>
  
        <div className="flex items-center gap-4">
          <p className="text-[32px]">$350K</p>
          <span>
            Sales
            <span className="text-[#21C45D] ps-1">
              <i className="bi bi-arrow-up"></i> 10.4%
            </span>
          </span>
        </div>
  
        <span className="text-[14px] text-[#606772]">
          Previous 7days{" "}
          <span className="text-[#6467F2]">($235)</span>
        </span>
  
        <div className="flex justify-end mt-5">
          <button className="cursor-pointer text-[#6467F2] px-[24.5px] py-1 rounded-[50px] border-2 border-[#6467F2]">
            Details
          </button>
        </div>
      </div>
  
      {/* Total Orders */}
      <div className="total-card h-55.5 rounded-lg p-5 ">
        <div className="flex justify-between items-center">
          <b className="text-[18px]">Total Orders</b>
          <span>
            <i className="bi bi-three-dots-vertical"></i>
          </span>
        </div>
  
        <span className="text-[#b3bbcc] text-[14px]">Last 7 days</span>
  
        <div className="flex items-center gap-4">
          <p className="text-[32px]">$350K</p>
          <span>
            Order
            <span className="text-[#21C45D] ps-1">
              <i className="bi bi-arrow-up"></i> 10.4%
            </span>
          </span>
        </div>
  
        <span className="text-[14px] text-[#606772]">
          Previous 7days{" "}
          <span className="text-[#6467F2]">($235)</span>
        </span>
  
        <div className="flex justify-end mt-5">
          <button className="cursor-pointer text-[#6467F2] px-[24.5px] py-1 rounded-[50px] border-2 border-[#6467F2]">
            Details
          </button>
        </div>
      </div>
  
      {/* Pending & Canceled */}
      <div className="total-card h-55.5 rounded-lg p-5 ">
        <div className="flex justify-between items-center">
          <b className="text-[18px]">
            Pending & Canceled
          </b>
          <span>
            <i className="bi bi-three-dots-vertical"></i>
          </span>
        </div>
  
        <span className="text-[#b3bbcc] text-[14px]">Last 7 days</span>
  
        <div className="flex items-center gap-4">
          <p className="text-[32px]">$350K</p>
          <span>
            Sales
            <span className="text-[#21C45D] ps-1">
              <i className="bi bi-arrow-up"></i> 10.4%
            </span>
          </span>
        </div>
  
        <span className="text-[14px] text-[#606772]">
          Previous 7days{" "}
          <span className="text-[#6467F2]">($235)</span>
        </span>
  
        <div className="flex justify-end mt-5">
          <button className="cursor-pointer text-[#6467F2] px-[24.5px] py-1 rounded-[50px] border-2 border-[#6467F2]">
            Details
          </button>
        </div>
      </div>
  
    </div>
  
    <div className="diogramm mt-5 grid grid-cols-12 gap-4">
      <ApexChart />
      <UsersInfo/>
    </div>
    <div className="mt-5 grid grid-cols-12 gap-4">
      <BestSellingProduct/>
      <TopProducts/>
    </div>
  </div>
  )
}
