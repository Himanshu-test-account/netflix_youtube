import React, { useEffect, useState } from 'react';
import Sidebar from "../Sidebar";
import { HiPlusCircle } from 'react-icons/hi';
import Table2 from '../../../Components/Table2';
import { CategoriesData } from '../../../Data/CategoriesData';
import CategoryModal from '../../../Components/Modals/CategoryModal';

function Categories() {
    const [modalOpen, setModalOpen] = useState(false);
    const [category, setCategory] = useState(null); // Store the entire category data

    const OnEditFunction = (id) => {
        // Find the category by its id to pass the entire data to the modal
        const categoryData = CategoriesData.find((category) => category.id === id);
        setCategory(categoryData); // Set the full category data
        setModalOpen(true); // Open the modal
    };

    useEffect(() => {
        if (modalOpen === false) {
            setCategory(null); // Clear the category data when modal is closed
        }
    }, [modalOpen]);

    return (
        <Sidebar>
            <CategoryModal 
                modalOpen={modalOpen} 
                setModalOpen={setModalOpen} 
                category={category} 
            />
            <div className='flex flex-col gap-6'>
                <div className='flex-btn gap-2'>
                    <h2 className='text-xl font-bold'>Categories</h2>
                    <button 
                        onClick={() => setModalOpen(true)} 
                        className='bg-subMain flex-rows gap-4 font-medium transitions hover:bg-main border border-subMain text-white py-2 px-4 rounded'
                    >
                        <HiPlusCircle /> Create
                    </button>
                </div>

                {/* Pass the correct props to Table2 */}
                <Table2 
                    data={CategoriesData} // Pass the categories data
                    OnEditFunction={OnEditFunction} // Pass the edit function to handle edit button click
                />
            </div>
        </Sidebar>
    );
}

export default Categories;
