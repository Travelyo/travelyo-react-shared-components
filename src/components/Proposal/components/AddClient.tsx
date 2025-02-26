import React, { useEffect, useState } from 'react'
import { Input } from '@/components/input'
import PhoneInputV2 from '@/components/input/PhoneInputV2'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import t from '@/services/translatorService'

type Props = {
  form: any,
  onChangeForm: (action: any) => void,
  errors: any,
}

const AddClient = ({
  form,
  onChangeForm,
  errors: serverErrors,
}: Props) => {
  const [errors, setErrors] = useState(serverErrors)

  useEffect(() => {
    setErrors(serverErrors)
  }, [serverErrors])

  const handleChange = (value: string, field: string) => {
    onChangeForm(() => ({
      ...form,
      [field]: value,
    }))
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="text-xl font-semibold">{t('common.proposals.newClient')}</div>
      <form className="flex flex-col gap-6 mb-20">
        <div>
          <RadioGroup name="genderType" className='flex flex-row gap-4' defaultValue={form.genderType} onValueChange={(value) => handleChange(value, 'genderType')}>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="Mr" id="mr" />
              <Label htmlFor="mr">{t('common.proposals.addClient.mr')}</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="Miss" id="miss" />
              <Label htmlFor="miss">{t('common.proposals.addClient.miss')}</Label>
            </div>
          </RadioGroup>
          {errors?.genderType && <div className="text-error-dark text-sm">{errors.genderType}</div>}
        </div>
        <Input
          startIcon={<i className="ri-user-3-line" />}
          placeholder={t('common.proposals.addClient.firstName')}
          onChange={(e) => handleChange(e.target.value, 'firstName')}
          value={form.firstName}
          error={errors?.firstName}
        />
        <Input
          startIcon={<i className="ri-user-3-line" />}
          placeholder={t('common.proposals.addClient.lastName')}
          onChange={(e) => handleChange(e.target.value, 'lastName')}
          value={form.lastName}
          error={errors?.lastName}
        />
        <PhoneInputV2
          initialValue={form.phone}
          onChange={handleChange}
          error={errors?.phone}
          placeholder={t('common.proposals.addClient.phone')}
        />
        <Input
          startIcon={<i className="ri-mail-send-line" />}
          placeholder={t('common.proposals.addClient.email')}
          type='email'
          onChange={(e) => handleChange(e.target.value, 'email')}
          value={form.email}
          error={errors?.email}
        />
      </form>
    </div>
  )
}

export default AddClient
