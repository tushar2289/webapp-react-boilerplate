import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Counter from '../Counter';

const Home: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create react app boilerplate
        </Typography>
        <Counter />
      </Box>
    </Container>
  );
};

export default Home;
