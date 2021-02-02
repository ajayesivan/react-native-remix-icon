import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgStackshareLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M9.536 13H7.329a3 3 0 11.001-2h2.206L13 5h3.17a3 3 0 11.001 2h-2.017l-2.886 4.999L14.155 17h2.016a3 3 0 110 2H13l-3.464-6zM19 17a1 1 0 100 2 1 1 0 000-2zM4.5 11a1 1 0 100 2 1 1 0 000-2zM19 5a1 1 0 100 2 1 1 0 000-2z" />
    </Svg>
  );
}

export default SvgStackshareLine;
