import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCloudyLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M9.5 6a6.5 6.5 0 000 13h7a4.5 4.5 0 10-.957-8.898A6.502 6.502 0 009.5 6zm7 15h-7a8.5 8.5 0 117.215-12.997A6.5 6.5 0 0116.5 21z" />
    </Svg>
  );
}

export default SvgCloudyLine;
