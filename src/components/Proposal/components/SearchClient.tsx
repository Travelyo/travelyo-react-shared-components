import { Input} from '@/components/input'
import React from 'react'
import ClientItem from './ClientItem'
import { useProposalContext } from '../proposalContext'

type Props = {
  search: string,
  setSearch: (value: string) => void,
}
const clientsTemp = [
  {
      "id": 5,
      "user": {
          "muid": "e9c6690252f7be9383859f4a8ccd809j",
          "email": "cristiant@wearemove.io"
      },
      "genderType": "Mr",
      "firstName": "Raul",
      "lastName": "Balan",
      "email": "1email4@test.ro",
      "phone": "+19123123",
      "enabled": true,
      "createdAt": "2025-02-12 17:55:06",
      "updatedAt": "2025-02-12 17:55:06"
  },
  {
      "id": 4,
      "user": {
          "muid": "e9c6690252f7be9383859f4a8ccd809j",
          "email": "cristiant@wearemove.io"
      },
      "genderType": "Mr",
      "firstName": "Paul",
      "lastName": "Stan",
      "email": "2email4@test.ro",
      "phone": "+29123123",
      "enabled": true,
      "createdAt": "2025-02-12 11:55:42",
      "updatedAt": "2025-02-12 17:27:40"
  },
  {
      "id": 3,
      "user": {
          "muid": "e9c6690252f7be9383859f4a8ccd809j",
          "email": "cristiant@wearemove.io"
      },
      "genderType": "Mr",
      "firstName": "John",
      "lastName": "Doe",
      "email": "3email2@test.ro",
      "phone": "+39123123",
      "enabled": true,
      "createdAt": "2025-02-11 18:14:04",
      "updatedAt": "2025-02-11 18:14:04"
  },
  {
      "id": 2,
      "user": {
          "muid": "e9c6690252f7be9383859f4a8ccd809j",
          "email": "cristiant@wearemove.io"
      },
      "genderType": "Mr",
      "firstName": "Alex",
      "lastName": "Doe",
      "email": "4email@test.ro",
      "phone": "+49123112323",
      "enabled": true,
      "createdAt": "2025-02-11 18:13:06",
      "updatedAt": "2025-02-11 18:13:57"
  }
]

const SearchClient = ({
  search,
  setSearch
}: Props) => {
  const { state } = useProposalContext()
  const { clients } = state

  const filteredClients = clients.filter((item) =>
    [item.firstName, item.lastName, item.phone, item.email]
      .some((field) => field.toLowerCase().includes(search.toLowerCase()))
  );

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

      {search.length > 0 && <>
        <div className="text-xl font-semibold mb-6 leading-none">Client</div>
        <div className="flex flex-col gap-3">
          {filteredClients.map(client => (
            <ClientItem client={client} onClick={() => {}} selected={state.selectedClient === client.id} />
          ))}
        </div>
      </>}
    </div>
  )
}

export default React.memo(SearchClient)
