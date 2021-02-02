import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCloudFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M17 7a8.003 8.003 0 00-7.493 5.19l1.874.703A6.002 6.002 0 0123 15a6 6 0 01-6 6H7A6 6 0 015.008 9.339a7 7 0 0113.757-2.143A8.027 8.027 0 0017 7z" />
    </Svg>
  );
}

export default SvgCloudFill;
