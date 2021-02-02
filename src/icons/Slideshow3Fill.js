import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSlideshow3Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M13 18v2h4v2H7v-2h4v-2H3a1 1 0 01-1-1V4a1 1 0 011-1h18a1 1 0 011 1v13a1 1 0 01-1 1h-8zM10 7.5v6l5-3-5-3z" />
    </Svg>
  );
}

export default SvgSlideshow3Fill;
