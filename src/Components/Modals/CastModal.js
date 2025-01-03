import React from "react";
import MainModal from "./MainModal";
import { Input } from "../UsedInputs";
import Uploader from "../Uploader";


function CategoryModal({ modalOpen, setModalOpen, cast }) {

  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div className="modal-content">
        <h3>{cast ? "Update cast" : "Create cast"}</h3>
        <form className="flex flex-col gap-4 py-3 text-left mt-6">
          <Input
            label="Cast Name"
            placeholder={cast ? cast.title : "Action"}
            type="text"
            bg={false}
          />

          <div className="flex flex-col gap-2">
            <p className="text-border font-semibold text-sm">
              Cast Image
            </p>
            <Uploader />
            <div className="w-32 h-32 p-2 bg-main border border-border rounded">
              <img
                src={`/images/moives/${cast ? cast.image : "detail_4.webp"}`} 
                alt=""
                className="w-full h-full object-cover rounded "/>
            </div>
          </div>
        </form>

      </div>
    </MainModal>
  );
}

export default CategoryModal;
