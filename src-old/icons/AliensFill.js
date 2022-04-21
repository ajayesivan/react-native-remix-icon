import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAliensFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 2a8.5 8.5 0 018.5 8.5c0 6.5-5.5 12-8.5 12s-8.5-5.5-8.5-12A8.5 8.5 0 0112 2zm5.5 10a4.5 4.5 0 00-4.475 4.975 4.5 4.5 0 004.95-4.95A4.552 4.552 0 0017.5 12zm-11 0c-.16 0-.319.008-.475.025a4.5 4.5 0 004.95 4.95A4.5 4.5 0 006.5 12z" />
    </Svg>
  );
}

export default SvgAliensFill;
