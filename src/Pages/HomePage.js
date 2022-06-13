import React from 'react';
import { Container } from '@mui/system';
import { Box } from '@mui/material';
import Page from './Page';

function HomePage() {
    return (
        <div>
            <Container sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ mt: 2 }}>
                    <Page />
                </Box>
            </Container>

        </div>
    )
}

export default HomePage