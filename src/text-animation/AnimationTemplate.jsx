import react from 'react';
function AnimationTemplate({ className, id, name, target, sentence, children }) {
    const textSections = sentence.split(target);
    return (
        <div className={className} id={id}>
            <span>{textSections[0]}</span>
            <span className={`cd-headline ${name}`} >
                {children}
            </span>
            <span>{textSections[1]}</span>
        </div>
    )
}
export default AnimationTemplate