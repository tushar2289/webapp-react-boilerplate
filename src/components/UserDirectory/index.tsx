import React from 'react';
import { observer } from 'mobx-react-lite';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { SnapshotIn } from 'mobx-state-tree';
import { useMst } from '../../models/Root';
import User from '../../models/User';
import LoadingUserDirectory, {
  useStyles,
  StyledTableRow,
  StyledTableCell,
} from './loading';

const UserDirectory: React.FC = observer(() => {
  const classes = useStyles();

  const { directory } = useMst();
  const { users, loading } = directory;
  const userArray = Array.from(users.values());

  if (loading) {
    return (
      <Box p={4}>
        <LoadingUserDirectory />
      </Box>
    );
  }

  return (
    <Box p={4}>
      <Box pb={1}>
        <Typography variant="h6">
          MobX powered user directory using Axios
        </Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Username</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Phone</StyledTableCell>
              <StyledTableCell>Website</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userArray.map((user: SnapshotIn<typeof User>) => (
              <StyledTableRow key={user.id}>
                <StyledTableCell component="th" scope="row">
                  {user.name}
                </StyledTableCell>
                <StyledTableCell>{user.name}</StyledTableCell>
                <StyledTableCell>{user.email}</StyledTableCell>
                <StyledTableCell>{user.phone}</StyledTableCell>
                <StyledTableCell>{user.website}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
});

export default UserDirectory;
