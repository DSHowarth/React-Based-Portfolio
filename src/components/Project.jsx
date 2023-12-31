import {useState} from 'react';
import Button from 'react-bootstrap/Button';

export default function Project({name, link, img, alt, gitHub, desc, first}) {

    const [isHovered, setIsHovered] = useState(false);

    return(
        // a div with links and images according to the props

        <div className={!first && "project"}>
            <h4 className="projName">{name}</h4>
            <p>{desc}</p>
            <div
                className= "projectLink"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <div className="hoverBox">
                {isHovered && 
                    <div className='projLinks'>
                        <Button href={gitHub} target="_blank" className="projLinkButton">Github Repo</Button>
                        <Button href={link} target="_blank" className="projLinkButton">Direct Site Link</Button>
                    </div>}
                </div>

                <img src={img} className="backgroundImg" alt={alt}/>


            </div>


        </div>
    )
}