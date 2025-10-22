
const ProgressBar = ({ progress,
  className = "",
  FontZise = "",
  level = ""

}) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <div className={` bg-gray-200 rounded-full ${className} relative overflow-clip`}>
        <div
          className={` static bg-linear-to-r from-blue-900 to-[#62eeff] h-full  flex items-center justify-center transition-all duration-300`}
          style={{ width: `${progress}%` }}
        >
          {/*${progress <= 'medium'? "text-black":"text-white" }*/}
        </div>
        <div className={`${progress <= 50 ? "text-black" : "text-black sm:text-white"} ${FontZise} absolute top-0.5 left-4/12  z-10`}>
          {level}
        </div>
      </div>
      <h6 className={` ${FontZise} w-auto`}>
        {progress}%
      </h6>

    </div>
  );
};

export default ProgressBar;
