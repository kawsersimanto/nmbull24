"use client"
import { useGetTalkingPointsQuery } from '@/redux/Api/talkingPointsApi';
import React from 'react'

export const TalkingPointsView = () => {
  const { data, isLoading, isError } = useGetTalkingPointsQuery(undefined);

  // If data is not available, or there's an error
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading data.</div>;

  // Extract the talking points data
  const talkingPointsData = data?.data?.[0]; // Assuming the first item in the data array

  // Array of questions to display dynamically from the API response
  const questionsAndAnswers = [
    {
      question: "How would you rate your level of cleanliness?",
      answer: talkingPointsData?.cleanlinessLevel || "Not available",
    },
    {
      question: "How would you describe your approach to cooking?",
      answer: talkingPointsData?.cookingHabit || "Not available",
    },
    {
      question: "How would you describe your relationship with a housemate?",
      answer: talkingPointsData?.houseMateRelation || "Not available",
    },
    {
      question: "How often do you host friends or gatherings?",
      answer: talkingPointsData?.hostFriend || "Not available",
    },
    {
      question: "What's your sleep schedule?",
      answer: talkingPointsData?.sleepSchedule || "Not available",
    },
    {
      question: "How often do you use tobacco or vaping products?",
      answer: talkingPointsData?.vapingProduct || "Not available",
    },
    {
      question: "How would you describe your financial habits?",
      answer: talkingPointsData?.financialHabit || "Not available",
    },
    {
      question: "How would you describe your style of communication?",
      answer: talkingPointsData?.communicationStyle || "Not available",
    },
    {
      question: "Are you pet friendly?",
      answer: talkingPointsData?.petFriendlyDescription || "Not available",
    },
    {
      question: "What's your typical work routine?",
      answer: talkingPointsData?.workRoutine || "Not available",
    },
    {
      question: "How often do you consume alcohol?",
      answer: talkingPointsData?.consumeAlcohol || "Not available",
    },
    {
      question: "How would you describe your use of drugs?",
      answer: talkingPointsData?.drugDescription || "Not available",
    },
    {
      question: "Are you willing to provide/exchange screening reports to a potential housemate? (e.g., Background check, Credit check, Tenant history)",
      answer: talkingPointsData?.screeningReports || "Not available",
    },
    {
      question: "Are you open to having conversations regarding health matters (physical, mental)?",
      answer: talkingPointsData?.healthConversations || "Not available",
    },
    {
      question: "How would you describe your Religious/Spiritual beliefs and practices?",
      answer: talkingPointsData?.religiousBeliefs || "Not available",
    },
    {
      question: "Do you have any allergies? If so, please list them here: Ex., Airborne allergens, Foods, Nuts, Latex, Pets/Animals, Insects, etc.",
      answer: talkingPointsData?.allergies || "Not available",
    },
    {
      question: "Anything else?",
      answer: talkingPointsData?.additionalInfo || "Not available",
    },
  ];

  return (
    <div>
      <section>
        <div className="mt-16">
          <h2 className="font-sans text-xl sm:text-2xl md:text-3xl font-bold text-[#1D2939] text-center md:text-left">
            Talking points
          </h2>

          <div className="flex flex-col md:flex-row justify-between mt-7 text-gray-800">
            <div className="mb-6 md:mb-0 md:w-1/2">
              {questionsAndAnswers.slice(0, 6).map((item, index) => (
                item.answer !== "Not available" && (
                  <div key={index}>
                    <h3 className="font-semibold text-[18px] sm:text-[20px] md:text-[18px] mb-3 text-[#344054]">
                      {item.question}
                    </h3>
                    <p className="text-[18px] sm:text-[20px] md:text-[18px] text-[#475467] font-normal mb-7">
                      {item.answer}
                    </p>
                  </div>
                )
              ))}
            </div>

            <div className="md:w-1/2">
              {questionsAndAnswers.slice(6).map((item, index) => (
                item.answer !== "Not available" && (
                  <div key={index}>
                    <h3 className="font-semibold text-[18px] sm:text-[20px] md:text-[18px] mb-3 text-[#344054]">
                      {item.question}
                    </h3>
                    <p className="text-[18px] sm:text-[20px] md:text-[18px] text-[#475467] font-normal mb-7">
                      {item.answer}
                    </p>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="mt-12">
  <div>
    {questionsAndAnswers.slice(12).map((item, index) => (
      item.answer !== "Not available" && (
        <div className="mb-6" key={index}>
          <h3 className="font-semibold text-[16px] sm:text-[18px] mb-3 text-[#344054]">
            {item.question}
          </h3>
          <p className="text-[16px] sm:text-[18px] text-[#475467] font-normal mb-7">
            {item.answer}
          </p>
        </div>
      )
    ))}
  </div>

  <div>
    {questionsAndAnswers.slice(12, 15).map((item, index) => (
      <div key={index}>
        <label className="block text-gray-800 font-semibold mb-2 text-[16px] sm:text-[18px]">
          {item.question}
        </label>
        <textarea
          defaultValue={item.answer}
          placeholder="Please share here..."
          readOnly // Make this textarea read-only
          className="w-full min-h-[120px] p-3 bg-gray-100 border placeholder:text-[#98A2B3] placeholder:text-xl placeholder:font-normal border-gray-300 rounded-lg text-[#475467] text-[16px] resize-none focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
    ))}
  </div>
</section>

    </div>
  );
}
