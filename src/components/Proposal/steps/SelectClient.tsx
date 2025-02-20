import React, { SetStateAction, useState } from 'react'
import AddClient from '../components/AddClient'
import { useDialog } from '@/components/ui/dialog'
import Button from '@/components/button'
import SearchClient from '../components/SearchClient'
import { OfferData, ProposalClientForm } from '../ProposalTypes'
import { useCreateClient } from '../hooks/useCreateClient'
import { baseUrl, getMuid } from '@/lib/utils'
import { useProposalContext } from '../proposalContext'

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
  const [isLoading, setIsLoading] = useState(false);
  const { createClient } = useCreateClient()
  const { state, fetchProposals } = useProposalContext()

  const createClientIfNeeded = async (): Promise<string | null> => {
    if (selectedClient) {
      return selectedClient;
    }
    if (form && validateForm()) {
      try {
        const client = await createClient(form);
        return client?.id || null;
      } catch (error) {
        console.error('Failed to create client:', error);
        return null;
      }
    }
    return null;
  };

  const handleCreateProposal = async (clientId: string): Promise<any> => {
    try {
      const response = await fetch(
        `${baseUrl}/api/v-6/v6-feat-b2b/b2b/proposal?muid=${getMuid()}`,
        {
          headers: { 'Content-Type': 'application/json' },
          method: 'POST',
          body: JSON.stringify({
            clientId,
            name: 'Test Proposal 1',
            searchContext: offerData.searchContext,
            searchCapacity: offerData.searchCapacity,
            searchDuration: offerData.searchDuration,
          }),
        }
      );
      if (!response.ok) throw new Error('Proposal creation failed');
      const proposal = await response.json();
      await fetchProposals();
      return proposal;
    } catch (error) {
      console.error('Failed to create proposal:', error);
      return null;
    }
  }

  const handleAddOfferToProposal = async (proposalId: number, offerId: string): Promise<any> => {
    try {
      const response = await fetch(
        `${baseUrl}/api/v-6/v6-feat-b2b/b2b/proposal/${proposalId}/offer?muid=${getMuid()}`,
        {
          headers: { 'Content-Type': 'application/json' },
          method: 'POST',
          body: JSON.stringify({ proposalId, offerId }),
        }
      );
      if (!response.ok) throw new Error('Failed to add offer');
    } catch (error) {
      console.error('Failed to add offer to proposal:', error);
    }
  }

  const handleNextClick = async () => {
    setIsLoading(true);
    try {
      const clientId = await createClientIfNeeded();
      if (!clientId) {
        console.error('No client ID available');
        return;
      }

      let proposalId = state.selectedProposal;
      if (!proposalId) {
        const proposal = await handleCreateProposal(clientId);
        if (!proposal) return;
        proposalId = proposal.id;
      }

      await handleAddOfferToProposal(proposalId, offerData.offerId);
    } catch (error) {
      console.error('Error in proposal flow:', error);
    } finally {
      setIsLoading(false);
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

      {isLoading && <div className="text-center">Loading...</div>}

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
