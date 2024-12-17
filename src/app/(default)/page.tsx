import Banner from "@/components/home/Banner";
import { FeatureHome } from "@/components/home/FeatureHome";
import { HomeComuntiy } from "@/components/home/HomeComuntiy";
import HomeFaq from "@/components/home/homeFaq/HomeFaq";
import HowItWork from "@/components/home/howItWorks/HowItWork";
import { PerfectTraveler } from "@/components/home/PerfectTraveler";
import { Testimonial } from "@/components/home/testimonial/Testimonial";
import { WhyChoose } from "@/components/home/WhyChoose/WhyChoose";

const Home = () => {
  return (
    <>
      <Banner />
      <FeatureHome/>
      <HomeComuntiy/>
      <PerfectTraveler/>
      <WhyChoose/>
      <HowItWork/>
      <Testimonial/>
      <HomeFaq/>
      
    </>
  );
};

export default Home;
