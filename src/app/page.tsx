import Hero from "@/components/home/Hero";
import ScrollNarrative from "@/components/home/ScrollNarrative";
import VideoGrid from "@/components/home/VideoGrid";
import ProjectsSlider from "@/components/home/ProjectsSlider";
import SocialProof from "@/components/home/SocialProof";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollNarrative />
      <VideoGrid />
      <ProjectsSlider />
      <SocialProof />
      <CTA />
    </>
  );
}
