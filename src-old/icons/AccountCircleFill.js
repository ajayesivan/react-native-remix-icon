import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAccountCircleFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zM6.023 15.416C7.491 17.606 9.695 19 12.16 19c2.464 0 4.669-1.393 6.136-3.584A8.968 8.968 0 0012.16 13a8.968 8.968 0 00-6.137 2.416zM12 11a3 3 0 100-6 3 3 0 000 6z" />
    </Svg>
  );
}

export default SvgAccountCircleFill;
