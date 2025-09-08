import React from "react";
import CommonTable from "./CommonTable";

const List = () => {
  return (
    <section className=" max-w-6xl mx-auto w-full bg-white py-5 px-4">
      <div className=" mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          IIT JEE Main 2026 Exam Dates
        </h2>
        <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
          National Testing Agency (NTA) releases the official exam schedule along
          with IIT JEE Main 2026 Exam Dates on their website at{" "}
          <a
            href="https://jeemain.nta.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            IITJEEmain.nta.ac.in
          </a>
          , where students can check all key dates related to the exam, such as
          registration, admit card release, exam days, result announcements, and
          more. NTA announces each session’s schedule separately as per their
          timelines.
        </p>
      </div>
      <CommonTable/>
    </section>
  );
};

export default List;
