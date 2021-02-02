import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgDirectionLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 3.515L3.515 12 12 20.485 20.485 12 12 3.515zm.707-2.122l9.9 9.9a1 1 0 010 1.414l-9.9 9.9a1 1 0 01-1.414 0l-9.9-9.9a1 1 0 010-1.414l9.9-9.9a1 1 0 011.414 0zM13 10V7.5l3.5 3.5-3.5 3.5V12h-3v3H8v-4a1 1 0 011-1h4z" />
    </Svg>
  );
}

export default SvgDirectionLine;
