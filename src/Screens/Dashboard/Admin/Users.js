import React from 'react';
import Sidebar from "../Sidebar";
import Table2 from '../../../Components/Table2';
import { UserData } from "../../../Data/CategoriesData";

function Users() {
    return (
        <Sidebar>
            <div className='flex flex-colo gap-6'>
                <div className='flex-btn gap-2'>
                    <h2 className='text-xl font-bold'>Users</h2>

                </div>

                <Table2 data={UserData} user={true} />

            </div>
        </Sidebar>
    )
}

export default Users
