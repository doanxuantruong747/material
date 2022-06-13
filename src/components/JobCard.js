import * as React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export default function JobCard({ job }) {
    const arraySkill = job.skills;
    return (
        <Box sx={{
            maxWidth: 345, height: 260,
            backgroundColor: '#616161', borderRadius: 2, mt: 2,
            display: 'flex', flexDirection: 'column'
        }}>

            <Typography variant="body1"
                sx={{ color: '#fff', textAlign: "center", padding: 1, }}
            >
                {job.title}
            </Typography>

            <Divider variant="middle" sx={{ mb: 1 }} />

            <Stack direction="row" spacing={0.5} sx={{ ml: 1 }} >
                {arraySkill.slice(0, 4).map((skill, index) => {
                    return (
                        <Chip key={index} label={`${skill}`} sx={{
                            backgroundColor: "#f44336",
                            color: "#fff", fontSize: 8.5, textAlign: "center"
                        }} />
                    )
                })}

            </Stack>

            <Box sx={{ height: '45%', mt: 2, ml: 2, textAlign: 'left' }}>
                <Typography color="text.secondary" variant="body2">
                    {job.description}
                </Typography>
            </Box>
            <Box sx={{ textAlign: "center", }}>
                <Button sx={{ background: '#f9a825', color: "#212121" }} size="small" variant="contained" >LEARN MORE</Button>
            </Box>
        </Box>

    );
}
