import React from 'react'
import AddClient from '../components/AddClient'
import { DialogContent, useDialog } from '@/components/ui/dialog'
import Button from '@/components/button'
import Input from '@/components/input'
import SearchClient from '../components/SearchClient'
import { Proposal } from '../ProposalTypes'

type Props = {
  clients: Proposal['client'][]
}

const SelectClient = ({
  clients,
}: Props) => {
  const { setIsOpen } = useDialog()

  return (
    <>
      <div className="flex flex-col gap-2 mb-7 overflow-y-auto">
        <SearchClient clients={clients} />
        <AddClient />
      </div>

      <div className="flex justify-between mt-auto">
        <Button
          label='Close'
          variant="secondary"
          size="large"
          onClick={() => setIsOpen(false)}
          rounded
        />
        <Button
          label='Next'
          variant="secondary"
          size="large"
          rounded
        />
      </div>
    </>
  )
}

export default SelectClient
