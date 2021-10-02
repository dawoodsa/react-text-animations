# react-text-animations
A variety of text animations ready to be applied.

# Installation
`npm i react-text-animations`

# Basic Usage
```javascript

import TextAnimation from "react-text-animations";

const AnimatedText = () => {
    return (
        <TextAnimation.Slide target="Merciful" text={['Gracious', 'Peace', 'Knowing']}>
            Allah is The Merciful
        </TextAnimation.Slide>
    )
}

export default AnimatedText;
```

You can choose from a bunch of animations by writing `TextAnimation.animationName`, In the example above we used the **Slide** animation. [Go to Real Cool Heading section](#) is the list of animations



# Animations List

Animations are separated to **2    **

1. Word
    * Push
    * Flip
    * Clip
    * Slide
    * Zoom
    
2. Letter
    * Rotate1 
    * Rotate2 
    * Scale
    
*Please feel free to suggest better names*
