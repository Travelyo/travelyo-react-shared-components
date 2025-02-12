import React from 'react'
import { Dialog, DialogContent, DialogTrigger  } from '../ui/dialog';
import AddProposal from './components/AddProposal';
import './../../styles/components/Proposal.scss';
import ProposalListItem from './components/ProposalListItem';

type Props = {
  trigger: React.ReactElement
}

const Proposal = ({
  trigger
}: Props) => {
  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent className="proposal-dialog">
        <AddProposal />
        <ProposalListItem />
        <ProposalListItem />
        <ProposalListItem />
        <ProposalListItem />
      </DialogContent>
    </Dialog>
  )
}

export default Proposal
