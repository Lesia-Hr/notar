import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const NotarTextField = withStyles({
    root: {
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'black',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'white',
          opacity: '0.38'
        },
      },
    },
})(TextField);

export default NotarTextField;