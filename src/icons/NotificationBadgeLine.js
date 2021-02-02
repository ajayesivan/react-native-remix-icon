import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgNotificationBadgeLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M13.341 4A5.99 5.99 0 0013 6H5v14h14v-8a5.99 5.99 0 002-.341V21a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1h9.341zM19 8a2 2 0 100-4 2 2 0 000 4zm0 2a4 4 0 110-8 4 4 0 010 8z" />
    </Svg>
  );
}

export default SvgNotificationBadgeLine;
