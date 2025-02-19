import { Input} from '@/components/input'
import React from 'react'
import ClientItem from './ClientItem'
import { useProposalContext } from '../proposalContext'

type Props = {
  search: string,
  setSearch: (value: string) => void,
  selectedClient: string | null,
  onSelectClient: (value: string | null) => void,
}

const SearchClient = ({
  search,
  setSearch,
  selectedClient,
  onSelectClient,
}: Props) => {
  const { state } = useProposalContext()
  const { clients } = state

  const filteredClients = clients.filter((item) =>
    [item.firstName, item.lastName, item.phone, item.email]
      .some((field) => field.toLowerCase().includes(search.toLowerCase()))
  );

  const onClientClick = (id: string) => {
    if (selectedClient === id) {
      onSelectClient(null)
    } else {
      onSelectClient(id)
    }
  }

  return (
    <div>
      <div className="mb-9">
        <div className="text-xl font-semibold mb-3 leading-none">Select client</div>
        <Input
          startIcon={<i className="ri-search-line" />}
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {(search.length > 0 || selectedClient) && <>
        <div className="text-xl font-semibold mb-6 leading-none">Client</div>
        <div className="flex flex-col gap-3">
          {filteredClients.map(client => (
            <ClientItem client={client} onClick={() => onClientClick(client.id)} selected={selectedClient === client.id} />
          ))}
        </div>
      </>}
    </div>
  )
}

export default React.memo(SearchClient)
