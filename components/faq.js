import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-baseLink-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "How many days this campaign runs?",
    answer: "Campaign runs for 108 Days. Starting from 21 June 2023 to 7 Oct 2023",
  },
  {
    question: "Who can Participate or eligible?",
    answer: "Anyone who wishes to enhance their personal peace and contribute to world peace can participate in this program Students, women, and office workers are especially encouraged to take part and support this project.",
  },
  {
    question: "As a individual what should i do after registering? ",
    answer:
      "The project follows the belief that small actions can create a significant impact. Participants are encouraged to spend 5 minutes daily engaging in quiet reflection and creating positive thoughts. By doing so, they not only increase their own inner peace but also contribute to world peace.",
  } 
   
];

export default Faq;