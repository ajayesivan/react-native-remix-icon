import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAlertFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12.866 3l9.526 16.5a1 1 0 01-.866 1.5H2.474a1 1 0 01-.866-1.5L11.134 3a1 1 0 011.732 0zM11 16v2h2v-2h-2zm0-7v5h2V9h-2z" />
    </Svg>
  );
}

export default SvgAlertFill;
