import bannerImage from "@/assets/home/banner.webp";
import RegisterForm from "@/components/register/RegisterFrom";

const Banner = () => {
  return (
    <div
      className="md:pt-[208px] pt-[160px] pb-[110px] md:pb-[168px] banner bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bannerImage.src})` }}
    >
      <div className="container">
        <div className="grid grid-cols-2 gap-10 text-white">
          <div>
            <h1 className="text-[54px] font-bold leading-[1.2] mb-7">
              Stay with local and meet travel partner
            </h1>
            <p className="max-w-[500px] before:content-[''] before:h-[3px] before:w-[56px] before:flex-shrink-0 before:inline-block flex before:mt-[10px] gap-3 before:bg-[#D9D9D9] before:rounded-xl">
              Share your journey, save on stays, and find your perfect travel
              companion your adventure starts now
            </p>
          </div>
          <div>
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
