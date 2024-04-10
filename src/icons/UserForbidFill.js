import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgUserForbidFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 13a6 6 0 100-12 6 6 0 000 12zm3 5a3 3 0 014.293-2.708l-4 4.001A2.988 2.988 0 0115 18zm1.707 2.708l4-4.001a3 3 0 01-4.001 4.001zM18 13a5 5 0 100 10 5 5 0 000-10zm-6 1c.084 0 .168.001.252.004A6.968 6.968 0 0011 18c0 1.487.464 2.866 1.255 4H4a8 8 0 018-8z" />
    </Svg>
  );
}

export default SvgUserForbidFill;
