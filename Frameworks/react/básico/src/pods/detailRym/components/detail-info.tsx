import { MemberRyMDetailEntity } from '../detail-rym.vm'
import { Typography } from '@mui/material'

interface DetailInfoProps {
    member: MemberRyMDetailEntity
}

const DetailInfo = ({ member }: DetailInfoProps) => {
    return (
        <>
            <Typography variant="body1" sx={{ fontSize: '1rem', fontWeight: 700 }}>ID</Typography>
            <Typography variant="body1" sx={{ fontSize: '1rem' }}>{member.id}</Typography>
            <Typography variant="body1" sx={{ fontSize: '1rem', fontWeight: 700 }}>Status</Typography>
            <Typography variant="body1" sx={{ fontSize: '1rem' }}>{member.status}</Typography>
            <Typography variant="body1" sx={{ fontSize: '1rem', fontWeight: 700 }}>Species</Typography>
            <Typography variant="body1" sx={{ fontSize: '1rem' }}>{member.species}</Typography>
            <Typography variant="body1" sx={{ fontSize: '1rem', fontWeight: 700 }}>Type</Typography>
            <Typography variant="body1" sx={{ fontSize: '1rem' }}>{member.type || '-'}</Typography>
            <Typography variant="body1" sx={{ fontSize: '1rem', fontWeight: 700 }}>Gender</Typography>
            <Typography variant="body1" sx={{ fontSize: '1rem' }}>{member.gender}</Typography>
            <Typography variant="body1" sx={{ fontSize: '1rem', fontWeight: 700 }}>Origin</Typography>
            <Typography variant="body1" sx={{ fontSize: '1rem' }}>{member.origin.name}</Typography>
            <Typography variant="body1" sx={{ fontSize: '1rem', fontWeight: 700 }}>Location</Typography>
            <Typography variant="body1" sx={{ fontSize: '1rem' }}>{member.location.name}</Typography>
        </>

    )
}

export default DetailInfo