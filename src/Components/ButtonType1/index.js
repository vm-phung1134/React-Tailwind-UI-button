function ButtonType1() {
  return (
    <>
      <button
        className="
        bg-gradient-to-r 
        from-zinc-700 
        to-red-500
        py-4 px-8
        mx-5
        text-white
        hover:from-red-500
        hover:to-zinc-700
        "
      >
        BUTTON 1
      </button>
      {/* --------------button 2------------- */}
      <button 
        className="
            py-4 px-8
            mx-5
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
        {/* --------------button 3------------- */}
        <button
         className="
            my-[20px]
            mx-5
            py-4 px-8
            bg-zinc-500
            text-white
            rounded-full
            shadow-[10px_15px_30px_5px_rgba(0,0,0,0.5)]
         "
        >
            BUTTON 3
        </button>
        {/* --------------button 4------------- */}
        <button 
         className="
            mx-5
            my-[20px]
            py-4 px-8
            bg-transparent
            relative
            outline-0
            border-x-[3px] border-blue-500
            group
         "
        >
            <span 
             className="
                absolute
                top-0
                right-0
                bg-blue-500
                h-[3px]
                w-[0%]
                group-hover:w-[100%]
                group-hover:ease-in
                group-hover:duration-500
             "
            >  
            </span>
            <span 
             className="
                absolute
                bottom-0
                left-0
                bg-blue-500
                h-[3px]
                w-[0%]
                group-hover:w-[100%]
                group-hover:ease-in
                group-hover:duration-500
             "
            >  
            </span>
            EM NHỚ ANH
        </button>
    </>
  );
}
export default ButtonType1;
