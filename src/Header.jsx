import './index.css'

function CustomHeader() {

  return (
      <header className="sticky top-0 text-white shadow-md">
        <nav className="container mx-auto flex justify-center py-5">
          <ul className="flex space-x-12 text-xl">
            <li><a href="#" className="hover:text-red-600 inline-block transform hover:scale-125 transition-transform">Home</a></li>
            <li><a href="#" className="hover:text-red-600 inline-block transform hover:scale-125 transition-transform">Gallery</a></li>
            <li><a href="#" className="hover:text-red-600 inline-block transform hover:scale-125 transition-transform">Shows</a></li>
            <li><a href="#" className="hover:text-red-600 inline-block transform hover:scale-125 transition-transform">Merch</a></li>
          </ul>
        </nav>
      </header>
  )
}

export default CustomHeader
