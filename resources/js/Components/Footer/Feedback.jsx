import Comment from "./Comment";

export default function Feedback() {
    return (
        <div className="container mx-auto px-4 py-8">
            {/* Customer Feedback */}
            <div className="text-center mb-4">
                <h1 className="text-3xl mb-2">Our Happy Customers</h1>
                <p>Hear from our satisfied customers</p>
            </div>
            <div className="flex gap-4 overflow-x-auto bg-white py-4 px-2">
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </div>
        </div>
    );
}
