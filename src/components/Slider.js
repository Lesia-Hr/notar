import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const NotarSlider = withStyles({
    root: {
      color: 'black',
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: 'rgb(222, 184, 135)',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
})(Slider);

export default NotarSlider;