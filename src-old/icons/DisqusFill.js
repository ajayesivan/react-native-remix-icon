import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDisqusFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10c-2.53 0-4.84-.94-6.601-2.488L1.5 20l1.424-3.797A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2zM8 7v10h3.733l.263-.004c3.375-.103 5.337-2.211 5.337-5.025v-.027l-.003-.215C17.23 8.956 15.21 7 11.79 7H8zm3.831 2.458c1.628 0 2.709.928 2.709 2.529v.028l-.005.183c-.079 1.5-1.138 2.345-2.704 2.345h-1.108V9.458h1.108z" />
    </Svg>
  );
}

export default SvgDisqusFill;
