import React, { SetStateAction, useState } from 'react'
import AddClient from '../components/AddClient'
import { useDialog } from '@/components/ui/dialog'
import Button from '@/components/button'
import SearchClient from '../components/SearchClient'
import { OfferData, ProposalClientForm } from '../ProposalTypes'
import { useCreateClient } from '../hooks/useCreateClient'
import { baseUrl, getMuid } from '@/lib/utils'

type Props = {
  form: ProposalClientForm,
  onChangeForm: (action: SetStateAction<{ genderType: string, firstName: string, lastName: string, phone: string, email: string }>) => void,
  selectedClient: string | null,
  onSelectClient: (value: string | null) => void,
  offerData: OfferData,
}

const SelectClient = ({
  form,
  onChangeForm,
  selectedClient,
  onSelectClient,
  offerData,
}: Props) => {
  const { setIsOpen } = useDialog()
  const [search, setSearch] = useState('')
  const { createClient } = useCreateClient()

  const handleNextClick = async () => {
    if (selectedClient) {
      handleCreateProposal(selectedClient)
    }

    if (!selectedClient && form) {
      // create client
      const client = await createClient(form)
      if (client) {
        handleCreateProposal(client.id)
      }
    }
  }

  const handleCreateProposal = async (clientId: string) => {
    const response = await fetch(`${baseUrl}/api/v-6/v6-feat-b2b/b2b/proposal?muid=${getMuid()}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        clientId,
        name: 'Test Proposal 1',
        searchContext: offerData.searchContext,
        searchCapacity: offerData.searchCapacity,
        searchDuration: offerData.searchDuration,
      })
    })
  }

  const handleAddOfferToProposal = async (proposalId: string, offerId: string) => {
    const response = await fetch(`${baseUrl}/api/v-6/v6-feat-b2b/b2b/proposal/${proposalId}/offer?muid=${getMuid()}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        proposalId,
        offerId,
      })
    })
    
    if (response.ok) {
      setIsOpen(false)
    }
  }

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const { firstName, lastName, phone, email, genderType } = form
    if (firstName === '' || lastName === '' || phone === '' || genderType === '' || email === '') {
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
