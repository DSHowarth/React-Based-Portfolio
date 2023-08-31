
export default function Project({name, link, img, alt}) {
    return(
        <div>
            <a className="project" href={link}>
                <h4>{name}</h4>
                <img src={img} className="backgroundimg" alt={alt}/>
            </a>
        </div>
    )
}