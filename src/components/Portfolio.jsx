import Project from './Project'
// separate page to store my project info
import projects from './projectData'


export default function Portfolio() {

    return(
        <div className="container">
            {/* create a project component for every item in my portfolio array */}
            {projects.map((item, index) => {
                return <Project name={item.name} link={item.link} img={item.img} gitHub={item.gitHub} key={index}/>
            })}
        </div>
    )
}