import React,{ useCallback, useEffect, useRef, useState } from "react";
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
import './Editor.css'
import Video from './Videoplayer.mp4';
import { IconContext } from "react-icons";
import { BiPlay, BiSkipNext, BiSkipPrevious, BiPause } from "react-icons/bi";
import { FaPlay,FaPause} from "react-icons/fa";
import { VideoSeekSlider } from "react-video-seek-slider";
import "react-video-seek-slider/styles.css"
import 'flowbite';

const Editor = () => {

  const player = useRef(null);
  const previewImage = useRef("");
  const interval = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [maxTime, setMaxTime] = useState(0);
  const [isplaying,setIsplaying]=useState(false);

  const handleTimeChange = useCallback((time, offsetTime) => {
    if (!player.current?.currentTime) {
      return;
    }

    player.current.currentTime = time / 1000;
    setCurrentTime(time);

    console.log({ time, offsetTime });
    console.log(player);
  }, []);

  const handlePlay = () => {
    setIsplaying(true);
    interval.current = setInterval(() => {
      setCurrentTime((player.current?.currentTime || 0) * 1000);
    }, 1000);
  };

  const handlePause = () => {
    setIsplaying(false);
    clearInterval(interval.current);
  };

  const handleDataLoaded = () => {
    setMaxTime((player.current?.duration || 0) * 1000);
  };

  const handleProgress = () => {
    const buffer = player?.current?.buffered;

    if (((buffer?.length > 0 && player.current?.duration) || 0) > 0) {
      let currentBuffer = 0;
      const inSeconds = player.current?.currentTime || 0;

      for (let i = 0; i < buffer.length; i++) {
        if (buffer.start(i) <= inSeconds && inSeconds <= buffer.end(i)) {
          currentBuffer = i;
          break;
        }
      }

      setProgress(buffer.end(currentBuffer) * 1000 || 0);
    }
  };

  // const updatePreviewImage = (hoverTime) => {
  //   const url = `https://via.placeholder.com/140x60?text=${hoverTime}`;
  //   const image = document.createElement("img");
  //   image.src = url;

  //   image.onload = () => {
  //     previewImage.current = url;
  //   };
  // };


 

  useEffect(() => {
    if (!player) {
      return;
    }
    player.current?.addEventListener("play", handlePlay);
    player.current?.addEventListener("pause", handlePause);
    player.current?.addEventListener("loadeddata", handleDataLoaded);
    player.current?.addEventListener("progress", handleProgress);
  }, [player]);
  

  const handleplayVideo = () => {
    if (isplaying) {
      player.current.pause();
      setIsplaying(false);
    } else {
      player.current.play();
      setIsplaying(true);
    }
  };


  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds/10000);
    const seconds = Math.floor(timeInSeconds/1000);
    console.log(minutes,seconds)
    return `${minutes}:${seconds < 60 ? '0' : ''}${seconds}`;
  };
  
  const formatTimeMAx = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds/1000000);
    const seconds = Math.floor(timeInSeconds/100);
    console.log(minutes,seconds)
    return `${minutes}:${seconds < 60 ? '0' : ''}${seconds}`;
  };
  
  const [sliderValue, setSliderValue] = useState(25);

  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

  return (
    <div className='w-screen h-screen bg-slate-300 flex justify-start overflow-y-scroll md:overflow-hidden  flex-col'>

<div  className='flex flex-col sm:flex-row w-full  md:h-3/5 overflow-y-scroll md:overflow-hidden editor-container' >
<div className='p-2 overflow-y-scroll md:overflow-hidden h-3/5  md:h-full relative assets-section' >
   <div className='sm:text-xl font-bold my-2 flex justify-center'>Assets</div>
   <div className='flex flex-col justify-center w-full'>
   <div className="flex flex-row-2 w-full justify-center">
    
   <div className='flex justify-center flex-col'>
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

<div className='py-2 px-2 flex flex-col h-full md:h-full main-content'>
<div className='flex flex-row justify-center items-center my-1'>
    <div className='mx-1'> <FaHandPaper className='text-xl'/></div>
    <div className='mx-1'><TbFrame className='text-xl'/></div>
    <div className='mx-1'><TbAdjustmentsDown className='text-xl'/></div>
    </div>
<div className='flex justify-center items-center border-2 border-gray-900 h-4/5 md:h-full w-full mt-1'>
<div className="w-full h-full border-2 flex justify-center items-center">
<video 
controls 
style={{ width: `${sliderValue}%` }} 
  className="videoPlayer"
   ref={player}
 src={Video}
 ></video>
 </div>
</div>
</div>

<div className='properties-section border-2 border-gray-700 flex flex-col max-h-fit md:h-full w-full lg:w-2/4 overflow-y-scroll md:overflow-hidden'>

<div className='py-4 px-2 flex flex-row justify-end items-center border-b-2 border-gray-700'>
    <div className='mx-4'><FaUpload className='text-xl' /></div>
    <div className='mr-6 text-xl font-bold rounded-sm border-2 border-gray-500 shadow-md bg-slate-200 px-2 py-1'>Export</div>
    
    </div>
    
<div className='flex flex-col'> 
    <div className='flex justify-center items-center text-lg font-bold'>Properties</div>
<div className='flex flex-col justify-end  pr-4 w-full'>

    <div className='w-full flex flex-row justify-end items-center my-1 mx-1'>
      <div>{sliderValue ==25 ? 'Change Scale' : ''}</div>
    <div className='text-lg font-bold'>Video Scale</div>
        <div className='mx-2 w-fit '>  <Range_Slider onSliderChange={handleSliderChange} /></div>
    <div className='mx-1 text-md font-bold rounded-sm border-2 border-gray-500 bg-slate-200 px-1 py-1'>{sliderValue}%</div>
    </div>

    <div className='w-full flex flex-row justify-end items-center my-1 mx-1'>
    <div className='text-lg font-bold'>Opacity</div>
        <div className='mx-2 w-fit '>  <Range_Slider onSliderChange={handleSliderChange} /></div>
    <div className='mx-1 text-md font-bold rounded-sm border-2 border-gray-500 bg-slate-200 px-1 py-1'>100%</div>
    </div>
<div className='flex flex-col md:flex-row'>
  
    <div className='w-full flex flex-row justify-end items-center my-2 mx-1 relative'>
    <div className='text-md font-bold flex absolute top-0 right-28'>Rotation</div>
    <div className='flex flex-col md:ml-10'>

      <div className='flex flex-row items-center mb-2'>
        <div className='mx-2 '><GiClockwiseRotation className='text-lg font-bold'/></div>
        <div className='text-m font-bold mx-1'>Z</div>
        <div className='ml-2 text-md font-bold rounded-sm border-2 border-gray-500 bg-slate-200 px-2 py-1'>0.0</div>
      </div>

      <div className='flex flex-row items-center my-2'>
        <div className='mx-2 '><GiClockwiseRotation className='text-lg font-bold'/></div>
        <div className='text-md font-bold mx-1'>Y</div>
        <div className='ml-2 text-md font-bold rounded-sm border-2 border-gray-500 bg-slate-200 px-2 py-1'>0.0</div>
      </div>

      <div className='flex flex-row items-center my-2'>
        <div className='mx-2 '><GiClockwiseRotation className='text-lg font-bold'/></div>
        <div className='text-md font-bold mx-1'>X</div>
        <div className='ml-2 text-md font-bold rounded-sm border-2 border-gray-500 bg-slate-200 px-2 py-1'>0.0</div>
      </div>

    </div>
    </div>
    <div className='w-full flex flex-row justify-end items-center my-2 mx-1 relative'>
    <div className='text-md font-bold flex absolute top-0 right-28'>Position</div>
    <div className='flex flex-col md:ml-10'>

      <div className='flex flex-row items-center mb-2'>
       
        <div className='text-md font-bold mx-1'>X</div>
        <div className='ml-2 text-md font-bold rounded-sm border-2 border-gray-500 bg-slate-200 px-2 py-1'>0.0</div>
      </div>

      <div className='flex flex-row items-center my-2'>
       
        <div className='text-md font-bold mx-1'>Y</div>
        <div className='ml-2 text-md font-bold rounded-sm border-2 border-gray-500 bg-slate-200 px-2 py-1'>0.0</div>
      </div>

      <div className='flex flex-row items-center my-2'>
       
        <div className='text-md font-bold mx-1'>Z</div>
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

{currentTime == 0 ? 'Click Here' : ''}

{isplaying ? (
              <button className="controlButton" onClick={handleplayVideo}>
              <div className='mx-2 border-2 border-gray-500 rounded-3xl bg-slate-400 p-2'><FaPause className='text-lg md:text-xl font-bold'/></div>
              </button>
            ) : (
              <button className="controlButton" onClick={handleplayVideo}>
             <div className='mx-2 border-2 border-gray-500 rounded-3xl bg-slate-400 p-2'><FaPlay className='text-lg md:text-xl font-bold'/></div>
              </button>
            )}

</div>

<div className='flex flex-row justify-center items-center mx-1'>
<div className='mx-2 border-2 border-gray-500 rounded-3xl bg-slate-400 p-2'><GrChapterNext className='text-lg md:text-xl font-bold'/></div>
</div>
</div>

<div className='flex justify-start items-center border-2 border-gray-500 w-48 h-4'>
  <div className='bg-gray-500 h-4' style={{ width: `${(currentTime / maxTime) * 100}%` }}></div>
</div>

<div className='flex justify-center items-center mx-1'>  
{/* {currentTime}/{maxTime} */}
{formatTime(currentTime)} / {formatTimeMAx(maxTime)}
</div>

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
<div className='mx-1 cursor-pointer' onClick={()=>setSliderValue(sliderValue-1)}><MdOutlineZoomOut className='text-xl font-bold'/></div>
<div className='flex justify-start items-center border-2 border-gray-500 w-32 h-4'>
  <div className='bg-gray-500 h-4' style={{ width: `${sliderValue}%` }}></div>
</div>
<div className='mx-1 cursor-pointer' onClick={()=>setSliderValue(sliderValue+1)}><AiOutlineZoomIn className='text-xl font-bold'/></div>
</div>
</div>

<div className='border-2 border-gray-600 flex flex-col justify-start items-center w-full'>

<div className='flex flex-row justify-start w-full'>
  <div className='flex w-24 h-full border-2 border-red-500 relative justify-start items-center'>
<div className='text-lg font-bold'>Track 2</div>
<div className='absolute top-1 right-1'><FaEye /></div>
<div className='absolute bottom-1 right-1'><FaLockOpen /></div>
  </div>
  <div className='border-2 border-gray-600 w-full h-20 bg-gray-400 '>
    
 <div className="text-gray-400">VideoTracker</div>
<div>
      <VideoSeekSlider
        max={maxTime}
        currentTime={currentTime}
        bufferTime={progress}
        onChange={handleTimeChange}
        limitTimeTooltipBySides={true}
        secondsPrefix="00:"
        minutesPrefix="0:"
      />
</div>
{/* <div className="mb-0">Press the Play Button</div> */}

  </div>
</div>

<div className='flex flex-row justify-start w-full'>
  <div className='flex w-24 h-full border-2 border-red-500 relative justify-start items-center'>
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