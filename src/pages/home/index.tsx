const Home = () => {
  return (
  <section className="w-full h-full">
    <div className="text-center text-gray-800 py-24 px-6 w-full h-full">
      <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">Get your time <br /><span className="text-blue-600">just select timezone</span></h1>
      <a className="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="/time" role="button">Get time</a>
      <a className="inline-block px-7 py-3 bg-transparent text-blue-600 font-medium text-sm leading-snug uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="/time" role="button">Learn more</a>
    </div>
  </section>
  )
}

export default Home