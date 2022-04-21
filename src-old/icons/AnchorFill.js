import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAnchorFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M13 9.874v10.054c3.619-.453 6.487-3.336 6.938-6.972H17L20.704 7A10.041 10.041 0 0122 11.95C22 17.5 17.523 22 12 22S2 17.5 2 11.95c0-1.8.471-3.489 1.296-4.95L7 12.956H4.062c.451 3.636 3.32 6.519 6.938 6.972V9.874A4.002 4.002 0 0112 2a4 4 0 011 7.874zM12 8a2 2 0 100-4 2 2 0 000 4z" />
    </Svg>
  );
}

export default SvgAnchorFill;
