"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image"

const CustomButton = ({ title, containerStyles, textStyles, btnType, handleClick, isDisabled=false }: CustomButtonProps) => {
    return (
        <button
            disabled={isDisabled}
            type={btnType}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            <span className={`flex-1 ${textStyles}`}>{title}</span>
        </button>
    )
}

export default CustomButton