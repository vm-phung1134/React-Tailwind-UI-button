function ButtonType2() {
  return (
    <>
      <button 
        className="
            py-4 px-8
            text-white
            bg-transparent
            border-[2px] border-green-600
            text-green-700
            outline-0
            relative
            before:content[''] 
            before:absolute 
            before:top-0 
            before:left-0 
            before:h-[100%] 
            before:w-[0%]
            before:bg-green-600
            before:z-[-1]
            hover:before:ease-in
            hover:before:duration-500
            hover:before:w-[100%]
            hover:text-white
        ">
            BUTTON 2
        </button>
    </>
  );
}
export default ButtonType2;
