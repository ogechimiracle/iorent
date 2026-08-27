const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
export default async function GallaryPage() {
     await delay(2000)
  return (
    <div>
      <h1>this is gallary page</h1>
    </div>
  );
}
