import { baseUrl, getMuid } from "@/lib/utils";
import { OfferData, Proposal } from "./ProposalTypes";

export const handleAddOfferToProposal = async (proposalId: number, offerData: OfferData, source: 'list' | 'offer', proposal: Proposal): Promise<any> => {
  try {
    const { offerId, airports, originalPrice, capacity } = offerData;
    const body = JSON.stringify({
      proposalId,
      offerId,
      airports,
      originalPrice,
      capacity,
    });
    const response = await fetch(
      `${baseUrl}${window.apiV6Config.path}/b2b/proposal/${proposalId}/offer?muid=${getMuid()}&locale=${window.dataGlobalSettings?.locale || 'en'}`,
      {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body,
      }
    );
    if (!response.ok) throw new Error('Failed to add offer');

    document.dispatchEvent(new CustomEvent('travelyo:hf', {
      detail: {
        name: 'Result card added to proposal',
        data: {
          offerData,
          source,
          proposal,
        }
      }
    }));

  } catch (error) {
    console.error('Failed to add offer to proposal:', error);
  }
}
