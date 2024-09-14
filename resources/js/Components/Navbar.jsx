import React from "react";
import { 
    HomeIcon,
    ShoppingBagIcon,
    MagnifyingGlassIcon,
    BeakerIcon
} from '@heroicons/react/24/outline';

export default function Navbar() {
    return (
        <nav className="navbar w-screen h-20 flex justify-between items-center text-black fixed z-50 bg-white top-0 left-0">
          
            
            <div className="flex items-center px-9">
                <img 
                    src="img/logo.png" 
                    alt="Logo" 
                    className="h-12 w-12 object-contain"/>
            </div>

            
            <div className="flex-grow flex px-5">
                <ul className="flex space-x-8">
                
                    <div className="flex items-center gap-2 text-[#0d0d12] text-xl font-medium font-['Inter Tight'] leading-7 tracking-wide">
                        <span>Home</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#0d0d12] text-xl font-medium font-['Inter Tight'] leading-7 tracking-wide">
                        <span>Virtual Fitting Room</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#0d0d12] text-xl font-medium font-['Inter Tight'] leading-7 tracking-wide">
                        <span>Shop</span>
                    </div>
                </ul>
            </div>

        
            <div className="h-[47px] flex justify-start items-center gap-8 pr-16">
                <div className="flex items-center gap-2">
                    <MagnifyingGlassIcon className="w-5 h-5" />
                    <div className="text-[#0d0d12] text-lg font-medium font-['Inter Tight'] leading-7 tracking-wide pr-8">
                        <span>Search</span>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <ShoppingBagIcon className="w-5 h-5" />
                    <div className="text-[#0d0d12] text-lg font-medium font-['Inter Tight'] leading-7 tracking-wide pr-8">
                        <span>Cart</span> (0)
                    </div>
                </div>
                <div className="px-3 py-1 border border-[#0d0d12] justify-start rounded-sm items-center gap-2.5 flex pr-4">
                    <div className="text-[#0d0d12] text-lg font-medium font-['Inter Tight'] leading-[27px] tracking-wide">
                        <span>Login</span>
                    </div>
                </div>
            </div>
        </nav>
    );
}
