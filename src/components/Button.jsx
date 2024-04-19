import React from "react";
export function Button({ active, ...props }){
    return(
        <button 
        data-testid='botao'
        type="submit" 
        className={`
        ${active ? "bg-primary text-white" : "bg-white text-primary"} 
        font-[500] flex items-center justify-center break-words min-w-[290px] 
        max-w-[290px] h-[80px] px-[45px] mx-[7px] 
        border-solid border border-[#1E3954] rounded-full 
        hover:text-white hover:bg-primary hover:border-secondary transition-all 
        duration-500 ease-in-out
        `}
        {...props}
        >
            {props.children}
        </button>
    )
}

