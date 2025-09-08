import React from "react";
import { Heart } from "lucide-react";
import twoPhone from '../../../assets/Twophone.png'

const AppPromo = () => {
  return (
    <>
    <section className="w-full bg-white my-5  rounded-2xl shadow-sm py-9">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 py-5">
        
          <div className="flex gap-6">
            <img
              src={twoPhone}
              alt="App Screenshot 1"
             
            />
           </div>
              </div>
          </section>
          <section className="w-full bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto text-left">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-600">
          Padhlo chahe kahi se Manzil milegi yahi se!
        </h2>
        <div className="flex items-center justify-start gap-2 mt-6 text-gray-600">
          <Heart className="w-5 h-5 text-red-500 fill-red-500" />
          <span className="text-base">From PhysicsWallah</span>
        </div>
      </div>
    </section>
     </>
  
  );
};

export default AppPromo;
