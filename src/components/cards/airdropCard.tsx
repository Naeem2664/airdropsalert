import React from 'react';
import { CheckCircle2} from 'lucide-react';
import { Flame ,Pickaxe} from 'lucide-react';
const AirdropCard = () => {
  return (
    <div className="max-w-[390px] max-h-[280px] text-amber-50 bg-gray-900 shadow-md overflow-hidden border border-gray-200 p-4 flex flex-col hover:bg-green-500 transition-[background-color]">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2 w-full">
            <div className='w-[80px] h-[80px] rounded-full flex items-center justify-center bg-amber-50 text-amber-800 '> 
                <p>Image</p>       
            </div>
        <h1 className="text-2xl font-bold">WAB Summit</h1>
        </div>
      </div>
      <div className="flex flex-col">
         <div className="mt-1 mb-2 flex">
        <div className="flex items-center">
            <span><Pickaxe className='w-4'/></span>
            <p className="text-xl font-bold">Action: Complete the social quest</p>
        </div>
      </div>
      </div>
      <div className="flex items-center justify-between mt-5 w-full"> 
  <span className="flex items-center gap-1 bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">
    <CheckCircle2 className="w-3 h-3" />
    CONFIRMED
  </span>
  <h3 className="text-lg font-medium px-2 py-0.5">
    <p className='flex'><Flame className="text-red-500 w-6 h-6 text-xl" />500</p>
    
  </h3>
</div>
    </div>
  );
};

export default AirdropCard;