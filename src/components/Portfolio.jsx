import Project from './Project'
import projects from './projectData'

export default function Portfolio() {


    return(
        <div className="container">
            {projects.map((item, index) => {
                return <Project name={item.name} link={item.link} img={item.img} key={index}/>
            })}
        </div>
    )
}