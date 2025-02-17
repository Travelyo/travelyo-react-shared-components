import React from 'react'
import { Proposal } from './ProposalTypes';
import SelectProposal from './steps/SelectProposal';
import SelectClient from './steps/SelectClient';
import { useProposalContext } from './proposalContext';
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '../ui/dialog';

type Props = {
  trigger: React.ReactElement,
  offerId: string,
}

const Proposal = ({
  trigger,
  offerId,
}: Props) => {
  const { step, setStep } = useProposalContext()

  return (
    <Dialog onOpenChange={() => setStep('selectProposal')}>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent className="proposal-dialog">
        <DialogClose />
        {step === 'selectProposal' && <SelectProposal />}
        {step === 'selectClient' && <SelectClient />}
      </DialogContent>
    </Dialog>
  )
}

export default Proposal
