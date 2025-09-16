import React from "react";

const AboutPWCentres = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-8">
        About PW Centres
      </h2>

      {/* Content */}
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          <strong>Physics Wallah Vidyapeeth and Pathshalla Centres in India</strong>
        </p>
        <p>
          Physics Wallah is an affordable educational platform in India. It offers
          two types of classes for students: Vidyapeeth, which is offline, and
          Pathshala, a hybrid of online and offline. These classes aim to prepare
          students for tough competitive exams like JEE and NEET.
        </p>
        <p>
          Currently, PW has over 150 Vidyapeeth and Pathshala centres across 20
          states of India. This initiative aims to promote learning and academic
          excellence in various communities, including big cities like New Delhi,
          Noida, Faridabad, Pune, and Mumbai.
        </p>
        <p>
          Both Vidyapeeth and Pathshala offer a unique learning environment with
          features like smart classrooms, personalised attention to students,
          doubt-solving sessions, interactive learning sessions, personal mentors
          for growth, and exceptional academic support.
        </p>
        <p>
          Physics Wallah at Vidyapeeth and Pathshala provides several advantages to
          enhance student's learning journey:
        </p>

        {/* Advantages List */}
        <div className="space-y-4">
          <p>
            <span className="font-semibold">Solid Foundation:</span> The courses are
            designed to build strong foundations, starting from the basics.
            Students can gain a deep understanding of concepts and get immediate
            help from approachable faculty.
          </p>
          <p>
            <span className="font-semibold">Hybrid / Offline Learning Session:</span>{" "}
            Vidyapeeth centres offer offline learning to its students in hi-tech
            smart classrooms for an in-depth understanding of the concepts.
            Pathshala centres, on the other hand, provide flexible learning
            options, allowing students to choose between attending classes in person
            and online to suit their schedule.
          </p>
          <p>
            <span className="font-semibold">Competitive Spirit:</span> A
            comprehensive test series fuels a healthy competitive spirit,
            encouraging students to keep improving.
          </p>
          <p>
            Students learn from instructors who simplify complex concepts. The study
            materials align with the latest exam patterns and include detailed
            subject-wise analyses through regular testing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPWCentres;
