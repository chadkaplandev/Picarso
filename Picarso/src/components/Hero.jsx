export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center flex items-center justify-center text-white text-center"
      style={{ backgroundImage: 'url(https://via.placeholder.com/1920x1080)' }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-2xl max-w-2xl">
        <h1 className="text-4xl mb-4">Welcome to Our Painting Company</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac erat at lorem condimentum tincidunt.</p>
      </div>
    </section>
  );
}
