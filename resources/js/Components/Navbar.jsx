import React, { useState } from "react";
import { 
    HomeIcon,
    ShoppingBagIcon,
    MagnifyingGlassIcon,
    UserIcon // Import ikon user
} from '@heroicons/react/24/outline';
import Cart from "./Dashboard/Cart";

export default function Navbar() {
    const [isCartVisible, setIsCartVisible] = useState(false);

    const toggleCartVisible = () => {
        setIsCartVisible(!isCartVisible);
    };

    const toggleShop = () => {
        window.location.href="/shop";
    };

    const navigateToShop = () => {
        window.location.href = "/shop";
    };

    const navigateToLogin = () => {
        window.location.href = "/sign-in";
    };

    const navigateToAccount = () => { // Fungsi untuk navigasi ke akun
        window.location.href = "/account"; // Ganti '/account' sesuai dengan route yang diinginkan
    };

    const navigateToVirtual = () => {
        window.location.href = "/virtual-room";
    };

    const navigateToHome = () => {
        window.location.href = "/";
    };

    const isHome = window.location.pathname === "/";

    return (
        <nav className="navbar w-screen h-20 flex justify-between items-center text-black fixed z-50 bg-transparent top-0 left-0">
            <div className="flex items-center px-9">
                <img 
                    src={isHome ? "img/logo-white.png" : "img/logo.png"} 
                    alt="Logo" 
                    className="h-12 w-12 object-contain" 
                />
            </div>
            
            <div className={`flex-grow flex px-5 ${isHome ? 'text-white' : 'text-[#0d0d12]'}`}>
                <ul className="flex space-x-8">
                    <div className={`flex items-center gap-2 text-xl font-medium font-['Inter Tight'] leading-7 tracking-wide ${isHome ? 'text-white' : 'text-[#0d0d12]'}`}>
                        <span role="button" onClick={navigateToHome}>Home</span>
                    </div>
                    <div className={`flex items-center gap-2 text-xl font-medium font-['Inter Tight'] leading-7 tracking-wide ${isHome ? 'text-white' : 'text-[#0d0d12]'}`}>
                        <span role="button" onClick={navigateToVirtual}>Virtual Fitting Room</span>
                    </div>
                    <div className={`flex items-center gap-2 text-xl font-medium font-['Inter Tight'] leading-7 tracking-wide ${isHome ? 'text-white' : 'text-[#0d0d12]'}`}>
                        <span role="button" onClick={toggleShop}>Shop</span>
                    </div>
                </ul>
            </div>

            <div className="h-[47px] flex justify-start items-center gap-8 pr-16">
                <div className={`flex items-center gap-2 ${isHome ? 'text-white' : 'text-[#0d0d12]'}`}>
                    <MagnifyingGlassIcon className="w-5 h-5" />
                    <div className={`text-[#0d0d12] text-lg font-medium font-['Inter Tight'] leading-7 tracking-wide pr-8 ${isHome ? 'text-white' : 'text-[#0d0d12]'}`}>
                        <span>Search</span>
                    </div>
                </div>
                <div className={`flex items-center gap-2 ${isHome ? 'text-white' : 'text-[#0d0d12]'}`}>
                    <ShoppingBagIcon className="w-5 h-5" />
                    <div className={`text-[#0d0d12] text-lg font-medium font-['Inter Tight'] leading-7 tracking-wide pr-8 ${isHome ? 'text-white' : 'text-[#0d0d12]'}`}>
                        <span role="button" onClick={toggleCartVisible}>
                            Cart
                        </span> (0)
                    </div>
                </div>
                <div className={`flex items-center ${isHome ? '' : 'gap-1'} ${isHome ? 'text-white' : 'text-[#0d0d12]'}`}>
                    {!isHome && (
                        <>
                            <UserIcon className="w-5 h-5" /> {/* Menambahkan ikon user hanya ketika isHome false */}
                        </>
                    )}
                    <span 
                        role="button" 
                        onClick={isHome ? navigateToLogin : navigateToAccount} // Mengubah navigasi tergantung isHome
                        className={`text-lg font-medium font-['Inter Tight'] leading-[27px] tracking-wide ${isHome ? 'text-white' : 'text-[#0d0d12]'}`}
                    >
                        {isHome ? "Login" : "Wahyu"} {/* Mengganti "Login" dengan "Wahyu" */}
                    </span>
                </div>
            </div>

            <Cart isCartVisible={isCartVisible} CartOnClose={toggleCartVisible} />
        </nav>
    );
}
