import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCreativeCommonsFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zM9 8c-2.208 0-4 1.792-4 4a4.001 4.001 0 006.669 2.979l.159-.151-1.414-1.414a2 2 0 11-.125-2.943l.126.116 1.414-1.414A3.988 3.988 0 009 8zm7 0c-2.208 0-4 1.792-4 4a4.001 4.001 0 006.669 2.979l.159-.151-1.414-1.414a2 2 0 11-.125-2.943l.126.116 1.414-1.414A3.988 3.988 0 0016 8z" />
    </Svg>
  );
}

export default SvgCreativeCommonsFill;
