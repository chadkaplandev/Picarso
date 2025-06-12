export default function Header({ onNavClick }) {
  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <nav className="flex justify-around p-4">
        <button
          onClick={() => onNavClick("home")}
          className="text-gray-700 hover:text-blue-500"
        >
          Home
        </button>
        <button
          onClick={() => onNavClick("gallery")}
          className="text-gray-700 hover:text-blue-500"
        >
          Gallery
        </button>
        <button
          onClick={() => onNavClick("contact")}
          className="text-gray-700 hover:text-blue-500"
        >
          Contact
        </button>
      </nav>
    </header>
  )
}
