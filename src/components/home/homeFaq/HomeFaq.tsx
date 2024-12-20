'use client'

import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Plus, Minus } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "What service does Expat Global Girls provide?",
    answer: "Expat Global Girls is a dedicated platform for women who are relocating, traveling, or cruising abroad. It helps members find compatible travelers to share living accommodations, save costs, enhance safety, and combat loneliness. Members connect with like-minded women who share their journey and values, making their time abroad more enjoyable and affordable. Members also gain access to a storehouse of resources, information and contacts – all useful services related to their journey."
  },
  {
    question: "Is Expat Global Girls a dating website?",
    answer: "No, this is not a dating website, nor should it be used with any such intentions. See: FAQs > What service does Expat Global Girls provide?"
  },
  {
    question: "What is House-Sharing?",
    answer: "House-Sharing is, \"a living arrangement in which two or more unrelated people share a house or apartment.\"  It can also include other types of living quarters such as: condos, hotel rooms, and cruise ship cabins. -source: HUDuser.gov"
  },
  {
    question: "Who can use this service?",
    answer: "Expat Global Girls is a safe, supportive and inclusive space for women, regardless of race, ethnicity, nationality, orientation or religion. You must be at least 21 years old to join this Website. This Website and its associated services are exclusively designed for individuals who identify as women. By registering for an account, You affirm that Your gender identity aligns with this eligibility requirement. This policy is implemented to create a safe, supportive, and inclusive community tailored to the unique needs and experiences of women, in alignment with applicable laws. By registering, you affirm that all information you provide, including identification documents and social media account links, are accurate and truthful. B&B Global Ventures, LLC., reserves the right to refuse service to any individual at its sole discretion."
  },
  {
    question: "What's included in the membership?",
    answer: "Access to our member directory, our match-finding technology, chat features, conversation starters/talking points, screening services, and tons of travel & relocation resources."
  },
  {
    question: "What are the membership levels and costs?",
    answer: "Standard membership - $12 / monthly\nBusiness membership - $18 / monthly – this affords entrepreneurs an opportunity to showcase and network their business within the community.\n-Powered by Stripe"
  },
  {
    question: "What is the refund and cancellation policy?",
    answer: "Monthly Subscriptions: You may cancel your membership for any reason before the start of the next billing cycle. If your cancellation request is not submitted in time, your membership may be renewed, and you may be charged for the following month. Please note that charges for the renewed period will not be refundable. However, you will retain full access to the Service for the duration of the paid membership period.\nMembership Commitment: This cancellation policy applies only to members currently within their membership commitment. Early cancellation does not entitle members to a refund for any unused portion of the membership period.\nHow to Cancel: To cancel your membership, visit your profile on the membership platform or send an email request to us here. Ensure you include your membership details to avoid delays in processing."
  },
  {
    question: "How can I contact Expat Global Girls?",
    answer: "You can reach out to us here."
  },
]

export default function HomeFaq() {
  const [expandedItem, setExpandedItem] = React.useState<string | undefined>(undefined)

  return (
    <div className="mx-auto px-4 mt-[160px] container">
      <h1 className="mb-4 text-center lg:text-5xl text-3xl font-bold text-gray-900">FAQs</h1>
      <p className="mb-8 text-center text-gray-800 mt-[24px]">
        If you have any questions that aren&apos;t listed below, please send your question to:
        <a href="mailto:info@ExpatGlobalGirls.com" className="text-gray-800 hover:underline ml-1">
          info@ExpatGlobalGirls.com
        </a>
      </p>

      <Accordion
        type="single"
        collapsible
        value={expandedItem}
        onValueChange={(value) => setExpandedItem(value)}
        className="space-y-4"
      >
        {faqs.map((faq, index) => {
          const itemValue = `item-${index}`
          return (
            <AccordionItem
              key={index}
              value={itemValue}
              className="rounded-lg bg-[#fff] px-6 py-4"
            >
              <AccordionTrigger className="flex items-center justify-between">
                <span className="text-left text-lg font-[500] text-[#212121]">
                  {faq.question}
                </span>
                <div className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full">
                  {expandedItem !== itemValue && (
                    <Plus className="transition-all duration-200" size={16} />
                  )}
                  {expandedItem === itemValue && (
                    <Minus className="transition-all duration-200" size={16} />
                  )}
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 text-[18px] text-[#949494] font-[400]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
    </div>
  )
}

