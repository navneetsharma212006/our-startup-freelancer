import { features2 } from "../constants";

const ServicesPage = () => {
  return (
    <>
     <div className="relative mt-20 border-b border-neutral-800 min-h-200 ">

      
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
           Our Services  
        </span>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Services That 
          <span className="bg-linear-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            {" "}We Offer
          </span>
        </h2>
      </div>

   
      <div className="flex flex-wrap mt-10 lg:mt-20 " >
        {features2.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            
            <div className="flex mx-6 mb-12">

              
              <div className="flex h-10 w-10 p-2 bg-neutral-900 text-orange-700 
                              justify-center items-center rounded-full">
                {feature.icon}
              </div>

            
              <div className="ml-4">
                <h5 className="mt-1 mb-4 text-xl text-white">
                  {feature.text}
                </h5>

                <p className="text-md text-neutral-300">
                  {feature.description}
                </p>
              </div>

            </div>

          </div>
        ))}
      </div>

    </div>
    </>
  )
}

export default ServicesPage
