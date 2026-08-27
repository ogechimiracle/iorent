const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
async function About() {
     await delay(2000)
  return (
    <div>
      <p>this is about page</p>
    </div>
  );
}

export default About;
