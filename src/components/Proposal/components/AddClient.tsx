import React from 'react'
import { Input } from '@/components/input'
import PhoneInputV2 from '@/components/input/PhoneInputV2'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

type Props = {
  form: any,
  onChangeForm: (action: any) => void,
}

const AddClient = ({
  form,
  onChangeForm,
}: Props) => {

  const handleChange = (value: string, field: string) => {
    onChangeForm(() => ({
      ...form,
      [field]: value,
    }))
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="text-xl font-semibold">New Client</div>
      <form className="flex flex-col gap-6 mb-20">
        <RadioGroup name="genderType" className='flex flex-row gap-4' defaultValue={form.genderType} onValueChange={(value) => handleChange(value, 'genderType')}>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="Mr" id="mr" />
            <Label htmlFor="mr">Mr</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="Mrs" id="mrs" />
            <Label htmlFor="mrs">Mrs</Label>
          </div>
        </RadioGroup>
        <Input
          startIcon={<i className="ri-user-3-line" />}
          placeholder="First name"
          onChange={(e) => handleChange(e.target.value, 'firstName')}
          value={form.firstName}
        />
        <Input
          startIcon={<i className="ri-user-3-line" />}
          placeholder="Last name"
          onChange={(e) => handleChange(e.target.value, 'lastName')}
          value={form.lastName}
        />
        <PhoneInputV2
          initialValue={form.phone}
          onChange={handleChange}
        />
        <Input
          startIcon={<i className="ri-mail-send-line" />}
          placeholder="Email"
          type='email'
          onChange={(e) => handleChange(e.target.value, 'email')}
          value={form.email}
        />
      </form>
    </div>
  )
}

export default AddClient
