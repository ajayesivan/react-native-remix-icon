import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLayout5Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M7 10v11H3a1 1 0 01-1-1V10h5zm15 0v10a1 1 0 01-1 1H9V10h13zm-1-7a1 1 0 011 1v4H2V4a1 1 0 011-1h18z" />
    </Svg>
  );
}

export default SvgLayout5Fill;
