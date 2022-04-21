import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgThumbDownFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M22 15h-3V3h3a1 1 0 011 1v10a1 1 0 01-1 1zm-5.293 1.293l-6.4 6.4a.5.5 0 01-.654.047L8.8 22.1a1.5 1.5 0 01-.553-1.57L9.4 16H3a2 2 0 01-2-2v-2.104a2 2 0 01.15-.762L4.246 3.62A1 1 0 015.17 3H16a1 1 0 011 1v11.586a1 1 0 01-.293.707z" />
    </Svg>
  );
}

export default SvgThumbDownFill;
