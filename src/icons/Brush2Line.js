import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBrush2Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M16.536 15.95l2.12-2.122-3.181-3.182 3.535-3.535-2.12-2.121-3.536 3.535-3.182-3.182L8.05 7.464l8.486 8.486zm-1.415 1.414L6.636 8.879l-2.828 2.828 8.485 8.485 2.828-2.828zM13.354 5.697l2.828-2.829a1 1 0 011.414 0l3.536 3.536a1 1 0 010 1.414l-2.829 2.828 2.475 2.475a1 1 0 010 1.415L13 22.314a1 1 0 01-1.414 0l-9.9-9.9a1 1 0 010-1.414l7.778-7.778a1 1 0 011.415 0l2.475 2.475z" />
    </Svg>
  );
}

export default SvgBrush2Line;