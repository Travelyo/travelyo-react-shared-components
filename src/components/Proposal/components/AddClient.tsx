import Input from '@/components/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import React from 'react'

type Props = {}

const AddClient = (props: Props) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="text-xl font-semibold">New Client</div>
      <div className="flex flex-col gap-6">
        <RadioGroup defaultValue="option-one" className='flex flex-row gap-4'>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="mr" id="mr" />
            <Label htmlFor="mr">Mr</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="mrs" id="mrs" />
            <Label htmlFor="mrs">Mrs</Label>
          </div>
        </RadioGroup>
        <Input
          startIcon={<i className="ri-user-3-line" />}
          placeholder="First name"
        />
        <Input
          startIcon={<i className="ri-user-3-line" />}
          placeholder="Last name"
        />
        <Input
          startIcon={<i className="ri-mail-send-line" />}
          placeholder="Email"
        />
      </div>
    </div>
  )
}

export default AddClient
