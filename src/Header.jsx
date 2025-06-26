import './index.css'

function CustomHeader() {

  return (
    <div>
      <header className="sticky top-0 text-white shadow-md">
        <nav className="container mx-auto flex justify-center py-5">
          <ul className="flex space-x-8 text-xl sm:space-x-20">
            <li><a href="#" className="hover:text-red-600 inline-block transform hover:scale-125 transition-transform">Home</a></li>
            <li><a href="#" className="hover:text-red-600 inline-block transform hover:scale-125 transition-transform">Gallery</a></li>
            <li><a href="#" className="hover:text-red-600 inline-block transform hover:scale-125 transition-transform">Shows</a></li>
            <li><a href="#" className="hover:text-red-600 inline-block transform hover:scale-125 transition-transform">Merch</a></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default CustomHeader
