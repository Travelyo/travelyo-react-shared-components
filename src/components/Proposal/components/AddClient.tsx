import React, { FormEvent } from 'react'
import { Input } from '@/components/input'
import PhoneInputV2 from '@/components/input/PhoneInputV2'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

type Props = {}

const AddClient = (props: Props) => {
  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log(e.target)
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="text-xl font-semibold">New Client</div>
      <form className="flex flex-col gap-6" onSubmit={handleFormSubmit}>
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
        <PhoneInputV2 />
        <Input
          startIcon={<i className="ri-mail-send-line" />}
          placeholder="Email"
        />
      </form>
    </div>
  )
}

export default AddClient
