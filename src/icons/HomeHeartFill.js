import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgHomeHeartFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M20 20a1 1 0 01-1 1H5a1 1 0 01-1-1v-9H1l10.327-9.388a1 1 0 011.346 0L23 11h-3v9zm-8-3l3.359-3.359a2.25 2.25 0 10-3.182-3.182l-.177.177-.177-.177a2.25 2.25 0 10-3.182 3.182L12 17z" />
    </Svg>
  );
}

export default SvgHomeHeartFill;
