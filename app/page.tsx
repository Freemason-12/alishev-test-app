import Image from "next/image";
import { Button } from "@/src/components/Button/Button";
import { BrainCircuit, Cog, Wrench } from "lucide-react";
import { userReviewsMetadata } from "@/src/consts";

export default function Home() {
  return <>
    <header className="bg-[url(/robots.webp)] bg-size-[90vw] bg-no-repeat bg-bottom min-h-screen pb-52">
      <div className="flex justify-between items-center xl:px-49 md:py-12 md:px-24 max-md:flex-col max-md:gap-3 max-sm:p-5">
        <div className="font-montserrat font-medium text-2xl">Robotics AI</div>
        <div className="flex justify-between shrink gap-10 font-clash-grotesk">
          <a href="#advantages">Advantages</a>
          <a href="#reviews">Reviews</a>
          <a href="#contacts">Contact us</a>
        </div>
        <div className="flex gap-4 justify-between">
          <Image src="/mdi_github.svg" alt="Github" width={20} height={20} />
          <Image src="/mdi_discord.svg" alt="Github" width={20} height={20} />
          <Image src="/mdi_reddit.svg" alt="Github" width={20} height={20} />
          <Image src="/mdi_twitter.svg" alt="Github" width={20} height={20} />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center font-montserrat mt-52">
        <h1 className="fancy-gradient text-6xl max-sm:text-5xl text-center font-medium bg-clip-text text-transparent min-h-19 tracking-wide">
          Truly Intelligent
        </h1>
        <h1 className="text-6xl max-sm:text-5xl text-center tracking-wide mb-2 font-medium">With Boston Dynamics.</h1>
        <p className="text-center w-[60vw] mt-1 text-xl tracking-wide">Our robots use Computer Vision algorithms to detect objects and manipulate them with prescision. Full Titanium body makes them resilient towards harsh environments.</p>
        <div className="flex gap-3 mt-8">
          <Button text="Get Started" fancy />
          <Button text="Read More" />
        </div>
      </div>
    </header>

    <main>
      <section id="advantages" className="font-montserrat py-5 px-3">
        <h1 className="text-6xl max-sm:text-4xl font-montserrat text-center my-10">Advantages</h1>
        <div className="mt-5 grid md:grid-cols-3 max-md:grid-rows-3 gap-3">
          <div className="text-center flex flex-col items-center relative">
            <Wrench size={80} className="opacity-20 absolute top-0" />
            <nav className="text-2xl font-bold mt-8 fancy-gradient bg-clip-text text-transparent">Repairable</nav>
            <p>Your robot broke? All the sources are open and parts can be bought from us! Instructions on trubleshooting are included in the manual!</p>
          </div>
          <div className="text-center flex flex-col items-center relative">
            <BrainCircuit size={80} className="opacity-20 absolute top-0" />
            <nav className="text-2xl font-bold mt-8 fancy-gradient bg-clip-text text-transparent">Smart</nav>
            <p>Our robots can do a variety of tasks including taking your dog for a walk, washing dishes, calculating electricity bills and much more!</p>
          </div>
          <div className="text-center flex flex-col items-center relative">
            <Cog size={80} className="opacity-20 absolute top-0" />
            <nav className="text-2xl font-bold mt-8 fancy-gradient bg-clip-text text-transparent">Customizable</nav>
            <p>All the sources and schematics are open! Feel free to make your own circuits and develop your own modifications!</p>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-5">
        <h1 className="text-6xl max-sm:text-4xl font-montserrat text-center my-10">Reviews</h1>

        {userReviewsMetadata.map((review, index) => <script key={index}>{JSON.stringify(review)}</script>)}

        <div className="flex overflow-x-auto gap-3">
          {userReviewsMetadata.map((review, index) => (
            <div key={index} className="border-r-1 border-white/30 p-5 min-w-80">
              <nav className="font-clash-grotesk text-lg text-white/50">
                By { // @ts-expect-error some typing issue with json-ld
                  review.author?.givenName} {review.author?.familyName}
              </nav>
              <nav className="text-xl font-bold fancy-gradient bg-clip-text text-transparent">
                { // @ts-expect-error some typing issue with json-ld
                  review.reviewRating?.ratingValue} out of 5
              </nav>
              <p className="font-space-grotesk"><i>{review.reviewBody as string}</i></p>
            </div>
          ))}
        </div>
      </section>
    </main>

    <footer id="contacts" className="px-10 py-6 flex justify-between max-md:flex-col gap-3">
      <div className="font-montserrat font-medium text-2xl">Robotics AI</div>

      <div className="flex flex-col font-clash-grotesk">
        <a href="#advantages">Advantages</a>
        <a href="#reviews">Reviews</a>
        <a href="#contacts">Contact us</a>
      </div>

      <div className="flex flex-col font-clash-grotesk">
        <nav className="font-semibold">Contact us:</nav>
        <a href="tel:+7(701)-666-66-66">Tel: +7(701)-666-66-66</a>
        <a href="mailto:support@roboticsai.com">support@roboticsai.com</a>
      </div>

      <div className="flex gap-4 shrink">
        <Image src="/mdi_github.svg" alt="Github" width={20} height={20} />
        <Image src="/mdi_discord.svg" alt="Github" width={20} height={20} />
        <Image src="/mdi_reddit.svg" alt="Github" width={20} height={20} />
        <Image src="/mdi_twitter.svg" alt="Github" width={20} height={20} />
      </div>
    </footer>
  </>
}
