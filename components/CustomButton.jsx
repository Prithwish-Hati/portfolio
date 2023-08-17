"use client";

const CustomButton = ({title, handleClick}) => {
  return (
    <button
      onClick={handleClick}
      className="bg-[#55CDFC] text-white font-semibold mt-4 py-2 px-2 text-base rounded-md absolute top-[450px] md:top-[550px] md:mt-8 md:py-4 md:px-5 md:rounded-2xl md:text-xl"
    
    >
      {title}
    </button>
  )
}

export default CustomButton