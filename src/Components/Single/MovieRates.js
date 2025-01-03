import React, { useState } from "react";
import { BsBookmarkStarFill, BsSortDown, BsSortUp } from "react-icons/bs";
import Titles from "../Titles";
import { Select } from "../UsedInputs";
import Rating from "../Stars";
import { Message } from "../UsedInputs";

const UserData = [
    {
        id: 1,
        fullName: "John Doe",
        image: "/images/movies/img_1.png",
        message: "Incredible storytelling with amazing visual effects. The character development was outstanding throughout the film.",
        rate: 4,
        date: "2024-01-15",
        likes: 45,
        verified: true
    },
    {
        id: 2,
        fullName: "Sarah Wilson",
        image: "/images/movies/img_1.png",
        message: "A masterpiece that keeps you on the edge of your seat. The cinematography is breathtaking.",
        rate: 5,
        date: "2024-01-12",
        likes: 38,
        verified: true
    },
    {
        id: 3,
        fullName: "Mike Chen",
        image: "/images/movies/img_1.png",
        message: "Good movie overall, but the pacing could have been better in the middle section.",
        rate: 3,
        date: "2024-01-10",
        likes: 12,
        verified: false
    },
    // ... previous users ...
    {
        id: 9,
        fullName: "Sophie Anderson",
        image: "/images/movies/img_1.png",
        message: "The director's vision really shines through. Every scene feels purposeful and beautifully crafted.",
        rate: 5,
        date: "2023-12-28",
        likes: 67,
        verified: true
    },
    {
        id: 10,
        fullName: "Robert Martinez",
        image: "/images/movies/img_1.png",
        message: "An emotional rollercoaster that delivers on all fronts. The ending was particularly powerful.",
        rate: 4,
        date: "2023-12-25",
        likes: 29,
        verified: true
    }
];

function MovieRates({ movie, isLoading }) {
    const [rating, setRating] = useState(0);
    const [message, setMessage] = useState("");
    const [sortBy, setSortBy] = useState("date");
    const [sortOrder, setSortOrder] = useState("desc");
    const [filter, setFilter] = useState("all");

    const Ratings = [
        { title: "0 - Poor", value: 0 },
        { title: "1 - Fair", value: 1 },
        { title: "2 - Good", value: 2 },
        { title: "3 - Very Good", value: 3 },
        { title: "4 - Excellent", value: 4 },
        { title: "5 - Masterpiece", value: 5 }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!rating || !message.trim()) {
            alert("Please provide both rating and review");
            return;
        }
        // Handle review submission
    };

    const getSortedReviews = () => {
        let reviews = [...UserData];
        if (filter !== "all") {
            reviews = reviews.filter(review =>
                filter === "verified" ? review.verified : review.rate >= 4
            );
        }

        return reviews.sort((a, b) => {
            const order = sortOrder === "desc" ? -1 : 1;
            switch (sortBy) {
                case "rating":
                    return (a.rate - b.rate) * order;
                case "likes":
                    return (a.likes - b.likes) * order;
                default:
                    return (new Date(a.date) - new Date(b.date)) * order;
            }
        });
    };

    if (isLoading) {
        return <div className="animate-pulse">Loading reviews...</div>;
    }

    return (
        <div className="my-12">
            <Titles title="Reviews" Icon={BsBookmarkStarFill} />
            <div className="mt-10 xl:grid flex-colo grid-cols-5 gap-12 bg-dry xs:p-10 py-10">
                <div className="xl:col-span-2 w-full flex flex-col gap-8">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                        <h3 className="text-xl text-text font-semibold">
                            Review "{movie?.name}"
                        </h3>
                        <Select
                            label="Select Rating"
                            options={Ratings}
                            onChange={(e) => setRating(Number(e.target.value))}
                            required
                        />
                        <div className="flex mt-4 text-lg gap-4 text-star">
                            <Rating value={rating} />
                        </div>
                        <Message
                            label="Your Review"
                            placeholder="Share your thoughts..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                        <button
                            type="submit"
                            className="bg-subMain text-white py-3 w-full flex-colo rounded hover:bg-main transition"
                        >
                            Submit Review
                        </button>
                    </form>
                </div>

                <div className="col-span-3 flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl text-text font-semibold">
                            Reviews ({getSortedReviews().length})
                        </h3>
                        <div className="flex gap-4">
                            <Select
                                options={[
                                    { title: "All Reviews", value: "all" },
                                    { title: "Verified Only", value: "verified" },
                                    { title: "Top Rated", value: "top" }
                                ]}
                                onChange={(e) => setFilter(e.target.value)}
                                className="w-40"
                            />
                            <Select
                                label="Sort By"
                                options={[
                                    { title: "Date", value: "date" },
                                    { title: "Rating", value: "rating" },
                                    { title: "Likes", value: "likes" }
                                ]}
                                onChange={(e) => setSortBy(e.target.value)}
                                value={sortBy}
                                className="w-40"
                            />
                            <button
                                onClick={() => setSortOrder(prev => prev === "asc" ? "desc" : "asc")}
                                className="p-2 bg-main rounded"
                                aria-label="Toggle sort order"
                            >
                                {sortOrder === "desc" ? <BsSortDown /> : <BsSortUp />}
                            </button>
                        </div>

                    </div>

                    <div className="w-full flex flex-col bg-main gap-6 rounded-lg md:p-12 p-6 h-header overflow-y-scroll">
                        {getSortedReviews().map((user) => (
                            <div
                                key={user.id}
                                className="md:grid flex flex-col w-full grid-cols-12 gap-6 bg-dry p-4 border border-gray-800 rounded-lg"
                            >
                                <div className="col-span-2 hidden md:block">
                                    <img
                                        src={user.image}
                                        alt={user.fullName}
                                        className="w-full h-24 rounded-lg object-cover"
                                        loading="lazy"
                                    />
                                    {user.verified && (
                                        <span className="text-xs text-subMain mt-2 block">Verified Review</span>
                                    )}
                                </div>
                                <div className="col-span-7 flex flex-col gap-2">
                                    <h2 className="font-medium">{user.fullName}</h2>
                                    <p className="text-xs leading-6 font-medium text-text">
                                        {user.message}
                                    </p>
                                    <div className="flex items-center gap-4 text-xs text-gray-500">
                                        <span>{new Date(user.date).toLocaleDateString()}</span>
                                        <span>·</span>
                                        <span>{user.likes} likes</span>
                                    </div>
                                </div>
                                <div className="col-span-3 flex-rows border-l border-border text-xs gap-1 text-star">
                                    <Rating value={user.rate} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieRates;