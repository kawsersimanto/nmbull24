import React from 'react'

export const TalkingPointsView = () => {
  return (
    <div>
        
      <section>
        <div className="mt-16">
          <h2 className="font-sans text-xl sm:text-2xl md:text-3xl font-bold text-[#1D2939] text-center md:text-left">
            Talking points
          </h2>

          <div className="flex flex-col md:flex-row justify-between mt-7 text-gray-800">
            <div className="mb-6 md:mb-0 md:w-1/2">
              {[
                {
                  question: "How would you rate your level of cleanliness?",
                  answer: "My space is consistently immaculate",
                },
                {
                  question: "How would you describe your approach to cooking?",
                  answer: "I prefer to order food or dine out",
                },
                {
                  question:
                    "How would you describe your relationship with a housemate?",
                  answer: "We'll become close friends",
                },
                {
                  question: "How often do you host friends or gatherings?",
                  answer: "My door is always open",
                },
                {
                  question: "What's your sleep schedule?",
                  answer: "I go to bed early and wake up early",
                },
                {
                  question: "How often do you use tobacco or vaping products?",
                  answer: "I don't use tobacco or vape",
                },
              ].map((item, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-[18px] sm:text-[20px] md:text-[18px] mb-3 text-[#344054]">
                    {item.question}
                  </h3>
                  <p className="text-[18px] sm:text-[20px] md:text-[18px] text-[#475467] font-normal mb-7">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="md:w-1/2">
              {[
                {
                  question: "How would you describe your financial habits?",
                  answer: "I'm very disciplined and always stick to a budget",
                },
                {
                  question:
                    "How would you describe your style of communication?",
                  answer:
                    "I'm clear and direct, always getting straight to the point",
                },
                {
                  question: "Are you pet friendly?",
                  answer: "I welcome pets and am pet friendly.",
                },
                {
                  question: "What's your typical work routine?",
                  answer: "It's demanding; I'm often at work",
                },
                {
                  question: "How often do you consume alcohol?",
                  answer: "I don't drink at all",
                },
                {
                  question: "How would you describe your use of drugs?",
                  answer: "I don't use any drugs",
                },
              ].map((item, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-[18px] sm:text-[20px] md:text-[18px] mb-3 text-[#344054]">
                    {item.question}
                  </h3>
                  <p className="text-[18px] sm:text-[20px] md:text-[18px] text-[#475467] font-normal mb-7">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
