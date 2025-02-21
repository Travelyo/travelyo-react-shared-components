import { baseUrl, getMuid } from "@/lib/utils"

export const useCreateProposal = (clientId: string) => {
  const createProposal = async (proposalData: Record<string, any>) => {
    const response = await fetch(`${baseUrl}/api/v-6/v6-feat-b2b/b2b/proposal?muid=${getMuid()}&locale=${window.dataGlobalSettings?.locale || 'en'}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        clientId,
        name: 'Test Proposal 1',
        searchContext: 'City trips',
        searchCapacity: '2-0',
        searchDuration: '7'
      })
    })
  }

  return { createProposal }
}
