import React from 'react';
import { PersonalTable } from "../module/personal/personalTable/PersonalTable.tsx";
import Breadcrumb from '../module/breadcrumb/Breadcrumb.tsx';
export const PersonnelPage = () => {
    return (
        <div>
            <Breadcrumb />
            <PersonalTable />
        </div>
    );
};