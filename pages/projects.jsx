import Nav from '../components/Nav'
import ProjectCard from '../components/ProjectCard'

const projects = () => {
  const projects = [
    {
      name: 'Project Task List',
      discription: 'A basic project task manager',
      gitRepo: 'not available',
      herokuLink: 'https://young-coast-61138.herokuapp.com/'
    },
    {
      name: 'Studio 22 Web Page',
      discription: 'Simple store front page for Studio 22',
      gitRepo: 'https://github.com/Fredz1/Studio22',
      herokuLink: 'https://studio22tattoo.herokuapp.com/'
    },
    {
      name: 'Minesweeper',
      discription: 'Minesweeper the popular game',
      gitRepo: 'not available',
      herokuLink: 'https://aqueous-escarpment-38345.herokuapp.com/'
    }
  ]


  return (
    <div>
      <Nav />
      <div className='projects'>
        {
          projects.map(
            (el,index) => {
              return(
                <ProjectCard data={el} key={index} />
              )
            }
          )
        }
      </div>
      <style jsx>
        {`
          .projects {
            margin: 2em;
            display: grid;
            grid-template-columns: repeat(4, 1fr)
          }
        `}

      </style>
    </div>

  )
}


export default projects
