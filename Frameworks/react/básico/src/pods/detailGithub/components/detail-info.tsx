import { Avatar, Box, Typography } from '@mui/material'
import { MemberGithubDetailEntity } from '../detail-github.vm'

interface CharacterProfileProps {
    member: MemberGithubDetailEntity,
}

const DetailInfo = ({ member }: CharacterProfileProps) => {
    return (
        <>
            <Typography variant="body1" sx={{ fontSize: '1rem', fontWeight: 700 }}>ID</Typography>
            <Typography variant="body1" sx={{ fontSize: '1rem' }}>{member.id}</Typography>
            <Typography variant="body1" sx={{ fontSize: '1rem', fontWeight: 700 }}>Login</Typography>
            <Typography variant="body1" sx={{ fontSize: '1rem' }}>{member.login || '-'}</Typography>
            <Typography variant="body1" sx={{ fontSize: '1rem', fontWeight: 700 }}>Name</Typography>
            <Typography variant="body1" sx={{ fontSize: '1rem' }}>{member.name || '-'}</Typography>
            <Typography variant="body1" sx={{ fontSize: '1rem', fontWeight: 700 }}>Company</Typography>
            <Typography variant="body1" sx={{ fontSize: '1rem' }}>{member.company || '-'}</Typography>
            <Typography variant="body1" sx={{ fontSize: '1rem', fontWeight: 700 }}>Bio</Typography>
            <Typography variant="body1" sx={{ fontSize: '1rem' }}>{member.bio || '-'}</Typography>
        </>
    )
}

export default DetailInfo