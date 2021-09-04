import React from 'react';
import ReactDOM from 'react-dom';
import TextAnimation from './text-animation/TextAnimation'
import './text-animation/styles/main.scss';
ReactDOM.render(
  <React.StrictMode>
    <TextAnimation.Rotate1
      target="powerful"
      alternatingText={["Powerful", "Merciful", "Gracious"]}
    >Allah is the most powerful</TextAnimation.Rotate1>

    <TextAnimation.Slide
      target="powerful"
      alternatingText={["Powerful", "Merciful", "Gracious"]}
    >Allah is the most powerful</TextAnimation.Slide>

    <TextAnimation.Clip
      target="powerful"
      alternatingText={["Powerful", "Merciful", "Gracious"]}
    >Allah is the most powerful</TextAnimation.Clip>




    {/* <TextAnimation.Clip
      id="clip-animation-1"
      target="cute"
      alternatingText={["cute hadeel", "lazy love", "geniuses"]}
      animation={{ delay: 3000, duration: 1000, timingFunction: 'ease' }}

    >Programmers are cute</TextAnimation.Clip> */}
  </React.StrictMode>,
  document.getElementById('root')
);
