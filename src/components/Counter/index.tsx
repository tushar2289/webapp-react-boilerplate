import React from 'react';
import { observer } from 'mobx-react-lite';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useMst } from '../../models/Root';

const Counter: React.FC = observer(() => {
  const { counter } = useMst();
  return (
    <Paper elevation={3}>
      <Box p={4}>
        <Box pb={1}>
          <Typography variant="h6"> MobX powered counter</Typography>
        </Box>
        <Button variant="contained" color="primary" onClick={counter.decrement}>
          Decrement
        </Button>
        <Box px={2} component="span">
          <Typography variant="h6" component="span">
            {counter.count}
          </Typography>
        </Box>
        <Button variant="contained" color="primary" onClick={counter.increment}>
          Increment
        </Button>
      </Box>
    </Paper>
  );
});

export default Counter;
