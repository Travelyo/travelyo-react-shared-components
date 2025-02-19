import React, { SetStateAction, useState } from 'react'
import AddClient from '../components/AddClient'
import { useDialog } from '@/components/ui/dialog'
import Button from '@/components/button'
import SearchClient from '../components/SearchClient'
import { useProposalContext } from '../proposalContext'
import { baseUrl, getMuid } from '@/lib/utils'
import { ProposalClientForm } from '../ProposalTypes'

type Props = {
  form: ProposalClientForm,
  onChangeForm: (action: SetStateAction<{ genderType: string, firstName: string, lastName: string, phone: string, email: string }>) => void,
  selectedClient: string | null,
  onSelectClient: (value: string | null) => void,
}

const SelectClient = ({
  form,
  onChangeForm,
  selectedClient,
  onSelectClient,
}: Props) => {
  const { setIsOpen } = useDialog()
  const [search, setSearch] = useState('')
  const { fetchClients } = useProposalContext()

  const handleNextClick = async () => {
    if (selectedClient) {
      // do request to add offer to proposal
    }

    if (!selectedClient && form) {
      // create client
      const response = await fetch(`${baseUrl}/api/v-6/v6-feat-b2b/b2b/client?muid=${getMuid()}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(form),
      })
      
      if (response.ok) {
        const user = await response.json()
        fetchClients()
        onSelectClient(user.id)
      }
    }
  }

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const { firstName, lastName, phone, email, genderType } = form
    if (firstName === '' || lastName === '' || phone === '' || genderType === '') {
      return false
    }
    if (email.length > 0 && !emailRegex.test(email)) {
      return false
    }
    return true
  }

  return (
    <>
      <div className="flex flex-col gap-2 mb-7 overflow-y-auto h-full">
        <SearchClient
          search={search}
          setSearch={setSearch}
          selectedClient={selectedClient}
          onSelectClient={onSelectClient}
        />
        {(search.length === 0 && !selectedClient) && <AddClient form={form} onChangeForm={onChangeForm} />}
      </div>

      <div className="flex justify-between mt-auto">
        <Button
          label='Close'
          variant="secondary"
          size="large"
          onClick={() => setIsOpen(false)}
          rounded
        />
        <Button
          label='Next'
          variant="secondary"
          size="large"
          onClick={handleNextClick}
          rounded
          disabled={!(validateForm() || selectedClient)}
        />
      </div>
    </>
  )
}

export default SelectClient
