import React from 'react'
import { Proposal } from '../ProposalTypes'

type Props = {
  data: Proposal
}

const ProposalListItem = ({
  data,
}: Props) => {
  return (
    <div className="flex justify-between items-center px-5 py-4 bg-shark-25 rounded-xl">
      <div className="font-semibold">{data.name}</div>
      <button className="h-10 w-10 flex items-center justify-center rounded-full bg-white cursor-pointer"><i className="ri-add-line" /></button>
    </div>
  )
}

export default ProposalListItem
