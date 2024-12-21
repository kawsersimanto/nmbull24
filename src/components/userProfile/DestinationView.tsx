'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import logo from "@/assets/profile/tabler_edit.png"
import { useGetDestinationQuery } from '@/redux/Api/destinationApi'
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { UpdateDestinationModal } from './UpdateDestinationModal'

interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  haveRoom: boolean
}

interface Destination {
  id: string
  travelType: string
  TravelBegins: string
  destinationCountry: string
  destinationCity: string
  user: User
}

export const DestinationView: React.FC = () => {
  const { data, isLoading, isError } = useGetDestinationQuery(undefined)
  
  const [selectedDestinationId, setSelectedDestinationId] = useState<string | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  if (isLoading) {
    return <p className="text-center mt-10">Loading...</p>
  }

  if (isError || !data) {
    return <p className="text-center mt-10 text-red-500">Failed to fetch destinations.</p>
  }

  const handleCloseDialog = () => {
    setIsDialogOpen(false)
    setSelectedDestinationId(null)
  }

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4 mt-[68px] text-center md:text-left">
        My Destinations
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {data?.data?.data.map((destination: Destination, index: number) => (
          <div
            key={destination.id}
            className="max-w-full sm:max-w-[383px] border border-solid border-gray-300 rounded-xl p-[14px]"
          >
            <div className="flex items-center justify-between">
              <div className="text-[#1D2939] font-semibold font-sans text-[16px] sm:text-[18px]">
                <h2>Destination #{index + 1}</h2>
              </div>
              <div>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button 
                      variant="outline" 
                      className="flex items-center justify-center gap-2 px-2 py-1 border border-solid border-gray-300 rounded-lg"
                      onClick={() => setSelectedDestinationId(destination.id)}
                    >
                      <Image src={logo} alt="Update icon" />
                      Update
                    </Button>
                  </DialogTrigger>
                  {selectedDestinationId && (
                    <UpdateDestinationModal 
                      destinationId={selectedDestinationId} 
                      onClose={handleCloseDialog}
                    />
                  )}
                </Dialog>
              </div>
            </div>
            <hr className="bg-gray-300 mt-3" />
            <div>
              <p className="font-sans text-[#344054] font-medium text-[16px] sm:text-[18px] mt-4">
                My travel type:{" "}
                <span className="text-[#475467] font-normal">
                  {destination.travelType || "N/A"}
                </span>
              </p>
              <p className="font-sans text-[#344054] font-medium text-[16px] sm:text-[18px] mt-4">
                My travel begins:{" "}
                <span className="text-[#475467] font-normal">
                  {/* {new Date(destination.TravelBegins).toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })} */}
                  {(destination.TravelBegins)}
                </span>
              </p>
              <p className="font-sans text-[#344054] font-medium text-[16px] sm:text-[18px] mt-4">
                Destination country:{" "}
                <span className="text-[#475467] font-normal">
                  {destination.destinationCountry || "N/A"}
                </span>
              </p>
              <p className="font-sans text-[#344054] font-medium text-[16px] sm:text-[18px] mt-4">
                Destination city:{" "}
                <span className="text-[#475467] font-normal">
                  {destination.destinationCity || "N/A"}
                </span>
              </p>
              <p className="font-sans text-[#344054] font-medium text-[16px] sm:text-[18px] mt-4">
                Have room:{" "}
                <span className="text-[#475467] font-normal">
                  {destination.user?.haveRoom ? "Yes" : "No"}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

