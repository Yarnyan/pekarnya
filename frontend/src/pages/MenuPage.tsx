import React from 'react';
import { MenuTable } from "../module/menu/menuTable/MenuTable.tsx";
import Breadcrumb from '../module/breadcrumb/Breadcrumb.tsx';
export const MenuPage = () => {
    return (
        <div>
            <Breadcrumb />
            <MenuTable />
        </div>
    );
};