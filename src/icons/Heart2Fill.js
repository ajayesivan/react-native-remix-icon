import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgHeart2Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M20.243 4.757a6 6 0 01.236 8.236l-8.48 8.492-8.478-8.492a6.002 6.002 0 016.74-9.553L6.343 7.358l1.414 1.415L12 4.53l-.013-.014.014.013a5.998 5.998 0 018.242.228z" />
    </Svg>
  );
}

export default SvgHeart2Fill;
