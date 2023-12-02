import {useState} from 'react';

export default function Project({name, link, img, alt, gitHub, desc}) {

    const [isHovered, setIsHovered] = useState(false);

    return(
        // a div with links and images according to the props

        <div>
            <h4>{name}</h4>
            <p>{desc}</p>
            <div
                className= "project"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <div className="hoverBox">
                {isHovered && 
                    <div className='projLinks'>
                        <a href={gitHub}><h4>Github Repo</h4></a>
                        <a href={link}><h4>Direct Site Link</h4></a>
                    </div>}
                </div>
                <img src={img} className="backgroundImg" alt={alt}/>


            </div>


        </div>
    )
}