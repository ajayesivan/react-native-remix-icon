import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMic2Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 1a5 5 0 015 5v6a5 5 0 01-10 0V6a5 5 0 015-5zM2.192 13.962l1.962-.393a8.003 8.003 0 0015.692 0l1.962.393C20.896 18.545 16.85 22 12 22s-8.896-3.455-9.808-8.038z" />
    </Svg>
  );
}

export default SvgMic2Fill;
