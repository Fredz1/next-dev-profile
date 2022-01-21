import Link from 'next/link'
import Nav from '../components/Nav'

const about = () => {
  return (
    <div className='about'>
      <Nav />
      <h1>About</h1>
      <h2>Frederick Williams</h2>
      <p>
        “My favorite machine at the gym is the vending machine.” Caroline Rhea
      </p>
      <main>
        I am a 32-year-old, South African male. I have 10+ years in-depth financial sector experience across all products, rules, regulations and roles. I have experience in market corrections, validation capturing, authorising, tax, death, Section 14 and Section 37. I have successfully trained and mentored new, experienced staff and management. My strengths are problem solving, relationship building and compliance. I am self-motivated, have an attention to detail and have an ability to resolve complex  problems. I am a well-rounded and outgoing person who works well in a team environment or on my own. <br />
        I am currently persuing a career in Full Stack Web Development.
      </main>
      
      <style jsx>
        {
          `
            div{
              text-align: center
            }
            h2{
              background-color: black;
              color: white;
            }
            main{
              background-color: black;
              color: white;
              line-height: 1.8;
              padding: 1em;
            }
          `
        }

      </style>
    </div>
  )
}

export default about
