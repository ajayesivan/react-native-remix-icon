import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCreativeCommonsByFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm2 8h-4a1 1 0 00-.993.883L9 11v4h1.5v4h3v-4H15v-4a1 1 0 00-.883-.993L14 10zm-2-5a2 2 0 100 4 2 2 0 000-4z" />
    </Svg>
  );
}

export default SvgCreativeCommonsByFill;
