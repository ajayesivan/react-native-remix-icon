import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgDeviceRecoverLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M19 2a1 1 0 011 1v18a1 1 0 01-1 1H5a1 1 0 01-1-1V3a1 1 0 011-1h14zm-1 2H6v16h12V4zm-6 3a5 5 0 012.628 9.254L12.5 12H15a3 3 0 10-3 3l.955 1.909A5 5 0 1112 7z" />
    </Svg>
  );
}

export default SvgDeviceRecoverLine;
