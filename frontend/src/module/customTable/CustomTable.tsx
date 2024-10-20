import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import React from "react";

interface Props {
    columnNames: string[]
    rows: React.ReactNode[]
}

export const CustomTable = ({rows, columnNames}: Props) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="custom table">
                <TableHead>
                    <TableRow>
                        {columnNames.map(name => {
                            return <TableCell key={name}>{name}</TableCell>
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows}
                </TableBody>
            </Table>
        </TableContainer>
    );
};