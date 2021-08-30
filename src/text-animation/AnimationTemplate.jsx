import react from 'react';
function AnimationTemplate({ className, id, name, target, string, children }) {
    const text = string.split(target);
    return (
        <div className={className} id={id}>
            <span>{text[0]}</span>
            <span className={`cd-headline ${name}`} >
                {children}
            </span>
            <span>{text[1]}</span>
        </div>
    )
}
export default AnimationTemplate