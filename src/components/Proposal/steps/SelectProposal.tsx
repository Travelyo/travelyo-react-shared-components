import { useDialog } from '@/components/ui/dialog'
import React from 'react'
import AddProposal from '../components/AddProposal'
import ProposalListItem from '../components/ProposalListItem'
import Button from '@/components/button'
import { Proposal } from '../ProposalTypes'

type Props = {}

const proposals: Proposal[] = [
  {
  "id": 23,
  "name": "-",
  "status": "1",
  "user": {
    "muid": "e9c6690252f7be9383859f4a8ccd809j",
    "email": "cristiant@wearemove.io",
  },
  "client": {
    "id": 2,
    "name": "email@test.ro",
    "phone": "0723456789",
    "email": "cristiant@wearemove.io",
  },
  "createdAt": "2025-02-12 13:33:32",
  "updatedAt": "2025-02-12 15:41:45",
  "numberOfOffers": 1
  }
]

const SelectProposal = (props: Props) => {
  const { setIsOpen } = useDialog()
  return (
    <>
      <div className="text-xl font-semibold mb-6">Add to proposal</div>
      <div className="flex flex-col gap-2 mb-7 overflow-y-auto">
        <AddProposal />
        {proposals.map((proposal) => (
          <ProposalListItem data={proposal} />
        ))}
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
          label='Confirm'
          size="large"
          rounded
        />
      </div>
    </>
  )
}

export default SelectProposal
