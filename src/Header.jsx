import './index.css'
import { Link } from 'react-router-dom'

function CustomHeader() {
  return (
    <div>
      <header className="sticky top-0 text-white shadow-md">
        <nav className="container mx-auto flex justify-center py-5">
          <ul className="flex space-x-8 text-xl sm:space-x-20">
            <li>
              <Link to="/" className="hover:text-red-600 inline-block transform hover:scale-125 transition-transform">
                Home
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-red-600 inline-block transform hover:scale-125 transition-transform">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/shows" className="hover:text-red-600 inline-block transform hover:scale-125 transition-transform">
                Shows
              </Link>
            </li>
            <li>
              <Link to="/merch" className="hover:text-red-600 inline-block transform hover:scale-125 transition-transform">
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

