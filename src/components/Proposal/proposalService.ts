import { baseUrl, getMuid } from "@/lib/utils";

export const handleAddOfferToProposal = async (proposalId: number, offerId: string): Promise<any> => {
  try {
    const response = await fetch(
      `${baseUrl}/api/v-6/v6-feat-b2b/b2b/proposal/${proposalId}/offer?muid=${getMuid()}&locale=${window.dataGlobalSettings?.locale || 'en'}`,
      {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify({ proposalId, offerId }),
      }
    );
    if (!response.ok) throw new Error('Failed to add offer');
  } catch (error) {
    console.error('Failed to add offer to proposal:', error);
  }
}
