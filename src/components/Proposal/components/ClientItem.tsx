import React from 'react'
import { Proposal } from '../ProposalTypes'
import { cn } from '@/lib/utils'

type Props = {
  client: Proposal['client'],
  onClick: () => void,
  selected?: boolean,
}

const ClientItem = ({
  client,
  onClick,
  selected,
}: Props) => {
  return (
    <div className={cn('p-5 rounded-xl flex flex-col gap-3 bg-shark-25 cursor-pointer', { 'border-2 border-primary': selected })} onClick={onClick}>
        <div className="font-semibold text-lg leading-none">{`${client.firstName} ${client.lastName}`}</div>
        {client.phone && <div className="font-medium leading-none">{client.phone}</div>}
        {client.email && <div className="font-medium leading-none">{client.email}</div>}
    </div>
  )
}

export default ClientItem
