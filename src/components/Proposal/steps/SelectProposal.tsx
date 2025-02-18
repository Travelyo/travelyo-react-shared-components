import { useDialog } from '@/components/ui/dialog'
import React from 'react'
import AddProposal from '../components/AddProposal'
import ProposalListItem from '../components/ProposalListItem'
import Button from '@/components/button'
import { useProposalContext } from '../proposalContext'

type Props = {}

const SelectProposal = (props: Props) => {
  const { setIsOpen } = useDialog()
  const { state, dispatch } = useProposalContext()
  const { proposals } = state

  const onConfirmClick = () => {
    dispatch({ type: 'SET_STEP', payload: 'selectClient' })
  }

  return (
    <>
      <div className="text-xl font-semibold mb-6">Add to proposal</div>
      <div className="flex flex-col gap-2 mb-7 overflow-y-auto">
        <AddProposal />
        {proposals.map((proposal) => (
          <ProposalListItem data={proposal} />
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
          rounded
        />
      </div>
    </>
  )
}

export default SelectProposal
