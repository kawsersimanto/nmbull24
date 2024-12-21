'use client'

import Image from 'next/image'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import VisaCardIcon from '../icon/VisaCardIcon'
import { CreditCard } from 'lucide-react'
import BankCardIcon from '../icon/BankCardIcon'

interface PaymentFormProps {
  amount: number
  isOpen: boolean
  onClose: () => void
}

export default function Payments({ amount, isOpen, onClose }: PaymentFormProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <div className="flex justify-center mb-6">
          <Image
            src="/placeholder.svg"
            alt="Expat Global Girls Logo"
            width={150}
            height={60}
            className="h-auto"
          />
        </div>
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold">Payment Method</h2>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Card Information</label>
                <div className="relative">
                  <Input 
                    type="text" 
                    placeholder="4242 4242 4242 4242"
                    className="pr-12"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
          <VisaCardIcon/>
          <CreditCard/>
          <BankCardIcon/>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input type="text" placeholder="MM/YY" />
                  <Input type="text" placeholder="CVC" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Name On Card</label>
                <Input type="text" placeholder="Full name on card" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Country or region</label>
                <Select defaultValue="us">
                  <SelectTrigger>
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                  </SelectContent>
                </Select>
                <Input type="text" placeholder="ZIP" className="max-w-[8rem]" />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Pay ${amount.toFixed(2)}
              </Button>
            </form>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  )
}

