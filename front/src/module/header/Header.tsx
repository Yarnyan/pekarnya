import React from 'react'
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
type Props = {}

export default function Header({ }: Props) {
    return (
        <div className='w-full flex justify-end'>
            <div className='flex items-center'>
                <div className='mr-2'>
                    <IconButton
                        size='medium'
                        aria-label="show 17 new notifications"
                    >
                        <Badge badgeContent={17} color="error">
                            <NotificationsIcon fontSize='medium'/>
                        </Badge>
                    </IconButton>
                </div>
                <div>
                    <Avatar alt="Pekarnya" src="/pekarnya.jpg" />
                </div>
            </div>
        </div>
    )
}