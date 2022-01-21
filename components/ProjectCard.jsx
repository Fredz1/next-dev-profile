import Link from 'next/link'

const ProjectCard = props => {
  return (
    <div className='card'>
      <h4>{ props.data.name }</h4>
      <p>{ props.data.discription }</p>
      <p>Github: { props.data.gitRepo }</p>
      <p>Link: { props.data.herokuLink }</p>

      <style jsx>
        {`
          .card{
            width: 250px;
            padding: 0.25em;
            text-align: center
            box-shadow: inset 0 0 20px white inset 0 0 20px white;
          }
          .card:hover{
            background-color: black;
            color: white;
            box-shadow: inset 0 0 20px white inset 0 0 20px white;
          }
        `}
      </style>
    </div>
  )
}

export default ProjectCard
