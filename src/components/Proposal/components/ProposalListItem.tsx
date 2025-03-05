import React from 'react'
import { Proposal } from '../ProposalTypes'
import classNames from 'classnames'

type Props = {
  data: Proposal,
  onClick: (id: number) => void,
  active: boolean,
}

const ProposalListItem = ({
  data,
  onClick,
  active,
}: Props) => {
  return (
    <div className={classNames('proposal-item', { 'active': active })}>
      <div className="font-semibold">{data.name}</div>
      <button className="add-btn" onClick={() => onClick(data.id)}><i className={active ? 'ri-check-line text-white' : 'ri-add-line'} /></button>
    </div>
  )
}

export default ProposalListItem
