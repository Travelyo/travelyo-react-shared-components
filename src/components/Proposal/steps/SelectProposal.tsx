import { useDialog } from '@/components/ui/dialog'
import React from 'react'
import AddProposal from '../components/AddProposal'
import ProposalListItem from '../components/ProposalListItem'
import Button from '@/components/button'
import { useProposalContext } from '../proposalContext'
import { handleAddOfferToProposal } from '../proposalService'

type Props = {
  offerId: string,
  date: string,
}

const SelectProposal = ({
  offerId,
}: Props) => {
  const { setIsOpen } = useDialog()
  const { state, dispatch } = useProposalContext()
  const { proposals } = state

  const onConfirmClick = async () => {
    if (!state.selectedProposal) return
    await handleAddOfferToProposal(state.selectedProposal, offerId)
    setIsOpen(false)
  }

  const onProposalClick = (id: number) => {
    if (state.selectedProposal === id) {
      dispatch({ type: 'SET_SELECTED_PROPOSAL', payload: null })
    }
    else {
      dispatch({ type: 'SET_SELECTED_PROPOSAL', payload: id })
    }
  }

  return (
    <>
      <div className="text-xl font-semibold mb-6">Add to proposal</div>
      <div className="flex flex-col gap-2 mb-7 overflow-y-auto">
        <AddProposal />
        {proposals.map((proposal) => (
          <ProposalListItem data={proposal} onClick={onProposalClick} active={state.selectedProposal === proposal.id} />
        ))}
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
          label='Confirm'
          size="large"
          onClick={onConfirmClick}
          disabled={!state.selectedProposal}
          rounded
        />
      </div>
    </>
  )
}

export default SelectProposal
