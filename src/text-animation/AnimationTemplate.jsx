function AnimationTemplate({ cname, id, name, target, sentence, children }) {
    const section = sentence.split(target);
    return (
        <div className={cname} id={id}>

            <span>{section[0]}</span>

            <span className={name} >
                {children}
            </span>

            <span>{section[1]}</span>
        </div>
    )
}
export default AnimationTemplate