import { useForm } from "react-hook-form";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useStopwatch } from "react-timer-hook";

const mcqs = () => {
  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: true });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [result, setResult] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const questions = [
    {
      question: `_______ is a large language model chatbot developed by OpenAI based on GPT-3.5 `,
      options: ["ChatGPT", "DALL-E", "Midjourney", "Bard"],
      answer: "ChatGPT",
    },
    {
      question: `DALL-E was named after?`,
      options: [
        "Salvador Dalí and Pixar’s WALL-E",
        "Leonardo da vinci",
        "John McCarthy",
        "Sam Altman",
      ],
      answer: "Salvador Dalí and Pixar’s WALL-E",
    },
    {
      question: `_______  created a Discord community with bots that can turn your text into images in less than a minute.`,
      options: ["DALL-E", "ChatGPT", "Midjourney", "Bard"],
      answer: "Midjourney",
    },
    {
      question: `_______  is a method for creating images from text prompts. It works by adding random noise to a set of training images, then learning how to remove noise to construct the desired image.`,
      options: ["Diffusion model", "Deep Fake model", "GPT model", "AI model"],
      answer: "Diffusion model",
    },
  ];

  const [currentQ, setCurrentQ] = useState(1);
  const handleNext = () => {
    if (currentQ < questions.length) {
      setCurrentQ((prev) => prev + 1);
    }
  };
  const handlePrev = () => {
    if (currentQ > 1) {
      setCurrentQ((prev) => prev - 1);
    }
  };

  const handleForm = (data) => {
    let correct = 0;
    questions.map((q, i) => {
      if (q.answer == data[i]) {
        correct += 1;
      }
    });
    setResult(correct);
    pause();
    setIsSubmitted(true);
  };

  return (
    <main className="px-12">
      <section className="flex flex-col md:flex-row gap-y-8 md:gap-y-0 mb-8 items-start md:items-end justify-between px-8">
        <div className="flex flex-col lg:flex-row  items-start lg:items-end gap-x-4 ">
          <h1 className="text-secondary-foreground">Retention Test</h1>
          <p className="text-2xl opacity-50">MCQs based questions only</p>
        </div>
        <div className=" border-t-2 border-l-2 rounded-xl border-secondary-foreground p-2 flex justify-center gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            className="fill-secondary-foreground"
            viewBox="0 0 16 16"
          >
            <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z" />
            <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z" />
          </svg>
          <div className="font-medium text-xl ">
            <span className=" text-3xl font-semibold text-secondary-foreground">
              {hours}:{minutes}:{seconds}
            </span>{" "}
            <span className=" text-white text-opacity-50">left</span>
          </div>
        </div>
      </section>
      <section className="relative">
        <div className=" pb-24 border-2 rounded-3xl flex px-10 py-12">
          {!isSubmitted ? (
            <form
              onSubmit={handleSubmit((data) => handleForm(data))}
              className="flex-[2] "
            >
              {questions
                .map((question, QIndex) => (
                  <div key={QIndex} className="flex mb-6 pr-6 gap-y-8 flex-col">
                    <h4 className="text-3xl">
                      {QIndex + 1}. {question.question}
                    </h4>
                    <div className="flex gap-y-3 flex-col">
                      {question.options.map((opt, OIndex) => (
                        <label htmlFor={`${QIndex}${OIndex}`} key={OIndex}>
                          <input
                            type="radio"
                            className="mr-4"
                            id={`${QIndex}${OIndex}`}
                            name={`${QIndex}`}
                            value={opt}
                            {...register(`${QIndex}`)}
                          />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>
                    <div>
                      {QIndex + 1 == questions.length && (
                        <button className={buttonVariants()} type="submit">
                          Submit
                        </button>
                      )}
                    </div>
                  </div>
                ))
                .filter((q, i) => i + 1 == currentQ)}
            </form>
          ) : (
            <div>
              <h4 className="text-3xl mb-8">Thanks for Submitting!</h4>
              <p className="mb-4">
                Total time take: {hours}:{minutes}:{seconds}
              </p>
              <p>Number of correct Answers: {result}</p>
            </div>
          )}
          <div className=" hidden md:block md:flex-1"></div>
        </div>
        {!isSubmitted && (
          <div className="flex mt-6 mb-12 justify-center md:justify-between items-center gap-x-12 ">
            <button
              onClick={() => {
                handlePrev();
              }}
              disabled={currentQ == 1}
              className={cn(
                buttonVariants({ variant: "secondary" }),
                "disabled:cursor-not-allowed disabled:opacity-50 hidden md:block"
              )}
            >
              Back [{currentQ > 1 ? currentQ - 1 : currentQ}]
            </button>

            <div className="flex gap-x-12 justify-between items-center">
              <button
                className="disabled:cursor-not-allowed disabled:opacity-50"
                disabled={currentQ == 1}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  onClick={() => {
                    handlePrev();
                  }}
                  className="fill-white hover:fill-secondary-foreground hover:bg-white rounded-full"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
                  />
                </svg>
              </button>
              <span>
                {currentQ}/{questions.length}
              </span>
              <button
                className="disabled:cursor-not-allowed disabled:opacity-50"
                disabled={currentQ == questions.length}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  onClick={() => {
                    handleNext();
                  }}
                  className=" fill-white hover:fill-secondary-foreground hover:bg-white rounded-full"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                  />
                </svg>
              </button>
            </div>
            <button
              disabled={currentQ == questions.length}
              onClick={() => {
                handleNext();
              }}
              className={cn(
                buttonVariants({ variant: "secondary" }),
                "disabled:cursor-not-allowed disabled:opacity-50 hidden md:block"
              )}
            >
              Next [{currentQ < questions.length ? currentQ + 1 : currentQ}]
            </button>
          </div>
        )}
      </section>
    </main>
  );
};

export default mcqs;
