import { Avatar, Typography } from '@mui/material'
import React from 'react'

interface AvatarProps {
    avatarUrl: string;
    name: string;
}

const AvatarComponent: React.FC<AvatarProps> = ({ avatarUrl, name }) => {
    return (
        <>
            <Avatar
                src={avatarUrl}
                alt={name}
                sx={{ width: 150, height: 150 }} /><Typography
                    variant="h5"
                    component="h2"
                    sx={{ mt: 1.5, fontWeight: 700, textAlign: 'center' }}
                >
                {name}
            </Typography>
        </>
    )
}

export default AvatarComponent