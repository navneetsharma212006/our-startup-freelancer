import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">
        Pricing
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {pricingOptions.map((option, index) => (
          <div key={index} className="h-full">
            <div className="h-full p-8 border border-neutral-700 rounded-xl flex flex-col">
              
             
              <p className="text-2xl mb-4">
                {option.title}
                {option.title === "Growth Projects" && (
                  <span className="bg-linear-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-sm ml-3">
                    (Most Popular)
                  </span>
                )}
              </p>

              
              <p className="mb-6 text-xl">{option.price}</p>

             
              <ul className="flex-1">
                {option.features.map((feature, i) => (
                  <li key={i} className="mt-4 flex items-center">
                    <CheckCircle2 className="text-orange-500" size={18} />
                    <span className="ml-2 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
