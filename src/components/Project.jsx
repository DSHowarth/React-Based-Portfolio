
export default function Project({name, link, img, alt, gitHub}) {
    return(
        // a div with links and images according to the props
        <div>
            <a className="project" href={link}>
                <h4>{name}</h4>

                <img src={img} className="backgroundimg" alt={alt}/>
            </a>
            <a href={gitHub}>
                <h4>Github Repo</h4>
            </a>
        </div>
    )
}