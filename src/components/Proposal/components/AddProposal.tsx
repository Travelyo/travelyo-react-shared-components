import React from 'react'
import { useProposalContext } from '../proposalContext'
import t from '@/services/translatorService'

type Props = {}

const AddProposal = (props: Props) => {
  const { dispatch } = useProposalContext()

  const onAddProposal = () => {
    dispatch({ type: 'SET_STEP', payload: 'selectClient' })
    dispatch({ type: 'SET_SELECTED_PROPOSAL', payload: null })
  }

  return (
    <div className="proposal-item proposal-item--add">
      <div className="font-semibold">{t('common.proposals.newProposal')}</div>
      <button onClick={onAddProposal} className="add-btn"><i className="ri-add-line" /></button>
    </div>
  )
}

export default AddProposal
