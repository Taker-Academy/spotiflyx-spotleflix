import { ComponentPropsWithoutRef } from "react";

export const CloseLogo = (
    props: ComponentPropsWithoutRef<"svg"> & {size?: number}
) => {
    return (
        <svg 
            version="1.0" 
         
            width={props.size}
            height={props.size}
            viewBox="0 0 512.000000 512.000000" 
            preserveAspectRatio="xMidYMid meet"
        >
        
            <g 
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="#FFFFFF" stroke="none"
            >
                <path 
                    d="M1217 4086 c-154 -42 -232 -206 -168 -351 18 -41 120 -148 584 -612
                    l562 -563 -562 -562 c-614 -615 -606 -606 -606 -719 0 -141 111 -252 253 -252
                    112 0 104 -7 718 606 l562 562 563 -562 c614 -614 605 -606 718 -606 141 0
                    252 111 252 253 0 112 7 104 -606 718 l-562 562 562 563 c613 613 606 605 606
                    717 0 142 -111 253 -252 253 -113 0 -104 8 -718 -606 l-563 -562 -562 562
                    c-589 588 -594 593 -693 607 -22 3 -62 -1 -88 -8z"
                />
            </g>
        </svg>
    );
};
