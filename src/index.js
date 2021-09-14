import React from 'react';
import ReactDOM from 'react-dom';
import TextAnimation from './text-animation/TextAnimation'
import './text-animation/styles/main.scss';
ReactDOM.render(
  <React.StrictMode>
    {/* <TextAnimation.Clip
      target="powerful"
      alternatingText={["Powerful", "Merciful", "Gracious"]}
    >Allah is the most powerful</TextAnimation.Clip> */}
    <TextAnimation.Rotate1
      target="powerful"
      alternatingText={["Powerful", "Merciful", "Gracious"]}
    >Allah is the most powerful</TextAnimation.Rotate1>

    <TextAnimation.Slide
      target="powerful"
      alternatingText={["Powerful", "Merciful", "Gracious"]}
    >Allah is the most powerful</TextAnimation.Slide>


    <TextAnimation.Zoom
      target="powerful"
      alternatingText={["Powerful", "Merciful", "Gracious"]}
    >Allah is the most powerful</TextAnimation.Zoom>


  </React.StrictMode>,
  document.getElementById('root')
);
