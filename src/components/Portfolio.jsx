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
                    return <Project name={item.name} link={item.link} img={item.img} gitHub={item.gitHub} key={index}/>
                })}
            </div>
        </Container>
    )
}