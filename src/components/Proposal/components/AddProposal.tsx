import React from 'react'
import { useProposalContext } from '../proposalContext'

type Props = {}

const AddProposal = (props: Props) => {
  const { dispatch } = useProposalContext()

  return (
    <div className="proposal-item proposal-item--add">
      <div className="font-semibold">New proposal</div>
      <button onClick={() => dispatch({ type: 'SET_STEP', payload: 'selectClient' })} className="add-btn"><i className="ri-add-line" /></button>
    </div>
  )
}

export default AddProposal
