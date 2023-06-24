import Link from "next/link";

export default function Home() {
  return (
    <main className=" px-4 [&>*]:mb-12">
      <section className="flex md:items-center items-start gap-y-6 md:gap-y-0 flex-col md:flex-row md:justify-between px-8">
        <div>
          <h1 className=" text-secondary-foreground">Read More</h1>
          <p className="text-2xl">
            <span className="opacity-50">Powered by</span>{" "}
            <span className="opacity-100">The Debating Society</span>
          </p>
        </div>
        <div className="flex justify-center gap-2 items-center">
          <div className="font-medium text-xl ">
            <h3>
              <span className=" text-3xl font-semibold text-secondary-foreground">
                21:31:04
              </span>{" "}
              <span className=" text-white text-opacity-50">left</span>
            </h3>
            <p>Preparation Time</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="47"
            height="47"
            className="fill-secondary-foreground"
            viewBox="0 0 16 16"
          >
            <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z" />
            <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z" />
          </svg>
        </div>
      </section>
      <section className=" relative">
        <div className="bg-black flex-col-reverse md:flex-row gap-y-6 md:gap-y-0 flex px-6 py-12">
          <div className="flex flex-[2] pr-6 gap-y-8 flex-col">
            <h4 className="text-3xl">
              What is generative AI, and why is it suddenly everywhere?
            </h4>
            <p>
              Even amidst the most dismal tech-turndown, Generative AI is
              creating waves in the Silicon Valley by making it possible for
              anyone to create new, original illustrations and text by simply
              sending a few instructions to a computer program. Beginning in
              January 2021, advances in AI research resulted in a slew of
              deep-learning models capable of generating original images from
              simple text prompts, effectively extending the human imagination.
              In 2022, Meta pushed releases of both Blenderbot and Cicero, while
              OpenAI ended the year with a bang with the release of ChatGPT.
              Generative AI has already created a paradigm shift and is here to
              stay but like any other automated systems trained on historical
              data and internet images, it also comes with risks that have yet
              not been resolved. It’ll be interesting to see how this technology
              progresses in the coming time.
            </p>
          </div>
          <div className="flex justify-center items-center flex-1">
            <iframe
              className="w-full h-full aspect-video"
              src="https://www.youtube.com/embed/SVcsDDABEkM"
            />
          </div>
        </div>
        <footer className="flex bg-gradient-to-b from-[#000000a6] to-[#79797918] h-20 w-full absolute bottom-0 ">
          <Link
            href={"/mcqs"}
            className="flex flex-[2] hover:underline items-center justify-center gap-x-4"
          >
            <span>Read More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              className="fill-white mt-1 "
              viewBox="0 0 16 16"
            >
              <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
            </svg>
          </Link>
          <div className="flex-1"></div>
        </footer>
      </section>
    </main>
  );
}
