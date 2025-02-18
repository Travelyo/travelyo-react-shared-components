import React from 'react'
import { Input } from '@/components/input'
import PhoneInputV2 from '@/components/input/PhoneInputV2'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useProposalContext } from '../proposalContext'

type Props = {}

const AddClient = (props: Props) => {
  const { state, dispatch } = useProposalContext()

  const handleChange = (value: string, field: string) => {
    dispatch({ type: 'UPDATE_CLIENT_FORM', field, value })
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="text-xl font-semibold">New Client</div>
      <form className="flex flex-col gap-6 mb-20">
        <RadioGroup name="genderType" className='flex flex-row gap-4' defaultValue={state.clientForm.title} onValueChange={(value) => handleChange(value, 'genderType')}>
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
          value={state.clientForm.firstName}
        />
        <Input
          startIcon={<i className="ri-user-3-line" />}
          placeholder="Last name"
          onChange={(e) => handleChange(e.target.value, 'lastName')}
          value={state.clientForm.lastName}
        />
        <PhoneInputV2
          initialValue={state.clientForm.phone}
          onChange={handleChange}
        />
        <Input
          startIcon={<i className="ri-mail-send-line" />}
          placeholder="Email"
          type='email'
          onChange={(e) => handleChange(e.target.value, 'email')}
          value={state.clientForm.email}
        />
      </form>
    </div>
  )
}

export default AddClient
