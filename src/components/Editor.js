import React from 'react'
import { MdAddBox } from "react-icons/md";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { FaList,FaPlusSquare,FaHandPaper,FaUpload } from "react-icons/fa";
import { TbFrame,TbAdjustmentsDown } from "react-icons/tb";
import Range_Slider from './Range_Slider';
import { GiClockwiseRotation } from "react-icons/gi";
import { GrChapterPrevious,GrChapterNext } from "react-icons/gr";
import { IoPlayOutline } from "react-icons/io5";

const Editor = () => {
  return (
    <div className='w-screen h-screen bg-slate-300 flex justify-start overflow-y-scroll flex-col'>

<div  className='flex flex-col sm:flex-row w-full  md:h-3/5 overflow-y-scroll'>
<div className='py-2 px-2 overflow-y-scroll h-3/5  md:h-full relative'>
   <div className='sm:text-xl font-bold my-2 flex justify-center'>Assets</div>
   <div className='flex flex-col justify-normal'>
   <div className="grid grid-cols-2 md:grid-cols-2 gap-1">
    
   <div className='flex justify-center flex-col mx-2'>
  <div className="bg-slate-200 p-4 rounded-md shadow-sm w-32 h-20  cursor-pointer transition-colors duration-300 ease-in-out hover:bg-gray-400 focus:bg-gray-400'">
    <p className="text-gray-600"></p>
  </div>
  <h2 className="text-md font-semibold mb-2 my-1 flex justify-center">Video.mp4</h2>
  </div>


  <div className='flex justify-center flex-col mx-2'>
  <div className="bg-slate-200 p-4 rounded-md shadow-sm w-32 h-20  cursor-pointer transition-colors duration-300 ease-in-out hover:bg-gray-400 focus:bg-gray-400'">
    <p className="text-gray-600"></p>
  </div>
  <h2 className="text-md font-semibold mb-2 my-1 flex justify-center">Video.mp4</h2>
  </div>
   </div>
   <div className='absolute right-2 bottom-2'>
<div className='flex justify-end flex-row text-center'>
    <div className='mr-8 '><FaPlusSquare className='text-3xl'/></div>
    <div className='mr-2 '><TfiLayoutGrid3Alt className='text-3xl '/></div>
    <div className='mr-2 '><FaList className='text-3xl '/></div>
    </div>    
   </div>
   </div>
    </div>

<div className='py-2 px-2 flex flex-col h-full md:h-full '>
<div className='flex flex-row justify-center items-center my-1'>
    <div className='mx-1'> <FaHandPaper className='text-xl'/></div>
    <div className='mx-1'><TbFrame className='text-xl'/></div>
    <div className='mx-1'><TbAdjustmentsDown className='text-xl'/></div>
    </div>
<div className='border-2 border-gray-900 h-4/5 md:h-full w-full md:w-96 mt-2'></div>
</div>

<div className='border-2 border-gray-700 flex flex-col max-h-fit md:h-full w-full lg:w-2/4 overflow-y-scroll md:overscroll-none'>

<div className='py-4 px-2 flex flex-row justify-end items-center border-b-2 border-gray-700'>
    <div className='mx-4'><FaUpload className='text-xl' /></div>
    <div className='mr-6 text-xl font-bold rounded-sm border-2 border-gray-500 shadow-md bg-slate-200 px-2 py-1'>Export</div>
    
    </div>
    
<div className='flex flex-col'> 
    <div className='flex justify-center items-center text-xl font-bold'>Properties</div>
<div className='flex flex-col justify-end  pr-4 w-full'>

    <div className='w-full flex flex-row justify-end items-center my-2 mx-1'>
    <div className='text-lg font-bold'>Scale</div>
        <div className='mx-2 w-fit '><Range_Slider/></div>
    <div className='mx-1 text-md font-bold rounded-sm border-2 border-gray-500 bg-slate-200 px-1 py-1'>100%</div>
    </div>

    <div className='w-full flex flex-row justify-end items-center my-2 mx-1'>
    <div className='text-lg font-bold'>Opacity</div>
        <div className='mx-2 w-fit '><Range_Slider/></div>
    <div className='mx-1 text-md font-bold rounded-sm border-2 border-gray-500 bg-slate-200 px-1 py-1'>100%</div>
    </div>
<div className='flex flex-col md:flex-row'>
  
    <div className='w-full flex flex-row justify-end items-center my-2 mx-1 relative'>
    <div className='text-lg font-bold flex absolute top-0 right-32'>Rotation</div>
    <div className='flex flex-col md:ml-10'>

      <div className='flex flex-row items-center mb-2'>
        <div className='mx-2 '><GiClockwiseRotation className='text-lg font-bold'/></div>
        <div className='text-lg font-bold mx-2'>Z</div>
        <div className='ml-2 text-md font-bold rounded-sm border-2 border-gray-500 bg-slate-200 px-2 py-1'>0.0</div>
      </div>

      <div className='flex flex-row items-center my-2'>
        <div className='mx-2 '><GiClockwiseRotation className='text-lg font-bold'/></div>
        <div className='text-lg font-bold mx-2'>Y</div>
        <div className='ml-2 text-md font-bold rounded-sm border-2 border-gray-500 bg-slate-200 px-2 py-1'>0.0</div>
      </div>

      <div className='flex flex-row items-center my-2'>
        <div className='mx-2 '><GiClockwiseRotation className='text-lg font-bold'/></div>
        <div className='text-lg font-bold mx-2'>X</div>
        <div className='ml-2 text-md font-bold rounded-sm border-2 border-gray-500 bg-slate-200 px-2 py-1'>0.0</div>
      </div>

    </div>
    </div>
    <div className='w-full flex flex-row justify-end items-center my-2 mx-1 relative'>
    <div className='text-lg font-bold flex absolute top-0 right-32'>Position</div>
    <div className='flex flex-col md:ml-10'>

      <div className='flex flex-row items-center mb-2'>
       
        <div className='text-lg font-bold mx-2'>X</div>
        <div className='ml-2 text-md font-bold rounded-sm border-2 border-gray-500 bg-slate-200 px-2 py-1'>0.0</div>
      </div>

      <div className='flex flex-row items-center my-2'>
       
        <div className='text-lg font-bold mx-2'>Y</div>
        <div className='ml-2 text-md font-bold rounded-sm border-2 border-gray-500 bg-slate-200 px-2 py-1'>0.0</div>
      </div>

      <div className='flex flex-row items-center my-2'>
       
        <div className='text-lg font-bold mx-2'>Z</div>
        <div className='ml-2 text-md font-bold rounded-sm border-2 border-gray-500 bg-slate-200 px-2 py-1'>0.0</div>
      </div>

    </div>
    </div>
    </div>
    </div>
</div>

    
    </div>

</div>

<div className='bg-red-300 flex flex-col sm:flex-row md:h-2/5 w-full justify-center items-center'>
<div className='flex flex-row justify-center items-center my-1'>
<div className='mx-2 border-2 border-gray-500 rounded-3xl bg-slate-400 p-2'><GrChapterPrevious className='text-xl font-bold'/></div>
</div>
<div className='flex flex-row justify-center items-center mx-1'>
<div className='mx-2 border-2 border-gray-500 rounded-3xl bg-slate-400 p-2'><IoPlayOutline className='text-xl font-bold'/></div>
</div>
<div className='flex flex-row justify-center items-center mx-1'>
<div className='mx-2 border-2 border-gray-500 rounded-3xl bg-slate-400 p-2'><GrChapterNext className='text-xl font-bold'/></div>
</div>

</div>

    </div>
  )
}

export default Editor;