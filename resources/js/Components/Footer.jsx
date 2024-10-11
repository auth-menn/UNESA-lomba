import Comment from "./Footer/Comment";
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function Footer() {
    return (
        <footer className="w-full flex bg-black text-white px-9">
            {/* Footer Content */}
            <div className="flex flex-col md:flex-row justify-between py-8 px-2 w-full">
                {/* Company Info */}
                <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <div className="flex flex-col items-start pr-2 h-18"> 
                <img 
                    src="img/Logo-white.png" 
                    alt="Logo" 
                    className="h-20 w-20 object-contain mb-" />
                <h1 className="text-3xl text-white mb-4">ARQUANA</h1>
            </div>
                    <p className="text-sm mb-4 w-1/2">
                        With Arquana, we empower consumers to explore fashion through innovative digital experiences,
                        bridging style and technology for a seamless shopping journey.
                    </p>
                    <div className="flex gap-5 text-sm">
                        <p className="flex items-center">
                            <PhoneIcon className="w-5 h-5 mr-2" />
                            +628123456778910
                        </p>
                        <p className="flex items-center">
                            <EnvelopeIcon className="w-5 h-5 mr-2" />
                            arquanamail@gmail.com
                        </p>
                    </div>
                </div>

             {/* Collections and Social Media */}
                <div className="w-full md:w-1/4 flex flex-col md:flex-row gap-32 justify-center">
                    <div className="mb-6 md:mb-0">
                        <h1 className="mb-3 font-semibold text-xl">Collection</h1>
                        <div className="space-y-2"> {/* Adjust vertical spacing here */}
                            <p>Jacket</p>
                            <p>Pants & Shorts</p>
                            <p>Shirt</p>
                            <p>Shoes</p>
                            <p>Bags</p>
                            <p>Accessories</p>
                        </div>
                    </div>
                    <div className="">
                        <h1 className="mb-3 font-semibold text-xl">Social</h1>
                        <div className="space-y-2"> {/* Adjust vertical spacing here */}
                            <p>LinkedIn</p>
                            <p>Instagram</p>
                            <p>Facebook</p>
                            <p>TikTok</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
