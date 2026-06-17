import { mapFeaturesData } from "@/assets/assets";
import Icon from "@/app/ui/components/Icon";

const MapFeatures = () => {
  return (
    <section>
      <div className="w-full bg-brand-600 rounded-xl shadow-sm p-8">
        <div className="grid md:grid-cols-4 gap-8">
          {mapFeaturesData.map(({ title, description, icon }, index) => (
            <div key={index} className="text-center group">
              <div className="relative mt-10 md:mt-20 mb-6 group-hover:-translate-y-1 group-hover:scale-[1.1] transition-all duration-500">
                <div className="w-16 h-16  flex items-center justify-center mx-auto transition-colors duration-300 relative">
                  <span className="absolute font-sans text-white/30 text-5xl md:text-9xl font-bold text-wrap">
                    <Icon name={icon} className="size-12 md:size-32" />
                  </span>
                  <span className="font-sans text-white text-3xl md:text-5xl font-bold text-center z-20">
                    <Icon name={icon} className="size-8 md:size-12" />
                  </span>
                </div>
              </div>
              <h3 className="font-merriweather text-white text-lg md:text-xl font-semibold text-charcoal mb-3 mt-10 md:mt-20 ">
                {title}
              </h3>
              <p className="text-white/90 text-sm md:text-base leading-relaxed mb-6">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MapFeatures;
