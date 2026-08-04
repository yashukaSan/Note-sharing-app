import { Link } from 'react-router';

export default function Footer(){
  type Links ={
    linkTo: string,
    name: string
  }
  const links: Links[] = [
    {
      linkTo: "#contac-us",
      name: "Contact Us"
    },
    {
      linkTo: "#help",
      name: "Help"
    },
    {
      linkTo: "/blog",
      name: "Blog"
    },
    {
      linkTo: "/devs",
      name: "Developers"
    },
    {
      linkTo: "/tnc",
      name: "Terms & Conditions"
    },
    {
      linkTo: "/privacy",
      name: "Privacy"
    }

  ]
    return (
      <footer className="rounded-xl font-serif text-xs md:text-lg py-10 mt-5 bg-linear-to-t from-blue-500 to-red-500 dark:bg-linear-to-tr dark:from-purple-500 dark:to-black dark:text-yellow-200 grid items-center justify-center text-center ">
        <ul className='grid'> 
          {
            links.map((item, ind)=> {
              return(
                <li className='text-sm hover:text-[#dfdfdf] 'key={`footer-${ind}`} >
                  <Link to={`${item.linkTo}`}>
                  {item.name}
                  </Link>
                </li>
              )
            })
          }
          
        </ul>
        <a href="https://www.startupindia.gov.in/content/sih/en/privacy-policy.html">
          Privacy Notice for Indian Users
        </a>
        <p>
          <Link to="/">&#9426; Note-Sharer</Link>
        </p>
      </footer>
    );
}
