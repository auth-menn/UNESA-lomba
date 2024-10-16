import { useState } from 'react';
import { FaHeart, FaReply } from 'react-icons/fa'; // Mengimpor ikon dari react-icons

export default function Discussion() {
    const [showReplies, setShowReplies] = useState(false);

    const handleToggleReplies = () => {
        setShowReplies(!showReplies);
    };

    return (
        <div className="w-full mt-8 p-8 bg-white border border-gray-200 rounded-md shadow-sm">
            {/* Komentar utama */}
            <div className="space-y-6">
                <div className="border-b pb-4">
                    <div>
                    <div className='flex'>
                                <div className='mr-3'>
                                    <img
                                        src="img/steve.png"
                                        alt="Steve Jobs Avatar"
                                        className="h-8 w-8 rounded-full"
                                    />
                                    </div>
                                    <div>
                                    <p className="text-sm font-semibold">
                                        Joshua Martin 
                                    </p>
                                    <p className="text-xs text-gray-400">2h ago</p>
                                    </div>
                                </div>
                        <p className="text-gray-600 mt-2">
                            I love shopping here! The collections are always up-to-date with the latest trends.
                            The fabric quality is fantastic, and the customer service is top-notch. Definitely my go-to fashion store!
                        </p>
                    </div>
                    <div className="flex items-center mt-3 space-x-4 text-sm text-gray-500">
                        <button className="flex items-center text-red-500">
                            <FaHeart className="h-5 w-5 mr-1" />
                            (3) Like
                        </button>
                        <button className="flex items-center hover:text-blue-500">
                            <FaReply className="h-5 w-5 mr-1" />
                            Reply
                        </button>
                    </div>
                </div>

                {/* Komentar kedua dengan balasan */}
                <div className="border-b pb-4">
                    <div>
                    <div className='flex'>
                                <div className='mr-3'>
                                    <img
                                        src="img/steve.png"
                                        alt="Steve Jobs Avatar"
                                        className="h-8 w-8 rounded-full"
                                    />
                                    </div>
                                    <div>
                                    <p className="text-sm font-semibold">
                                        Joshua Martin 
                                    </p>
                                    <p className="text-xs text-gray-400">2h ago</p>
                                    </div>
                                </div>
                        <p className="text-gray-600 mt-2">
                            Absolutely love the collection! The colors are beautiful, but I had an issue with sizing. 
                            I ordered a medium, but it feels more like a small. The return process was a bit slow too. 
                            Overall, I’m happy with the designs though!
                        </p>
                    </div>
                    <div className="flex items-center mt-3 space-x-4 text-sm text-gray-500">
                        <button className="flex items-center hover:text-red-500">
                            <FaHeart className="h-5 w-5 mr-1" />
                            (1) Like
                        </button>
                        <button className="flex items-center hover:text-blue-500" onClick={handleToggleReplies}>
                            <FaReply className="h-5 w-5 mr-1" />
                            Reply
                        </button>
                        <button className="text-xs text-gray-400 hover:text-gray-600" onClick={handleToggleReplies}>
                            {showReplies ? 'Hide Replies' : 'Show Replies'}
                        </button>
                    </div>

                    {/* Balasan komentar */}
                    {showReplies && (
                        <div className="ml-6 mt-4 space-y-4 border-l pl-4 border-gray-300">
                            <div>
                                <div className="flex items-start space-x-2">
                                    <img
                                        src="img/steve.png"
                                        alt="Admin Avatar"
                                        className="h-8 w-8 rounded-full"
                                    />
                                    <div>
                                        <p className="text-sm font-semibold">
                                            Admin <span className="text-xs text-gray-400">1h ago</span>
                                        </p>
                                        <p className="text-gray-600 mt-1">
                                            Hi Steve, thank you for your feedback! We're glad you loved the designs. Apologies for the sizing issue. 
                                            We're working on improving the return process and will ensure better sizing accuracy in the future. 
                                            Feel free to contact us if you need further assistance.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center mt-3 space-x-4 text-sm text-gray-500">
                                    <button className="flex items-center hover:text-red-500">
                                        <FaHeart className="h-5 w-5 mr-1" />
                                        (1) Like
                                    </button>
                                    <button className="flex items-center hover:text-blue-500">
                                        <FaReply className="h-5 w-5 mr-1" />
                                        Reply
                                    </button>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-start space-x-2">
                                    <img
                                        src="img/steve.png"
                                        alt="Steve Jobs Avatar"
                                        className="h-8 w-8 rounded-full"
                                    />
                                    <div>
                                        <p className="text-sm font-semibold">
                                            Steve Jobs <span className="text-xs text-gray-400">5h ago</span>
                                        </p>
                                        <p className="text-gray-600 mt-1">
                                            Thank you!
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center mt-3 space-x-4 text-sm text-gray-500">
                                    <button className="flex items-center hover:text-red-500">
                                        <FaHeart className="h-5 w-5 mr-1" />
                                        (1) Like
                                    </button>
                                    <button className="flex items-center hover:text-blue-500">
                                        <FaReply className="h-5 w-5 mr-1" />
                                        Reply
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Bagian input diskusi baru */}
            <div className="mt-8">
                <textarea
                    className="w-full p-4 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                    rows="4"
                    placeholder="Write your message"
                ></textarea>
                <button className="mt-4 bg-black text-white py-2 px-6 shadow-lg hover:bg-gray-800 transition-all rounded-md focus:outline-none">
                    Start Discussion
                </button>
            </div>
        </div>
    );
}
