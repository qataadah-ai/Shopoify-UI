import React from 'react'

function ProductHeader() {
    return (
        <div>
    
         <section className="px-[16px]">
      <div className="pt-[16px] px-[0px] pb-[12px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-0">
            <span className="inline-flex items-center justify-center w-6 h-6 text-[#1a1a1a]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-4 h-4 fill-current">
                <path d="M11 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                <path fillRule="evenodd" d="M9.276 1.5c-1.02 0-1.994.415-2.701 1.149l-4.254 4.417a2.75 2.75 0 0 0 .036 3.852l2.898 2.898a2.5 2.5 0 0 0 3.502.033l4.747-4.571a3.25 3.25 0 0 0 .996-2.341v-2.187a3.25 3.25 0 0 0-3.25-3.25zm-1.62 2.19a2.24 2.24 0 0 1 1.62-.69h1.974c.966 0 1.75.784 1.75 1.75v2.187c0 .475-.194.93-.536 1.26l-4.747 4.572a1 1 0 0 1-1.401-.014l-2.898-2.898a1.25 1.25 0 0 1-.016-1.75l4.253-4.418Z" />
              </svg>
            </span>
            <h1 className="text-[1.125rem] font-semibold text-gray-900">
              <a href="#">
                Products
              </a>
            </h1>
          </div>
          {/* Right: Buttons */}
          <div className="flex gap-1">
            <button className="py-1 px-3 bg-[#E3E3E3] rounded-[8px] text-[12px] font-[550] text-[#303030] hover:bg-[#cccc] cursor-pointer">
              Export
            </button>
            <button className="py-1 px-3 bg-[#E3E3E3] rounded-[8px] text-[12px] font-[550] text-[#303030] hover:bg-[#cccc] cursor-pointer">
              import
            </button>
            <button className="py-1 px-3 bg-[#E3E3E3] rounded-[8px] text-[12px] font-[550] text-[#303030] hover:bg-[#cccc] cursor-pointer">
              More Actions
            </button>
            <button className="rounded-[8px] 
   bg-[#303030] 
   text-white 
   px-3 py-1
   text-[0.75rem] font-semibold font-sans 
   cursor-pointer 
   shadow-[0_-0.0625rem_0_0.0625rem_rgba(0,0,0,0.8)_inset,0_0_0_0.0625rem_rgba(48,48,48,1)_inset,0_0.03125rem_0_0.09375rem_rgba(255,255,255,0.25)_inset]
   hover:bg-[#1a1a1a] 
   active:translate-y-[0.0625rem] 
   active:[&>*]:translate-y-[0.0625rem]
   inline-flex items-center justify-center">
              Add product
            </button>
          </div>
        </div>
      </div>
    </section>



    <section className="px-[16px]">
      <div className="flex items-center bg-white rounded-[12px]  border border-[#E3E3E3] h-[70px]">
        <div className="py-1 px-1.5">
          <div className="flex items-center p-4 rounded-[8px] gap-2 hover:bg-[#f1f1f1] cursor-pointer">
            <span className="inline-flex items-center text-[#303030]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-4 h-4 fill-current">
                <path fillRule="evenodd" d="M5.75 1.5a.75.75 0 0 0-1.5 0v.407a3 3 0 0 0-.702.252c-.706.36-1.28.933-1.64 1.639-.226.444-.32.924-.365 1.47-.043.531-.043 1.187-.043 2v1.464c0 .813 0 1.469.043 2 .045.546.14 1.026.366 1.47.36.706.933 1.28 1.639 1.64.444.226.924.32 1.47.365.531.043 1.187.043 2 .043h3.383c.323 0 .542 0 .735-.02a3.75 3.75 0 0 0 3.344-3.344c.02-.193.02-.412.02-.735v-2.883c0-.813 0-1.469-.043-2-.045-.546-.14-1.026-.366-1.47a3.76 3.76 0 0 0-1.638-1.64 3 3 0 0 0-.703-.251v-.407a.75.75 0 0 0-1.5 0v.259c-.373-.009-.794-.009-1.268-.009h-1.964c-.474 0-.895 0-1.268.009zm-1.521 1.995c.197-.1.458-.17.912-.207.462-.037 1.057-.038 1.909-.038h1.9c.852 0 1.447 0 1.91.038.453.037.714.107.912.207.423.216.767.56.983.984.1.197.17.458.207.912.014.18.024.38.029.609h-9.982q.008-.34.03-.61c.036-.453.106-.714.206-.911a2.25 2.25 0 0 1 .984-.984m-1.229 4.005v1.2c0 .852 0 1.447.038 1.91.037.453.107.714.207.912.216.423.56.767.984.983.197.1.458.17.912.207.462.037 1.057.038 1.909.038h3.306c.385 0 .52-.001.626-.012a2.25 2.25 0 0 0 2.006-2.006c.011-.106.012-.241.012-.626v-2.606z" />
              </svg>
            </span>
            <span className="text-[12px] text-[#303030] font-medium">30 days</span>
          </div>
        </div>
        {/* Divider */}
        <hr className="w-px h-[70px] bg-gray-300  border-0" />
        <div className="py-1 px-1.5">
          <div className="flex flex-col justify-center px-3 py-1 rounded-[8px] hover:bg-[#f7f7f7]  ">
            {/* Metric Card 1 */}
            <a href="#" className="flex flex-col gap-1">
              <h1 className="text-[0.8125rem] font-semibold text-[#303030] underline decoration-dotted decoration-[#cccc] decoration-2 underline-offset-4 leading-[1.5]">
                Average sell-through rate
              </h1>
              <p className="text-[0.8125rem] font-semibold text-[#303030] flex items-center gap-2">
                0%
                <svg viewBox="0 0 11 16" height={16} width={11}>
                  <path d="M0.519531 1.79395H12.0039V0.249023H0.519531V1.79395Z" fill="#8a8a8a" transform="translate(0, 7)" />
                </svg>
              </p>
            </a>
          </div>
        </div>
        {/* Divider */}
        <hr className="w-px h-[70px] bg-gray-300  border-0" />
        <div className="py-1 px-1.5">
          <div className="flex flex-col justify-center px-3 py-1 rounded-[8px] hover:bg-[#f7f7f7]  ">
            {/* Metric Card 2 */}
            <a href="#" className="flex flex-col gap-1">
              <h1 className="text-[0.8125rem] font-semibold text-[#303030] underline decoration-dotted decoration-[#cccc] decoration-2 underline-offset-4 leading-[1.5]">
                Products by days of inventory remaining
              </h1>
              <p className="text-[0.8125rem] font-medium leading-[1.5] text-[#616161] ">No data</p>
            </a>
          </div>
        </div>
        <hr className="w-px h-[70px] bg-gray-300  border-0" />
        <div className="py-1 px-1.5 flex-1">
          <div className="flex flex-col justify-center px-3 py-1 rounded-[8px] hover:bg-[#f7f7f7] w-full ">
            {/* Metric Card 3*/}
            <a href="#" className="flex flex-col gap-1 w-full">
              <h1 className="text-[0.8125rem] font-semibold text-[#303030] underline decoration-dotted decoration-[#cccc] decoration-2 underline-offset-4 leading-[1.5]">
                ABC products analysis
              </h1>
              <p className="text-[0.8125rem] font-medium leading-[1.5] ">RS 0
                <span className="text-[0.8125rem] font-normal">C</span>
              </p>
              <hr className=" h-[2px] w-[40px] bg-[#13acf0] border-0" />
            </a>
          </div>
        </div>
      </div>
    </section>
    </div>

    )
}

export default ProductHeader
