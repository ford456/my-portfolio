
const ProgressBar = ({ progress,
  className="",
  FontZise="",
  level=""

 }) => {
  return (
    <div className={` bg-gray-200 rounded-full ${className} overflow-hidden`}>
      <div
        className={` relative  bg-blue-500 h-full  flex items-center justify-center transition-all duration-300`}
        style={{ width: `${progress}%` }}
      >
        {/*${progress <= 'medium'? "text-black":"text-white" }*/}
      </div>
      <div className={`${progress <= 50? "text-black":"text-black sm:text-white" } ${FontZise} absolute top-8.25 lg:top-2/3 2xl:top-10 left-1/5 2xl:left-1/5 z-10`}>
          {level}
          </div>
    </div>
  );
};

export default ProgressBar;
