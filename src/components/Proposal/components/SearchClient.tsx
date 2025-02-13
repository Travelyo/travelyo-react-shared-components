import Input from '@/components/input'
import React from 'react'
import { Proposal } from '../ProposalTypes'
import ClientItem from './ClientItem'

type Props = {
  clients: Proposal['client'][]
}

const SearchClient = ({
  clients
}: Props) => {
  return (
    <div>
      <div className="mb-9">
        <div className="text-xl font-semibold mb-3 leading-none">Select client</div>
        <Input
          startIcon={<i className="ri-search-line" />}
          placeholder="Search"
        />
      </div>

      <div className="text-xl font-semibold mb-6 leading-none">Client</div>
      <div className="flex flex-col gap-3">
        {clients.map(client => (
          <ClientItem client={client} onClick={() => {}} selected={client.id === 2} />
        ))}
      </div>
    </div>
  )
}

export default SearchClient
