import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        What People Are Saying ?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="h-full">
            
            
            <div className="h-full bg-neutral-900 border border-neutral-800 rounded-md p-6 flex flex-col justify-between">
              
             
              <p className="text-md text-neutral-300">
                {testimonial.text}
              </p>

             
              <div className="flex items-center mt-8">
                <img
                  className="w-12 h-12 mr-4 rounded-full border border-neutral-300"
                  src={testimonial.image}
                  alt={testimonial.user}
                />
                <h6 className="text-sm text-white">
                  {testimonial.user}
                </h6>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
