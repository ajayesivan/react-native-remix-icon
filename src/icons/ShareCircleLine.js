import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgShareCircleLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M11 2.05v2.012A8.001 8.001 0 0012 20a8.001 8.001 0 007.938-7h2.013c-.502 5.053-4.766 9-9.951 9-5.523 0-10-4.477-10-10 0-5.185 3.947-9.449 9-9.95zm9 3.364l-8 8L10.586 12l8-8H14V2h8v8h-2V5.414z" />
    </Svg>
  );
}

export default SvgShareCircleLine;
