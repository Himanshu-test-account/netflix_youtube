import React from "react";
import MainModal from "./MainModal";
import { Input } from "../UsedInputs";

function CategoryModal({ modalOpen, setModalOpen, category }) {
  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div className="modal-content">
        <h3>{category ? "Update" : "Create"}</h3>
        <form className="flex flex-rows gap-4 py-3 text-left mt-6">
          <Input
            label="Category Name"
            placeholder={category ? category.title : "Enter Category Name"} // Dynamically change placeholder
            type="text"
            onChange={(e) => setModalOpen(e.target.value)} // Handle input change
            bg={false}
          />
          
          <button
            type="submit" // Use submit type to handle form submission
            className="w-full flex-colo gap-4 py-3 text-lg font-bold hover:bg-transparent border-2 border-subMain rounded bg-subMain hover:text-white"
          >
            {category ? "Update" : "Add"} Category
          </button>
        </form>
      </div>
    </MainModal>
  );
}

export default CategoryModal;
