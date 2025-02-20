import React from 'react'
import { Proposal } from '../ProposalTypes'

type Props = {
  data: Proposal,
  onClick: (id: number) => void,
}

const ProposalListItem = ({
  data,
  onClick,
}: Props) => {
  return (
    <div className="proposal-item">
      <div className="font-semibold">{data.name}</div>
      <button className="add-btn" onClick={() => onClick(data.id)}><i className="ri-add-line" /></button>
    </div>
  )
}

export default ProposalListItem
