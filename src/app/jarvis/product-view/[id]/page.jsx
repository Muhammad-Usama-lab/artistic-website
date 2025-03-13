import React from "react";

function Page() {
  return (
    <div className="pt-28" style={{background:"#121723"}}>
      <div className="flex items-center gap-3">
        <div className="size-12">
          <img src="/images/jarvis.png" />
        </div>
        <h1
          className={`uppercase max-w-8xl bold text-primary primary-font mt-10 md:mt-2 text-2xl sm:text-3xl`}
        >
          J.a.r.v.i.s
        </h1>
      </div>
      <div className="flex gap-4">
        <div className="size-8">
          <img src="/images/jarvis.png" />
        </div>
        <div>
          <div className="p-2 bg-[#e5e7eb] bg-stone-800">
            <h5 className="text-sm uppercase">RECIPE CODE</h5>
            <h4 className="text-lg primary-font">ZARA BASIC 638/24</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
