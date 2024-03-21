import React from 'react'
import { MdAddBox, MdZoomIn } from "react-icons/md";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { FaList,FaPlusSquare,FaHandPaper,FaUpload,FaEye,FaLockOpen } from "react-icons/fa";
import { TbFrame,TbAdjustmentsDown } from "react-icons/tb";
import Range_Slider from './Range_Slider';
import { GiClockwiseRotation,GiAnticlockwiseRotation,  } from "react-icons/gi";
// import { GiAnticlockwiseRotation } from "react-icons/gi";
import { GrChapterPrevious,GrChapterNext,GrCut } from "react-icons/gr";
import { IoPlayOutline } from "react-icons/io5";
import { MdOutlineContentCopy,MdOutlineZoomOut} from "react-icons/md";
import { FaCopy } from "react-icons/fa6";
import { BsLayoutSplit } from "react-icons/bs";
import { AiOutlineZoomIn } from "react-icons/ai";

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

<div className='flex flex-col  md:h-2/5 w-full justify-center items-center'>

  <div className='flex flex-col md:flex-row justify-center items-center my-0.5 '>
    <div className='mr-2 flex flex-row'>
<div className='flex flex-row justify-center items-center my-1'>
<div className='mx-2 border-2 border-gray-500 rounded-3xl bg-slate-400 p-2'><GrChapterPrevious className='text-lg md:text-xl font-bold'/></div>
</div>
<div className='flex flex-row justify-center items-center mx-1'>
<div className='mx-2 border-2 border-gray-500 rounded-3xl bg-slate-400 p-2'><IoPlayOutline className='text-lg md:text-xl font-bold'/></div>
</div>
<div className='flex flex-row justify-center items-center mx-1'>
<div className='mx-2 border-2 border-gray-500 rounded-3xl bg-slate-400 p-2'><GrChapterNext className='text-lg md:text-xl font-bold'/></div>
</div>
</div>

<div className='flex justify-start items-center border-2 border-gray-500 w-32 h-4'>
  <div className='bg-gray-500 h-4 w-20'></div>
</div>

<div className='flex justify-center items-center mx-1'>  00:00 / 00:00</div>

</div>

<div className='flex flex-row border-2 border-gray-600 w-full md:justify-start py-2 justify-center items-center'>
<div className='mx-2 flex flex-row items-center'>
  <div className='mx-1'><GiAnticlockwiseRotation className='text-xl font-bold'/></div>
  <div className='mx-1'><GiClockwiseRotation className='text-xl font-bold'/></div>
  <div className='mx-1'><GrCut className='text-xl font-bold'/></div>
  <div className='mx-1'><MdOutlineContentCopy className='text-xl font-bold'/></div>
  <div className='mx-1'><FaCopy className='text-xl font-bold'/></div>
  <div className='mx-1'><BsLayoutSplit className='text-xl font-bold'/></div>
</div>
<div className='mx-2 flex flex-row items-center'>
<div className='mx-1'><MdOutlineZoomOut className='text-xl font-bold'/></div>
<div className='flex justify-start items-center border-2 border-gray-500 w-32 h-4'>
  <div className='bg-gray-500 h-4 w-20'></div>
</div>
<div className='mx-1'><AiOutlineZoomIn className='text-xl font-bold'/></div>
</div>
</div>

<div className='border-2 border-gray-600 flex flex-col justify-start items-center w-full'>

<div className='flex flex-row justify-start w-full'>
  <div className='flex w-24 h-20 border-2 border-red-500 relative justify-start items-center'>
<div className='text-lg font-bold'>Track 2</div>
<div className='absolute top-1 right-1'><FaEye /></div>
<div className='absolute bottom-1 right-1'><FaLockOpen /></div>
  </div>
  <div className='border-2 border-gray-600 w-full h-20 bg-gray-400'></div>
</div>

<div className='flex flex-row justify-start w-full'>
  <div className='flex w-24 h-20 border-2 border-red-500 relative justify-start items-center'>
<div className='text-lg font-bold'>Track 1</div>
<div className='absolute top-1 right-1'><FaEye /></div>
<div className='absolute bottom-1 right-1'><FaLockOpen /></div>
  </div>
  <div className='border-2 border-gray-600 w-full h-20 bg-gray-400'></div>
</div>

</div>

</div>

    </div>
  )
}

export default Editor;