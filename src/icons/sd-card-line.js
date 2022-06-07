import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgSdCardLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M6 7.828V20h12V4H9.828L6 7.828zm-1.707-1.12L9 2h10a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7.414a1 1 0 0 1 .293-.707zM15 5h2v4h-2V5zm-3 0h2v4h-2V5zM9 6h2v3H9V6z" />
  </Svg>
);

export default SvgSdCardLine;
