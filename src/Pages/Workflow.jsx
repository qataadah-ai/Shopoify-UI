import { Link } from "react-router-dom"

export const Workflow = ()=>{

     return (
    <>
 
<div
   
    className="h-screen bg-[#F1F1F1]"
  >
    <section className="px-[16px]">
      <div className="pt-[16px] px-[0px] pb-[12px]">
        

        <div className="flex justify-between">
          <nav className="flex items-center">
        
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M12 14h-2a1 1 0 0 1-1-1v-2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v2.5a1 1 0 0 1-1 1h-2a2 2 0 0 1-2-2v-4.257c0-.796.316-1.56.879-2.122l3.707-3.707c.78-.78 2.047-.78 2.828 0l3.707 3.707a3 3 0 0 1 .879 2.122v4.257a2 2 0 0 1-2 2"
              ></path>
            </svg>
            <h1 className="text-[1.125rem] font-semibold text-gray-900">
              <a href="#"> Workflow </a>
            </h1>
          </nav>
         
          <div className="flex gap-1">
            <button
              className="py-1 px-3 bg-[#E3E3E3] rounded-[8px] text-sm font-medium hover:bg-[#cccc] cursor-pointer"
            >
              Browse templates
            </button>
   <Link to={"/products"}>
            <button
              className="py-1 px-3 bg-[#E3E3E3] rounded-[8px] text-sm font-medium hover:bg-[#cccc] cursor-pointer"
            >
              Products
            </button>
            </Link>
               <button
  className="rounded-[8px] 
         bg-[#303030] 
         text-white 
         px-3 py-1
         text-[0.75rem] font-semibold font-sans 
         cursor-pointer 
         shadow-[0_-0.0625rem_0_0.0625rem_rgba(0,0,0,0.8)_inset,0_0_0_0.0625rem_rgba(48,48,48,1)_inset,0_0.03125rem_0_0.09375rem_rgba(255,255,255,0.25)_inset]
         hover:bg-[#1a1a1a] 
         active:translate-y-[0.0625rem] 
         active:[&>*]:translate-y-[0.0625rem]
         inline-flex items-center justify-center"
>
  Createworkflow
</button>
          </div>
        </div>
      </div>
    </section>

    <section className="px-[16px]">
      <div className="bg-[#FFFFFF] py-16 rounded-3xl border border-gray-200">
   
        <div
          className="flex flex-col items-center max-w-[400px] mx-auto text-center space-y-[6px]"
        >
       

          <img
            src="https://cdn.shopify.com/shopifycloud/flow_app/assets/emptystate-CUz6fFX6.png"
            alt="Image"
            className="object-contain max-w-[189px] h-[148px]"
          />

        
          <div className="space-y-[6px]">
            <h2 className="text-sm font-semibold">
              Get more work done in less time
            </h2>

       
            <p className="text-">
              Turn your tasks into automated workflows so you can get back to
              business.
            </p>
          </div>
        
          <div className="flex flex-wrap justify-center gap-3 mt-4">

    <button
  className="
    rounded-[8px]
    bg-[#FFFFFF]
    text-black
    px-3 py-1
    text-[0.75rem] font-semibold font-sans
    cursor-pointer
  shadow-[inset_0_0_0_.5px_#D3D3D3,inset_0_-.5px_0_.5px_#B5B5B5]
    active:translate-y-[0.0625rem]
    inline-flex items-center justify-center
  "
>
  Browse templates
</button>


           
          <button
  className="rounded-[8px] 
         bg-[#303030] 
         text-white 
         px-3 py-1
         text-[0.75rem] font-semibold font-sans 
         cursor-pointer 
        
         shadow-[0_-0.0625rem_0_0.0625rem_rgba(0,0,0,0.8)_inset,0_0_0_0.0625rem_rgba(48,48,48,1)_inset,0_0.03125rem_0_0.09375rem_rgba(255,255,255,0.25)_inset]
         hover:bg-[#1a1a1a] 
         active:translate-y-[0.0625rem] 
         active:[&>*]:translate-y-[0.0625rem]
         
         inline-flex items-center justify-center"
>
  Createworkflow
</button>

          </div>
        </div>
      </div>
    </section>
</div>
    </>
  );
}