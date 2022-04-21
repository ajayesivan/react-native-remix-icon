import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCrop2Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M17.586 5l2.556-2.556 1.414 1.414L19 6.414V17h3v2h-3v3h-2V7H9V5h8.586zM15 17v2H6a1 1 0 01-1-1V7H2V5h3V2h2v15h8zM9 9h6v6H9V9z" />
    </Svg>
  );
}

export default SvgCrop2Fill;
