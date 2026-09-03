import Image from "next/image";
import Link from "next/link";

interface AboutPageProps {
  title?: string;
  subtitle?: string;
  homeLabel?: string;
  currentPage?: string;
  image?: string;
}

const PageHero = ({
  title = "About Us",
  subtitle = "Get the latest news, updates and tips",
  homeLabel = "Home",
  currentPage = "About Us",
  image = "/images/about-banner.png",
}: AboutPageProps) => {
  return (
    <section
      className="relative h-[450px] mt-2 ml-5 mr-5 flex items-center justify-content-center overflow-hidden 
    rounded-[10px]"
    >
      <Image
        src={image}
        alt={`${title} banner`}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent" />

      <div className="absolute left-[8%] top-1/2 z-10 text-white">
        <h1 className="text-4xl font-bold sm:text-5xl">{title}</h1>

        <p className="mt-3 text-base font-normal sm:text-lg">{subtitle}</p>
      </div>

      <div className="absolute bottom-0 left-1/2 z-20 -translate-x-1/2">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-5 rounded-[10px] bg-black px-4 py-2 text-sm text-white shadow-lg mb-2"
        >
          <Link href="/">
            <span className="font-normal hover:text-green-500">
              {homeLabel}
            </span>
          </Link>
          <span
            aria-hidden="true"
            className="text-xl leading-none text-gray-500"
          ></span>

          <span className="font-normal hover:text-green-500">
            {currentPage}
          </span>
        </nav>
      </div>

      <div>
        <div className="px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold">Welcome to our website</h2>

            <p className="mt-4 text-gray-600">
              We are a team of passionate individuals dedicated to providing the
              best service possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PageHero;
