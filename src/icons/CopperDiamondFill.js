import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCopperDiamondFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM9.5 9L7 11.5l5 5 5-5L14.5 9h-5z" />
    </Svg>
  );
}

export default SvgCopperDiamondFill;
