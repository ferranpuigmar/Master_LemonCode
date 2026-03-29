import { QUERY_PARAM_NAME } from '@src/common/pods/list/list.constants';
import { MemberEntity } from '@src/common/pods/list/list.vm';
import { Avatar, Box, Grid, Link as MuiLink, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export type IdParam = keyof Pick<MemberEntity, 'name' | 'id'>;

interface ListComponentProps {
    members: MemberEntity[];
    searchTerm: string | null;
    isLoading: boolean;
    route: (id: string) => string;
    paramIdentifier?: IdParam;
}

const ListComponent = ({ members, searchTerm, isLoading, route, paramIdentifier = 'id' }: ListComponentProps) => {

    if (isLoading) {
        return <Typography>Loading...</Typography>
    }

    if (members.length === 0) {
        return <Typography>No members found for "{searchTerm}"</Typography>
    }

    const params = searchTerm ? `?${QUERY_PARAM_NAME}=${searchTerm}` : '';

    return (
        <>
            {members.map((member) => (
                <Grid
                    container
                    key={member.id}
                    columnSpacing={2.5}
                    sx={{
                        alignItems: 'center',
                    }}
                >
                    <Grid sx={{ width: 80, flexShrink: 0 }}>
                        <Avatar
                            alt={member.name}
                            src={member.avatarUrl}
                            sx={{ width: 70, height: 70 }}
                        />
                    </Grid>
                    <Grid sx={{ flex: 1, minWidth: 0, pl: 2 }}>
                        <Typography>{member.id}</Typography>
                    </Grid>
                    <Grid sx={{ flex: 8, minWidth: 0 }}>
                        <MuiLink
                            component={RouterLink}
                            to={`${route(String(member[paramIdentifier]))}${params}`}
                            underline="hover"
                        >
                            {member.name}
                        </MuiLink>
                    </Grid>
                </Grid>
            ))}
        </>
    )
}

export default ListComponent