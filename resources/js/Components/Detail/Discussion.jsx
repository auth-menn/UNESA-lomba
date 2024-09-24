export default function Discussion() {
    return (
      <div className="w-full mt-8 p-12">
        <div className="border-black border-1">
            {/* Example Comments */}
            <div className="space-y-4 p-6 border border-gray-300">
            <div>
                <p className="text-sm font-semibold">Joshua Martin <span className="text-xs text-gray-400">2h ago</span></p>
                <p className="text-gray-400">
                I love shopping here! The collections are always up-to-date with the latest trends. 
                The fabric quality is fantastic, and the customer service is top-notch. Definitely my go-to fashion store!
                </p>
            </div>
    
            <div>
                <p className="text-sm font-semibold">Steve Jobs <span className="text-xs text-gray-400">5h ago</span></p>
                <p className="text-gray-400">
                Absolutely love the collection! The colors are beautiful, but I had an issue with sizing. 
                I ordered a medium, but it feels more like a small. The return process was a bit slow too. 
                Overall, I’m happy with the designs though!
                </p>
            </div>
            </div>
        </div>
        <div className="mt-8">
       <textarea
           className="w-full p-4 bg-white text-black "
           rows="4"
           placeholder="Write your message"
       ></textarea>
       <button className="mt-4 bg-black text-white py-2 px-6 shadow-lg hover:bg-gray-800 transition-all">
           Start Discussion
           
       </button>
       
   </div>
      </div>
    );
  }
  