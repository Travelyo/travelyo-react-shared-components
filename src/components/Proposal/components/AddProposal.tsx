import React from 'react'
import { useProposalContext } from '../proposalContext'

type Props = {}

const AddProposal = (props: Props) => {
  const { setStep } = useProposalContext()

  return (
    <div className="flex justify-between items-center px-5 py-4 border-2 border-dotted border-shark-100 rounded-xl">
      <div className="font-semibold">New proposal</div>
      <button onClick={() => setStep('selectClient')} className="border-none h-10 w-10 flex items-center justify-center rounded-full bg-shark-25 cursor-pointer"><i className="ri-add-line" /></button>
    </div>
  )
}

export default AddProposal
