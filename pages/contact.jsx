import Link from 'next/Link'
import Nav from '../components/Nav'

const contact = () => {
  return (
    <div>
      <Nav />
      <div className='contact'>
        <p>
          Telephone: 076 134 9290
        </p>
        <p>
          E-mail: fredwil25@gmail.com
        </p>
        <p>
        LinkedIn: 
          <Link href='https://www.linkedin.com/in/frederick-williams-b2215730/'>
             https://www.linkedin.com/in/frederick-williams-b2215730/
          </Link>
        </p>
      </div>
      <style jsx>
        {`
          .contact{
            text-align: center;
            font-size: 2em;
          }
        `}

      </style>
    </div>
  )
}
export default contact
