import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgContrastDrop2Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 3.1L7.05 8.05a7 7 0 109.9 0L12 3.1zm0-2.828l6.364 6.364a9 9 0 11-12.728 0L12 .272zM7 13h10a5 5 0 01-10 0z" />
    </Svg>
  );
}

export default SvgContrastDrop2Line;
