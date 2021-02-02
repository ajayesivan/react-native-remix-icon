import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgNotificationBadgeFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M13.341 4A6 6 0 0021 11.659V21a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1h9.341zM19 10a4 4 0 110-8 4 4 0 010 8z" />
    </Svg>
  );
}

export default SvgNotificationBadgeFill;
