import { makeStyles } from '@material-ui/core/styles';

export default (theme) => makeStyles({
  header: {
    position: 'relative',
    padding: '16px',
    height: '60px',
  },
  logo: {
    width: '70px',
    height: '32px',
    position: 'absolute',
    top: '50%',
    left: '16px',
    transform: 'translate3d(0, -50%, 0)',
    [theme.breakpoints.up('sm')]: {
      left: '50%',
      transform: 'translate3d(-50%, -50%, 0)',
    },
  },
  username: {
    lineHeight: '2.5rem',
    marginRight: '10px',
  },
  button: {
    padding: 0,
  },
});
