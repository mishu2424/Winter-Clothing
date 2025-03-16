const About = () => {
  return (
    <div className="grid grid-cols-12 gap-4 my-3">
      <div className="col-span-12 lg:col-span-6 flex items-center justify-center bg-[url('/winter-jc.jpg')] bg-cover bg-center">
        <div className="px-32 py-48 text-center space-y-1">
          <h2 className="text-4xl font-extrabold text-amber-500">
            Sustainable Fashion: Eco-Friendly Trends You’ll Love
          </h2>
          <p className="text-xs font-semibold text-white">
            "Explore the growing world of sustainable fashion and how you can be
            stylish while supporting eco-friendly brands"
          </p>
          <a
            href="#_"
            class="relative btn inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-amber-600 transition duration-300 ease-out border-2 border-amber-500 rounded-none group"
          >
            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-amber-500 group-hover:translate-x-0 ease">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="absolute flex items-center justify-center w-full h-full text-amber-500 transition-all duration-300 transform group-hover:translate-x-full ease">
            Blogs
            </span>
            <span class="relative invisible">Blogs</span>
          </a>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-6 flex items-center justify-center bg-[url('/winter-sale.jpg')] bg-cover bg-center">
        <div className="lg:px-32 py-48 text-center space-y-3">
          <h2 className="text-4xl font-extrabold text-amber-500">
            Winter Sale
          </h2>
          <p className="text-xs font-semibold text-white">
            "Warm up your style this winter with cozy essentials at unbeatable
            prices.Embrace the season in style—where comfort meets unbeatable savings!"
          </p>
          <a
            href="#_"
            class="relative btn inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-amber-600 transition duration-300 ease-out border-2 border-amber-500 rounded-none group"
          >
            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-amber-500 group-hover:translate-x-0 ease">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="absolute flex items-center justify-center w-full h-full text-amber-500 transition-all duration-300 transform group-hover:translate-x-full ease">
              Sale
            </span>
            <span class="relative invisible">Sale</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
