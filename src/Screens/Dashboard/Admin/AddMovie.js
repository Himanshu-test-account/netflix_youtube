import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Input, Message, Select } from "../../../Components/UsedInputs";
import Uploader from "../../../Components/Uploader";
import { CategoriesData } from "../../../Data/CategoriesData";
import { UserData } from "../../../Data/CategoriesData";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { ImUpload } from "react-icons/im";
import CastModal from "../../../Components/Modals/CastModal";

function AddMovie() {
    const [modalOpen, setModalOpen] = useState(false);
    const [cast, setCast] = useState(null);

    useEffect(() => {
        if (!modalOpen) {
            setCast(null); // Reset the cast when modal closes
        }
    }, [modalOpen]);

    return (
        <Sidebar>
            <CastModal modalOpen={modalOpen} setModalOpen={setModalOpen} cast={cast} />
            <div className="flex flex-col gap-6">
                <h2 className="text-2xl font-bold text-white">Add Movie</h2>
                <div className="w-full grid md:grid-cols-2 gap-6">
                    <Input
                        label="Movie Title"
                        placeholder="Game of Thrones"
                        type="text"
                        bg={true}
                    />
                    <Input label="Hours" placeholder="2hr" type="text" bg={true} />
                </div>

                <div className="w-full grid md:grid-cols-2 gap-6">
                    <Input
                        label="Language Used"
                        placeholder="English"
                        type="text"
                        bg={true}
                    />
                    <Input
                        label="Year of Release"
                        placeholder="2023"
                        type="number"
                        bg={true}
                    />
                </div>

                {/* Images Section */}
                <div className="w-full grid md:grid-cols-2 gap-6">
                    {/* Image without title */}
                    <div className="flex flex-col gap-2">
                        <p className="text-border font-semibold text-sm">
                            Image without Title
                        </p>
                        <Uploader />
                        <div className="w-32 h-42 p-2 bg-main border border-border rounded">
                            <img
                                src="/images/movies/img_3.png"
                                alt="Movie"
                                className="w-full h-full object-cover rounded"
                            />
                        </div>
                    </div>
                    {/* Image with title */}
                    <div className="flex flex-col gap-2">
                        <p className="text-border font-semibold text-sm">
                            Image with Title
                        </p>
                        <Uploader />
                        <div className="w-32 h-42 p-2 bg-main border border-border rounded">
                            <img
                                src="/images/movies/img_10.png"
                                alt="Movie"
                                className="w-full h-full object-cover rounded"
                            />
                        </div>
                    </div>
                    {/* Description */}
                    <Message
                        label="Movie Description"
                        placeholder="Make it short and sweet"
                    />
                    {/* Category */}
                    <div className="text-sm w-full">
                        <Select label="Movie Category" options={CategoriesData} />
                    </div>
                    {/* Music Video */}
                    <div className="flex flex-col gap-2 w-full">
                        <label className="text-border font-semibold text-sm">
                            Music Video
                        </label>
                        <Uploader />
                    </div>

                    {/* Cast Section */}
                    <div className="w-full grid lg:grid-cols-2 gap-6 items-start">
                        <button
                            onClick={() => setModalOpen(true)}
                            className="w-full py-4 bg-main border border-subMain border-dashed text-white rounded"
                        >
                            Add Cast
                        </button>
                    </div>

                    {/* Displaying Cast */}
                    <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-4 grid-cols-2 gap-4">
                        {UserData.map((user, i) => (
                            <div
                                key={i}
                                className="p-2 italic text-xs text-text rounded flex-colo bg-main border border-border"
                            >
                                <img
                                    src={`/images/${user.image ? user.image : ""}`}
                                    alt={user.fullName}
                                    className="w-full h-24 object-cover rounded md-2"
                                />
                                <p>{user.fullName}</p>
                                <div className="flex-rows mt-2 w-full gap-2">
                                    <button className="w-6 h-6 bg-dry border border-border text-subMain rounded">
                                        <MdDelete />
                                    </button>
                                    <button
                                        onClick={() => {
                                            setCast(user);
                                            setModalOpen(true);
                                        }}
                                        className="w-6 h-6 bg-dry border border-border text-green-680 rounded"
                                    >
                                        <FaEdit />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Submit Button */}
                <button className="bg-subMain w-full flex-rows gap-6 font-medium text-white py-4 rounded">
                    <ImUpload /> Publish Movie
                </button>
            </div>
        </Sidebar>
    );
}

export default AddMovie;
