import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCrop2Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M8.414 17H15v2H6a1 1 0 01-1-1V7H2V5h3V2h2v13.586L15.586 7H9V5h8.586l2.556-2.556 1.414 1.414L19 6.414V17h3v2h-3v3h-2V8.414L8.414 17z" />
    </Svg>
  );
}

export default SvgCrop2Line;
