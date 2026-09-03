import PageHero from "@/components/car-ui/sectionHero";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
async function About() {
     await delay(2000)
  return (
    <div>
      <PageHero image="/images/abt.jpg"/>
      <p>this is about page</p>
    </div>
  );
}

export default About;
