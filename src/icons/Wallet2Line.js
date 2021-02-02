import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgWallet2Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M20 7V5H4v14h16v-2h-8a1 1 0 01-1-1V8a1 1 0 011-1h8zM3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm10 6v6h7V9h-7zm2 2h3v2h-3v-2z" />
    </Svg>
  );
}

export default SvgWallet2Line;
