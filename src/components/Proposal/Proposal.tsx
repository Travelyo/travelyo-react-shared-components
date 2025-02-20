import React, { memo } from 'react'
import { OfferData, Proposal, ProposalClientForm } from './ProposalTypes';
import SelectProposal from './steps/SelectProposal';
import SelectClient from './steps/SelectClient';
import { useProposalContext } from './proposalContext';
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '../ui/dialog';

type Props = {
  trigger: React.ReactElement,
  offerData: OfferData,
}

const initialForm = { genderType: "", firstName: "", lastName: "", email: "", phone: "" }

const Proposal = ({
  trigger,
  offerData,
}: Props) => {
  const { state, dispatch } = useProposalContext()
  const { step } = state
  const [form, setForm] = React.useState<ProposalClientForm>(initialForm)
  const [selectedClient, setSelectedClient] = React.useState<string | null>(null)

  const onOpenChange = () => {
    dispatch({ type: 'SET_STEP', payload: 'selectProposal' })
    dispatch({ type: 'SET_SELECTED_PROPOSAL', payload: null })
    setSelectedClient(null)
    setForm(initialForm)
  }

  return (
    <Dialog onOpenChange={onOpenChange}>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent className="proposal-dialog">
        <DialogClose />
        {step === 'selectProposal' && <SelectProposal offerId={offerData.offerId} />}
        {step === 'selectClient' && (
          <SelectClient
            form={form}
            onChangeForm={setForm}
            selectedClient={selectedClient}
            onSelectClient={setSelectedClient}
            offerData={offerData}
          />
        )}
      </DialogContent>
    </Dialog>
  )
}

export default memo(Proposal)
