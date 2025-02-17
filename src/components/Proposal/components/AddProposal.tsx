import React from 'react'
import { useProposalContext } from '../proposalContext'

type Props = {}

const AddProposal = (props: Props) => {
  const { setStep } = useProposalContext()

  return (
    <div className="proposal-item proposal-item--add">
      <div className="font-semibold">New proposal</div>
      <button onClick={() => setStep('selectClient')} className="add-btn"><i className="ri-add-line" /></button>
    </div>
  )
}

export default AddProposal
