import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTableAltFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M7 14V3H3a1 1 0 00-1 1v10h5zm8 0V3H9v11h6zm7 0V4a1 1 0 00-1-1h-4v11h5zm-1 7a1 1 0 001-1v-4H2v4a1 1 0 001 1h18z" />
    </Svg>
  );
}

export default SvgTableAltFill;
