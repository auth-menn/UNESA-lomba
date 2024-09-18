import { StarIcon } from '@heroicons/react/24/solid';

export default function Product() {
    return (
        <div className="w-full flex flex-col md:flex-row md:px-12 py-8">
            {/* Bagian Kiri: Gambar Produk */}
            <div className="md:w-1/2 w-full p-4">
                <img 
                    src="img/Detail_Product.png" 
                    alt="Jacket" 
                    className="h-auto w-full max-h-96 object-contain rounded-lg shadow-lg mb-4"
                />
                <div className="flex justify-between space-x-2">
                    {[...Array(4)].map((_, index) => (
                        <img 
                            key={index}
                            src="img/Detail_Product.png" 
                            alt={`Thumbnail ${index}`} 
                            className="h-24 w-1/4 object-contain border-2 border-gray-300 rounded-md cursor-pointer hover:border-white transition-all"
                        />
                    ))}
                </div>
            </div>

            {/* Bagian Kanan: Detail Produk */}
            <div className="md:w-1/2 w-full mt-8 md:mt-0 md:pl-8">
                {/* Flash Sale */}
                <div className="flex justify-between items-center mb-4">
                    <p className="bg-orange-500 text-white px-2 py-1 inline-block max-w-max text-sm">
                        30% OFF
                    </p>
                </div>

                <h2 className="text-3xl font-bold mb-4">Black Fashion Jacket</h2>
                <h3 className="text-4xl font-bold text-red-500 mb-2">IDR 79.000</h3>
                <p className="text-xl font-semibold text-gray-500 mb-4 line-through">IDR 100.000</p>

                {/* Rating */}
                <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, index) => (
                        <StarIcon key={index} className='h-5 w-5 text-yellow-500' />
                    ))}
                    <p className='text-white font-semibold ml-2'>(5,0) 800 Reviews</p>
                </div>

                <div className="relative flex">
                <img 
                    src="img/FlashSale_Detail.png" 
                    alt="Logo" 
                    className="w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 flex items-center p-8">
                <img 
                    src="img/FlashSale.png" 
                    alt="Logo" 
                    className="w-24 h-12 object-cover"
                />
                    <div className="text-center">
                        <div className="mb-5 text-xl text-white font-bold p-4">
                            <h1>Bridging the physical and digital Style worlds</h1>
                        </div>
                    </div>
                    </div>
                    </div>


                {/* Deskripsi Produk */}
                <h1>Description</h1>
                <p className="text-gray-400 mb-6 leading-relaxed">
                    Find everything you need to look and feel your best, shop the latest fashion and lifestyle products. 
                    This jacket is crafted with premium materials for comfort and style. Suitable for every occasion, 
                    it brings you both functionality and fashion.
                </p>

                <div className='flex gap-12'>
                    {/* Available Colors */}
                    <div className="flex items-center mb-6">
                        <p className="text-gray-400 mr-4">Available Colors:</p>
                        <div className="flex space-x-2">
                            <div className="w-6 h-6 bg-gray-800 border border-white"></div>
                            <div className="w-6 h-6 bg-green-500 border border-white"></div>
                            <div className="w-6 h-6 bg-blue-500 border border-white"></div>
                            <div className="w-6 h-6 bg-gray-400 border border-white"></div>
                        </div>
                    </div>

                    {/* Available Sizes */}
                    <div className="flex items-center mb-6">
                        <p className="text-gray-400 mr-4">Available Size:</p>
                        <div className="flex space-x-2">
                            <div className="px-4 py-2 border border-gray-400 text-gray-400">S</div>
                            <div className="px-4 py-2 border border-gray-400 text-gray-400">M</div>
                            <div className="px-4 py-2 border border-gray-400 text-white bg-gray-600">L</div>
                            <div className="px-4 py-2 border border-gray-400 text-gray-400">XL</div>
                        </div>
                    </div>
                </div>

                {/* Quantity & Add to Cart */}
                <div className="flex items-center mb-6">
                    <p className="text-gray-400 mr-4">Quantity:</p>
                    <button className='border-black'>-</button>
                    <input type="text" className="w-12 items-center justify-center text-center border-none bg-white text-black" placeholder="1" />
                    <button>+</button>
                    <button className="bg-black text-white py-2 px-4 ml-4 border border-black hover:bg-gray-800 transition-all">
                        Add to Cart
                    </button>
                </div>

                {/* Share Section */}
                <div className="flex items-center space-x-4">
                    <p className="text-gray-400">Share:</p>
                    <div className="flex space-x-2 justify-center items-center text-center ">
                        <button className="flex justify-center items-center p-0 border-none bg-transparent">
                            <img 
                                src="img/Tiktok.png" 
                                alt="Tiktok" 
                                className="h-auto w-auto max-h-96 object-contain rounded-lg shadow-lg"
                            />
                        </button>
                        <button className="flex justify-center items-center p-0 border-none bg-transparent">
                            <img 
                                src="img/Facebook.png" 
                                alt="Facebook" 
                                className="h-auto w-auto max-h-96 object-contain rounded-lg shadow-lg"
                            />
                        </button>
                        <button className="flex justify-center items-center p-0 border-none bg-transparent">
                            <img 
                                src="img/Instagram.png" 
                                alt="Instagram" 
                                className="h-auto w-auto max-h-96 object-contain rounded-lg shadow-lg"
                            />
                        </button>
                    </div>

                </div>
                {/* Tombol */}
                <div className="flex items-center space-x-4 mt-6">
                    <button className="bg-white text-black py-2 px-6 border border-black hover:bg-gray-800 transition-all">
                        Try On
                    </button>
                    <button className="bg-black text-white w-80 py-2 px-6 transition-all">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
}
