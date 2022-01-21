import Image from 'next/image'
import profilePic from '../public/profilePic.jpg'
import Nav from '../components/Nav'

const index = () => {
  return (
    <div className='index'>
      <Nav />
      <h1>
        Developer Profile
      </h1>
      <h2>
        for
      </h2>
      <h1 className='myName'>
        Frederick Williams
      </h1>
      <div className='profileImg'>
        <Image src={profilePic} alt='Profile Picture' />
      </div>

      <style jsx>
        {`
          .index{
            text-align: center;
            font-weight: 800;
          }
          .profileImg{
            width: 25%;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -51%);
            z-index: -1;
          }
          h1{
            font-size: 2.5em;
            z-index: 0;
          }
          .myName{
            background-color: rgba(0, 0, 255, 0.6);
            width: fit-content;
            margin: 0 auto;
            color: lightgreen;
          }
        `}
      </style>
    </div>
  )
}

export default index
