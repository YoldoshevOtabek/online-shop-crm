import ApexChart from "./ApexChart"
import CustomerTable from "./CustomersTable"



export const Customers = () => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3">
        {/* Total Costumers */}
        <div className=" content-mood shadow-[0px_1px_3px_0px_#00000033]  rounded-lg p-5 ">
            <div className="flex justify-between items-center">
              <b className="text-[18px]">Total Costumers</b>
              <span>
                <i className="bi bi-three-dots-vertical"></i>
              </span>
            </div>
    
            <div className="flex items-center gap-4">
              <p className="text-[32px]">1,240</p>
              
                <span className="text-[#21C45D] ps-1">
                  <i className="bi bi-arrow-up"></i> 10.4%
                </span>
            </div>

            <span className="text-[14px] text-[#606772]">
              Previous 7days{" "}
              <span className="text-[#6467F2]">($235)</span>
            </span>
        </div>
          {/* New Costumers */}
        <div className="mt-5 content-mood shadow-[0px_1px_3px_0px_#00000033] rounded-lg p-5 ">
            <div className="flex justify-between items-center">
              <b className="text-[18px]">New Costumers</b>
              <span>
                <i className="bi bi-three-dots-vertical"></i>
              </span>
            </div>
    
            <div className="flex items-center gap-4">
              <p className="text-[32px]">240</p>
              
                <span className="text-[#21C45D] ps-1">
                  <i className="bi bi-arrow-up"></i> 10.4%
                </span>
            </div>

            <span className="text-[14px] text-[#606772]">
              Previous 7days{" "}
              <span className="text-[#6467F2]">($235)</span>
            </span>
        </div>
          {/* Visitor */}
        <div className="mt-5 content-mood shadow-[0px_1px_3px_0px_#00000033] rounded-lg p-5 ">
            <div className="flex justify-between items-center">
              <b className="text-[18px]">Visitor</b>
              <span>
                <i className="bi bi-three-dots-vertical"></i>
              </span>
            </div>
    
            <div className="flex items-center gap-4">
              <p className="text-[32px]">960</p>
              
                <span className="text-[#21C45D] ps-1">
                  <i className="bi bi-arrow-up"></i> 10.4%
                </span>
            </div>

            <span className="text-[14px] text-[#606772]">
              Previous 7days{" "}
              <span className="text-[#6467F2]">($235)</span>
            </span>
        </div>
        </div>
        <div className="col-span-9 row-span-12">
          <ApexChart/>
        </div>
      </div>
     
      <div className="mt-[-150px]">
        <h2>Customer Details</h2>
        <CustomerTable/>
      </div>
    </div>
  )
}
