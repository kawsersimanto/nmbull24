'use client'

import React, { useEffect } from 'react'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useGetSingleDesQuery, useUpdateDestMutation } from '@/redux/Api/destinationApi'

interface Destination {
  id: string
  travelType: string
  TravelBegins: string
  destinationCountry: string
  destinationCity: string
}

const formSchema = z.object({
  travelType: z.string(),
  month: z.string(),
  year: z.string(),
  destinationCountry: z.string(),
  destinationCity: z.string(),
})

interface UpdateDestinationModalProps {
  destinationId: string
  onClose: () => void
}

export const UpdateDestinationModal: React.FC<UpdateDestinationModalProps> = ({ destinationId, onClose }) => {
  console.log(destinationId);

  const { data: singleDestination, isLoading: singleDestLoading, isError: singleDestError } = useGetSingleDesQuery(destinationId)
  const [updateDestination, { isLoading: isUpdating }] = useUpdateDestMutation()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      travelType: '',
      month: '',
      year: '',
      destinationCountry: '',
      destinationCity: '',
    },
  })

  useEffect(() => {
    if (singleDestination) {
      const travelDate = new Date(singleDestination.TravelBegins)
      form.reset({
        travelType: singleDestination.travelType,
        month: (travelDate.getMonth() + 1).toString().padStart(2, '0'),
        year: travelDate.getFullYear().toString(),
        destinationCountry: singleDestination.destinationCountry,
        destinationCity: singleDestination.destinationCity,
      })
    }
  }, [singleDestination, form])

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log("update value",values)
      const TravelBeginsPrev = new Date(`${values.year}-${values.month.padStart(2, "0")}-01T00:00:00.000Z`).toISOString();
      console.log("travel begins",TravelBeginsPrev);

      await updateDestination({
        id: destinationId,
        travelType: values.travelType,
        TravelBegins:"2021-01-15T08:00:00.000Z",
        destinationCountry: values.destinationCountry,
        destinationCity: values.destinationCity,
      }).unwrap()
      onClose()
    } catch (error) {
      console.error('Failed to update destination:', error)
    }
  }

  if (singleDestLoading) {
    return <DialogContent>Loading...</DialogContent>
  }

  if (singleDestError) {
    return <DialogContent>Error loading destination data</DialogContent>
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Update Destination</DialogTitle>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="travelType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Travel Type (Lease Duration)</FormLabel>
                <Select onValueChange={field.onChange} value={field.value || ''}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select travel type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Scouting Trip (1-8 wks)">Scouting Trip (1-8 wks)</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <FormLabel>Travel Begins</FormLabel>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="month"
                render={({ field }) => (
                  <FormItem>
                    <Select onValueChange={field.onChange} value={field.value || ''}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Month" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                          <SelectItem key={month} value={month.toString().padStart(2, '0')}>
                            {month.toString().padStart(2, '0')}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="year"
                render={({ field }) => (
                  <FormItem>
                    <Select onValueChange={field.onChange} value={field.value || ''}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Year" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {["2024", "2025", "2026"].map((year) => (
                          <SelectItem key={year} value={year}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="destinationCountry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Destination Country</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value || ''}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Dubai">Dubai</SelectItem>
                      <SelectItem value="Dhaka">Dhaka</SelectItem>

                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="destinationCity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Destination City</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value || ''}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select city" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Dubai">Dubai</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" disabled={isUpdating}>
            {isUpdating ? 'Updating...' : 'Update Destination'}
          </Button>
        </form>
      </Form>
    </DialogContent>
  )
}
