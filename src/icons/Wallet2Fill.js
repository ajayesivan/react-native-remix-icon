import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgWallet2Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M22 8h-9a1 1 0 00-1 1v6a1 1 0 001 1h9v4a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h18a1 1 0 011 1v4zm-7 3h3v2h-3v-2z" />
    </Svg>
  );
}

export default SvgWallet2Fill;
