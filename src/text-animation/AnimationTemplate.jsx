import react from 'react';
function AnimationTemplate({ cname, id, name, target, sentence, children }) {
    const textSections = sentence.split(target);
    return (
        <div className={cname} id={id}>

            <span>{textSections[0]}</span>

            <span className={name} >
                {children}
            </span>
            
            <span>{textSections[1]}</span>
        </div>
    )
}
export default AnimationTemplate