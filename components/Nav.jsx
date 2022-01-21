import Link from 'next/link'

const Nav = () => {
  return (
    <header className='nav'>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <Link href='/projects'>
        <a>Projects</a>
      </Link>
      <Link href='/contact'>
        <a>Contact</a>
      </Link>
      <style jsx>
        {`
          .nav{
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            font-size: 1.25em;
            background-color: black;
            justify-items: center;
          }

          a{
            text-decoration: none;
            color: white;
          }

          a:hover{
            color: black;
            background-color: white;
          }
        `}
      </style>
    </header>
  )
}

export default Nav
