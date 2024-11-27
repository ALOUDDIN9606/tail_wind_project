import data from "./static/index"
import user from "./assets/user.png"
import vector from "./assets/Vector.png"

const Hero = () => {

  return (
    <>
        <section className="relative bg-white py-16">
            <div
              className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-10"
              style={{ backgroundImage: {vector} }}
            ></div>
            <div className="text-center mb-10">
              <h2 className="text-5xl font-bold text-gray-600">Services we Offer</h2>
              <p className="text-gray-600 mt-4 pb-8 text-[18px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {data.map((service, index) => (
                <div key={index} className="bg-white shadow-lg py-14 px-8 rounded-lg text-center">
                  <img
                    src={service.icon}
                    alt={`${service.title} icon`}
                    className="w-16 h-16 mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-[18px]">{service.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
            <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-8 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Learm more</button>
            </div>
        </section>

        <section className="bg-white py-28">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
            <div className="flex-shrink-0 mb-10 md:mb-0 md:w-1/3">
              <img
                src={user}
                alt="Healthcare Illustration"
                className="w-max max-w-min mx-auto md:mx-0"
              />
            </div>
            <div className="text-center md:text-left md:w-1/2 p-24">
              <h2 className="text-5xl font-bold text-gray-800">
                Leading healthcare providers
              </h2>
              <hr className="w-12 mt-4 mb-6 border-purple-500 border-2 mx-auto md:mx-0" />
              <p className="text-gray-600">
                Trafalgar provides progressive, and affordable healthcare, accessible
                on mobile and online for everyone. To us, its not just work. We take
                pride in the solutions we deliver.
              </p>
              <button className="mt-8 px-8 py-2 text-purple-700 border border-purple-700 rounded-lg hover:bg-purple-700 hover:text-white transition">
                Learn more
              </button>
            </div>
          </div>
        </section>    


    </>
  )
}

export default Hero