import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPictureInPictureLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M21 3a1 1 0 011 1v7h-2V5H4v14h6v2H3a1 1 0 01-1-1V4a1 1 0 011-1h18zm0 10a1 1 0 011 1v6a1 1 0 01-1 1h-8a1 1 0 01-1-1v-6a1 1 0 011-1h8zm-1 2h-6v4h6v-4z" />
    </Svg>
  );
}

export default SvgPictureInPictureLine;
