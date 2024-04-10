import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgScrollToBottomFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.859 2H11.14c-2.014 0-3.094.278-4.072.801A5.452 5.452 0 004.801 5.07C4.278 6.047 4 7.127 4 9.141v5.718c0 2.014.278 3.094.801 4.071A5.452 5.452 0 007.07 21.2c.978.522 2.058.801 4.072.801h1.718c2.014 0 3.094-.279 4.071-.801A5.452 5.452 0 0019.2 18.93c.522-.977.801-2.057.801-4.071V9.14c0-2.014-.279-3.094-.801-4.072a5.452 5.452 0 00-2.269-2.268C15.953 2.278 14.873 2 12.86 2zM11 11V6h2v5h-2zm-3.242 2.758l1.414-1.414 2.829 2.828 2.828-2.828 1.414 1.414-4.242 4.243-4.243-4.243z" />
    </Svg>
  );
}

export default SvgScrollToBottomFill;
