import React, { useState } from 'react'
import data from '../data.json';
import JobCard from '../components/JobCard';
import { Grid, Pagination } from '@mui/material';
import { Container } from '@mui/system';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';



function Page() {
    const [page, setPage] = useState(1)

    const handleChange = (event, value) => {
        setPage(value)
    };
    return (
        <Container sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <Grid container rowSpacing={2} mt={1}  >
                {
                    data.map((job) => job.postId === page &&
                        <Grid key={job.id} item xs={12} md={3} lg={4} >
                            <JobCard job={job} />
                        </Grid>
                    )
                }
            </Grid>

            <Stack spacing={2} >
                <Box sx={{ mt: 4, mb: 3, color: '#fff', textAlign: 'center' }}> page-{page} </Box>

                <Pagination color="primary" count={3} page={page}
                    onChange={handleChange} >
                </Pagination>
            </Stack>

        </Container>
    )
}
export default Page

