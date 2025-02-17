import React from 'react'
import { Proposal } from '../ProposalTypes'

type Props = {
  data: Proposal
}

const ProposalListItem = ({
  data,
}: Props) => {
  return (
    <div className="proposal-item">
      <div className="font-semibold">{data.name}</div>
      <button className="add-btn"><i className="ri-add-line" /></button>
    </div>
  )
}

export default ProposalListItem
