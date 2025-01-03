import React, { useState } from "react";
import MainModal from "./MainModal";
import { FaFacebook, FaPinterest, FaTelegram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { EmailShareButton, FacebookShareButton, PinterestShareButton, TelegramShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import { MdEmail } from "react-icons/md";

function ShareMovieModal({ modalOpen, setModalOpen, movie }) {
    const shareData = [
        {
            icon: FaFacebook,
            shareButton: FacebookShareButton
        },
        {
            icon: FaTwitter,
            shareButton: TwitterShareButton
        },
        {
            icon: FaTelegram,
            shareButton: TelegramShareButton
        },
        {
            icon: FaWhatsapp,
            shareButton: WhatsappShareButton
        },
        {
            icon: FaPinterest,
            shareButton: PinterestShareButton
        },
        {
            icon: MdEmail,
            shareButton: EmailShareButton
        },
    ];

    const url = `${window.location.protocol}//${window.location.host}//movie/${movie.name}`;

    return (
        <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
            <div className="modal-content">
                <h3>{movie ? "Share Movie" : "Share Movie"}</h3>
                <form className="flex flex-col gap-4 py-3 text-left mt-6">
                    {shareData.map((data, index) => {
                        return (
                            <data.shareButton key={index} url={url} quote="Netflixo | Free Movies Site">
                                <div className="w-12 transitions hover:bg-subMain flex-colo text-lg h-12 bg-white rounded bg-opacity-30">
                                    <data.icon className="text-white " />
                                </div>
                            </data.shareButton>
                        );
                    })}
                </form>
            </div>
        </MainModal>
    );
}

export default ShareMovieModal;
