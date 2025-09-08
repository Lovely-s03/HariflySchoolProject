import React from "react";

const Privacy = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 mt-[120px]">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6">PW Privacy Policy</h1>

      {/* Intro */}
      <p className="mb-4">
        Please read the following Privacy policy of the services made available
        on{" "}
        <a
          href="https://www.pw.live"
          className="text-indigo-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.pw.live
        </a>{" "}
        or the equivalent PW Mobile Application available on Google Play,
        ("<b>PW App</b>"/ "<b>Website</b>"). The PW App or Website on which the
        Services are availed may together be referred to for convenience as the{" "}
        <b>“Platform”</b>.
      </p>

      <p className="mb-4">
        Please ensure that this Privacy Policy is perused by You before availing
        any services from Us. This Privacy Policy shall be updated from time to
        time and to stay abreast with our methods of using Your information and
        protecting Your privacy, please keep reviewing this Policy.
      </p>

      <p className="mb-4">
        By viewing the PW Platform, you agree to be bound by the terms of this
        Privacy Policy.
      </p>

      <p className="mb-6">
        By using the PW Platform and/or by providing Your information, You
        consent to the collection and use of the information You disclose on our
        Website in accordance with this Privacy Policy, including but not
        limited to your consent for sharing your information as per this Privacy
        Policy. If we decide to change our Privacy Policy, We will post those
        changes on this page so that You are always aware of what information We
        collect, how We use it, and under what circumstances We disclose it. If
        You do not agree for the forgoing, please do not continue to use or
        access our Website.
      </p>

      {/* Section 1 */}
      <h2 className="text-xl font-semibold mb-4">
        1. Collection of Personally Identifiable Information
      </h2>
      <p className="mb-4">
        1.1 We collect certain information about You to help us serve You
        better. The information collected by Us is of the following nature:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>Name</li>
        <li>Telephone Number</li>
        <li>Email Address</li>
        <li>Service Address</li>
        <li>Other information about the service address which You give Us</li>
        <li>Your IP address</li>
        <li>Information about your device</li>
        <li>Network information</li>
        <li>College/ Institution Details and location</li>
        <li>User uploaded photo and IDs</li>
        <li>Demographic information such as postcode, preferences and interests</li>
        <li>
          Any other personal information which you give us in connection while
          booking a service or is relevant to customer surveys and/or offers.
        </li>
      </ul>
      <p className="mb-4">
        <b>1.2</b> Information provided during Registration to create a profile
        and use this Website and services, you may be asked to provide the
        following information: your name, your username, password, email
        address, the speciality in which you practice or intend to practice
        (selected from a drop-down menu if applicable), year of graduation or
        year of joining undergraduate medical program and the name of your
        college or university. You may also choose to provide a picture to be
        associated with your profile.
      </p>

      {/* Section 1.3 */}
      <p className="mb-4">
        <b>1.3</b> We also provide an option to register using Facebook. If you
        select this option, you allow us to access your profile information
        including the list of your friends. Please note that if you register to
        the Platform through Facebook, You shall be subject to the Terms &
        Conditions and Privacy Policy of Facebook.
      </p>
 <p className="mb-4">
        <b>1.4</b> We will store your username, country and specialty on an
        unencrypted server. Your password is cryptographically hashed and your
        email address is encrypted. These information elements are referred to
        collectively as your “Personal User Information.” We collect and hold
        this information for the purpose of administering your use of the
        Application.
      </p>

      {/* Section 1.5 */}
      <p className="mb-2">
        <b>1.5</b> You are solely responsible for
      </p>
      <ol className="list-decimal list-inside space-y-2 mb-6 ml-4">
        <li>maintaining the strict confidentiality of your Personal User Information</li>
        <li>not allowing another person to use your Personal User Information to access the Services</li>
        <li>any and all damages or losses that may be incurred or suffered as a result of any activities that occur in your Account</li>
        <li>ensuring that the information submitted by you complies with our terms and conditions</li>
        <li>ensuring that the information provided by you is correct and updated from time to time.</li>
      </ol>

      {/* Section 1.6 */}
      <p className="mb-4">
        <b>1.6</b> You agree to immediately notify PW in writing by email to{" "}
        <a
          href="mailto:support@pw.live"
          className="text-indigo-600 underline"
        >
          support@pw.live
        </a>{" "}
        of any unauthorized use of your Personal User Information or any other
        breach of security. PW is not and shall not be liable for any harm
        arising from or relating to the theft of your Personal User Information
        that is under Your control, your disclosure of your Personal User
        Information, or the use of your Personal User Information by another
        person or entity.
      </p>

      {/* Section 1.7 */}
      <p className="mb-4">
        <b>1.7</b> On receiving personal information about You, You no longer
        remain anonymous to Us. We may use this information to do internal
        research on demographics, interests, and behaviour to better understand,
        protect and serve our customers. This information is compiled and
        analysed on an aggregated basis. We indicate fields that are mandatory
        required to be filled and fields that are optional. You may decide
        whether or not to provide such information to Us.
      </p>

      {/* Section 1.8 */}
      <p className="mb-4">
        <b>1.8</b> You may choose not to provide us with any personal
        information or information as required to provide any Services. If we do
        not receive information required, we may choose not to provide you with
        such Service. Service shall have the meaning attributed to the phrase in
        the Terms of Use.
      </p>

      {/* Section 1.9 */}
      <p className="mb-4">
        <b>1.9</b> On our Website, you can browse without telling Us who you are
        or revealing any personal information about Yourself. We may
        automatically track certain information about You based on Your
        behaviour on our Website. This information may include the URL that You
        just came from (whether this URL is on our Website or not), which URL
        You next go to (whether this URL is on our Website or not), Your browser
        information, and Your IP address.
      </p>

      {/* Section 1.10 */}
      <p className="mb-4">
        <b>1.10</b> On our Websites, We use data collection devices such as
        "cookies" on certain pages to help analyse our web page flow, measure
        promotional effectiveness, and promote trust and safety. "Cookies" are
        small files placed on your hard drive that assist Us in providing our
        services. We offer certain features…
      </p>
    </div>
  );
};

export default Privacy;
