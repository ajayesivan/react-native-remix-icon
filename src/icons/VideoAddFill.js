import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgVideoAddFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M16 4a1 1 0 011 1v4.2l5.213-3.65a.5.5 0 01.787.41v12.08a.5.5 0 01-.787.41L17 14.8V19a1 1 0 01-1 1H2a1 1 0 01-1-1V5a1 1 0 011-1h14zM8 8v3H5v2h2.999L8 16h2l-.001-3H13v-2h-3V8H8z" />
    </Svg>
  );
}

export default SvgVideoAddFill;
