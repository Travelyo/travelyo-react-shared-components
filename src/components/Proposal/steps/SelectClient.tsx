import React, { useState } from 'react'
import AddClient from '../components/AddClient'
import { useDialog } from '@/components/ui/dialog'
import Button from '@/components/button'
import SearchClient from '../components/SearchClient'

type Props = {}

const SelectClient = (props: Props) => {
  const { setIsOpen } = useDialog()
  const [search, setSearch] = useState('')

  return (
    <>
      <div className="flex flex-col gap-2 mb-7 overflow-y-auto h-full">
        <SearchClient search={search} setSearch={setSearch} />
        {search.length === 0 && <AddClient />}
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
