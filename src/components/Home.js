import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { HiTemplate } from "react-icons/hi";
import { FaRegFileVideo } from "react-icons/fa6";
import { FaSearch,FaUserCircle,FaArrowRight } from "react-icons/fa";
import { RiScissorsCutLine } from "react-icons/ri";
import { BiSolidVideoRecording } from "react-icons/bi";
import image from './logo.png';
import { Link } from "react-router-dom";
const Home = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
      setSelectedItem(item);
    };
  return (
    <>
<div className='flex justify-start w-full h-screen'>
  <div className='flex flex-col sm:flex-row w-full '>
    {/* Left Side */}
    <div className="bg-slate-100">
      <div className='flex justify-start flex-col px-5 py-5'>
      <div className='flex items-center py-2 cursor-pointer'>
          <img src={image} alt="Logo" className="mx-2 w-8 h-8" />
          <div className='text-left sm:text-lg font-bold' style={{ whiteSpace: 'nowrap' }}>Video Editor</div>
        </div>
        <div className="flex flex-col space-y-1">
 <Link to='/editor'> 
  <div
    className={`flex justify-start items-center py-2 px-1 cursor-pointer bg-slate-300 rounded-md ${selectedItem === 'New Video' ? 'bg-blue-400' : ''} transition-colors duration-300 ease-in-out hover:bg-gray-400 focus:bg-gray-400`}
    onClick={() => handleItemClick('New Video')}
  >
    <div className='ml-4 mr-3 flex items-center'>
      <FaPlus className='sm:text-xl sm:font-bold' />
    </div>
    <div className='text-left sm:text-xl font-bold text-gray-800' style={{ whiteSpace: 'nowrap' }}>New Video</div>
  </div>
  </Link>
  <div
    className={`flex justify-start items-center py-2 px-1 cursor-pointer bg-slate-300 rounded-md ${selectedItem === 'Home' ? 'bg-blue-400' : ''} transition-colors duration-300 ease-in-out hover:bg-gray-400 focus:bg-gray-400`}
    onClick={() => handleItemClick('Home')}
  >
    <div className='ml-4 mr-3'>
      <IoHome className='sm:text-xl sm:font-bold' />
    </div>
    <div className='text-left sm:text-xl font-bold text-gray-800'>Home</div>
  </div>
  <div
    className={`flex justify-start items-center py-2 px-1 cursor-pointer bg-slate-300 rounded-md ${selectedItem === 'Template' ? 'bg-blue-400' : ''} transition-colors duration-300 ease-in-out hover:bg-gray-400 focus:bg-gray-400`}
    onClick={() => handleItemClick('Template')}
  >
    <div className='ml-4 mr-3'>
      <HiTemplate className='sm:text-xl sm:font-bold' />
    </div>
    <div className='text-left sm:text-xl font-bold text-gray-800'>Template</div>
  </div>
  <div
    className={`flex justify-start items-center py-2 px-1 cursor-pointer bg-slate-300 rounded-md ${selectedItem === 'All Videos' ? 'bg-blue-400' : ''} transition-colors duration-300 ease-in-out hover:bg-gray-400 focus:bg-gray-400`}
    onClick={() => handleItemClick('All Videos')}
  >
    <div className='ml-4 mr-3'>
      <FaRegFileVideo className='sm:text-xl sm:font-bold' />
    </div>
    <div className='text-left sm:text-xl font-bold text-gray-800' style={{ whiteSpace: 'nowrap' }}>All Videos</div>
  </div>
</div>

      </div>
    </div>
  
  
    {/* Right Side */}
    <div className="bg-blue-300 w-full">
<div className='flex justify-between items-center flex-row w-full py-6 px-2'>
    <div className="flex items-center  w-11/12">
  <input 
    type="text" 
    placeholder="Search..." 
    className="w-full outline-none px-3 py-1 rounded-2xl"
  />
  <button className="sm:ml-2">
  <FaSearch className='text-gray-900' />
  </button>
</div>
<div className='mr-4'><FaUserCircle className='text-3xl'/></div>
</div>

<div className='flex flex-row justify-between w-full px-3'>
   
    <div className='flex justify-center flex-col md:flex-row'>
    <Link to='/editor'> 
    <div className='my-2 md:my-0 bg-gray-300 flex justify-center items-center mx-3 p-1 border-2 border-gray-900 rounded-md cursor-pointer transition-colors duration-300 ease-in-out hover:bg-gray-400 focus:bg-gray-400'>
  <div><RiScissorsCutLine className='m-1 sm:text-xl'/></div>
  <div className='text-left sm:text-xl font-bold text-gray-800' style={{ whiteSpace: 'nowrap' }}>Create Project</div>
</div>
</Link>
<div className='my-2 md:my-0 bg-gray-300 flex justify-center items-center mx-3 p-1 border-2 border-gray-900 rounded-md cursor-pointer transition-colors duration-300 ease-in-out hover:bg-gray-400 focus:bg-gray-400'>
  <div><BiSolidVideoRecording className='m-1 sm:text-xl'/></div>
  <div className='text-left sm:text-xl font-bold text-gray-800' style={{ whiteSpace: 'nowrap' }}>Record Video</div>
</div>

    </div>
<div className='flex justify-center items-center p-2 mx-1 sm:border-b-2 border-gray-800'><div className='text-left text-md font-bold text-gray-800' style={{ whiteSpace: 'nowrap' }}>View All</div>  <div><FaArrowRight className='m-1 text-md'/></div></div>
</div>
<div className='pl-5 py-3 font-bold sm:text-xl'>Recent Videos</div>
  <div className='w-full mt-2 p-2 pl-2'>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
  {/* Card 1 */}
  <div>
  <div className="bg-slate-200 p-4 rounded-md shadow-sm w-4/5 h-44  cursor-pointer transition-colors duration-300 ease-in-out hover:bg-gray-300 focus:bg-gray-300' ">
    <p className="text-gray-600"></p>
  </div>
  <h2 className="text-xl font-semibold mb-2 my-1">Project 1</h2>
  </div>
  {/* Card 2 */}
  <div>
  <div className="bg-slate-200 p-4 rounded-md shadow-sm w-4/5 h-44  cursor-pointer transition-colors duration-300 ease-in-out hover:bg-gray-300 focus:bg-gray-300'">
    <p className="text-gray-600"></p>
  </div>
  <h2 className="text-xl font-semibold mb-2 my-1">Project 1</h2>
  </div>
  
  {/* Card 3 */}
  <div>
  <div className="bg-slate-200 p-4 rounded-md shadow-sm w-4/5 h-44  cursor-pointer transition-colors duration-300 ease-in-out hover:bg-gray-300 focus:bg-gray-300'">
    <p className="text-gray-600"></p>
  </div>
  <h2 className="text-xl font-semibold mb-2 my-1">Project 1</h2>
  </div>

  {/* Card 3 */}
  {/* <div>
  <div className="bg-slate-200 p-4 rounded-md shadow-sm w-4/5 h-44  cursor-pointer transition-colors duration-300 ease-in-out hover:bg-gray-400 focus:bg-gray-400'">
    <p className="text-gray-600"></p>
  </div>
  <h2 className="text-xl font-semibold mb-2 my-1">Project 4</h2>
  </div> */}

</div>


    </div> 
    </div>
  </div>
</div>


    </>
    )
}

export default Home;