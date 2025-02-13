import React from 'react'
import { Dialog, DialogClose, DialogContent, DialogTrigger  } from '../ui/dialog';
import { Proposal } from './ProposalTypes';
import SelectProposal from './steps/SelectProposal';

type Props = {
  trigger: React.ReactElement,
  offerId: string,
}

const proposals: Proposal[] = [
  {
  "id": 23,
  "name": "-",
  "status": "1",
  "user": {
    "muid": "e9c6690252f7be9383859f4a8ccd809j",
    "email": "cristiant@wearemove.io"
  },
  "client": {
    "id": 2,
    "name": "Ivan",
    "phone": "123123123",
    "email": "email@test.ro"
  },
  "createdAt": "2025-02-12 13:33:32",
  "updatedAt": "2025-02-12 15:41:45",
  "numberOfOffers": 1
  }
]

const clients: Proposal['client'][] = [{
  "id": 2,
  "name": "Ivan Ferenchuk",
  "phone": "123123123",
  "email": "email@test.ro"
}, {
  "id": 3,
  "name": "Ivan Ferenchuk",
  "phone": "123123123",
  "email": "email@test.ro"
}] 

const Proposal = ({
  trigger,
  offerId,
}: Props) => {

  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent className="proposal-dialog bg-info-light">
        <DialogClose />
        <SelectProposal />
        {/* <SelectClient clients={clients} /> */}
      </DialogContent>
    </Dialog>
  )
}

export default Proposal
