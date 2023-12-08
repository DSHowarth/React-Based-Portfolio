import Project from './Project';
// separate page to store my project info
import projects from './projectData';
import Container from 'react-bootstrap/Container';


export default function Portfolio() {

    return(
        <Container className="contentContainer">
            <div>
                {/* create a project component for every item in my portfolio array */}
                {projects.map((item, index) => {
                    if (index == 0) {
                        return <Project name={item.name} 
                                        link={item.link} 
                                        img={item.img} 
                                        gitHub={item.gitHub} 
                                        desc={item.desc}
                                        first={true} 
                                        key={index}/>
                    }
                    else {
                        return <Project name={item.name} link={item.link} img={item.img} gitHub={item.gitHub} desc={item.desc} key={index}/>
                    }

                })}
            </div>
        </Container>
    )
}