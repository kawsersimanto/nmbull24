import Banner from "@/components/home/Banner";
import { FeatureHome } from "@/components/home/FeatureHome";
import { HomeComuntiy } from "@/components/home/HomeComuntiy";
import { PerfectTraveler } from "@/components/home/PerfectTraveler";
import { WhyChoose } from "@/components/home/WhyChoose/WhyChoose";

const Home = () => {
  return (
    <>
      <Banner />
      <FeatureHome/>
      <HomeComuntiy/>
      <PerfectTraveler/>
      <WhyChoose/>
      
    </>
  );
};

export default Home;
