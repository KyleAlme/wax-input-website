import './index.css'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

function CustomHeader() {
  return (
    <div>
      <header className="sticky top-0 text-white shadow-md">
        <nav className="container mx-auto flex justify-center py-5">
          <ul className="flex space-x-8 text-xl sm:space-x-20">
            <li>
              <Link to="/" className="[@media(hover:hover)]:hover:text-red-600 [@media(hover:hover)]:hover:scale-125 active:text-red-600 active:scale-125 inline-block transform transition-transform">
                Home
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="[@media(hover:hover)]:hover:text-red-600 [@media(hover:hover)]:hover:scale-125 active:text-red-600 active:scale-125 inline-block transform transition-transform">
                Gallery
              </Link>
            </li>
            <li>
              <HashLink smooth to="/#show-section" className="[@media(hover:hover)]:hover:text-red-600 [@media(hover:hover)]:hover:scale-125 active:text-red-600 active:scale-125 inline-block transform transition-transform">
                Shows
              </HashLink>
            </li>
            <li>
              <Link to="/merch" className="[@media(hover:hover)]:hover:text-red-600 [@media(hover:hover)]:hover:scale-125 active:text-red-600 active:scale-125 inline-block transform transition-transform">
                Merch
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default CustomHeader

