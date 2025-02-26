import { useState } from 'react'
import { baseUrl, getMuid } from '@/lib/utils'
import { ProposalClientForm } from '../ProposalTypes'

export type CreateClientResponse = ProposalClientForm & {
  id: string
}

export const useCreateClient = () => {
  const [status, setStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle')
  const [data, setData] = useState<CreateClientResponse | null>(null)
  const [error, setError] = useState<string | null>(null)

  const createClient = async (clientData: Record<string, any>) => {
    setStatus('pending')
    setError(null)

    try {
      const response = await fetch(`${baseUrl}${window.apiV6Config.path}/b2b/client?muid=${getMuid()}&locale=${window.dataGlobalSettings?.locale || 'en'}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(clientData),
      })

      if (response.status === 400) {
        const errors = await response.json()
        setError(errors)
      } else {
        const result = await response.json()
        setData(result)
        setStatus('success')
        return result
      }
    } catch (err) {
      setError((err as Error).message)
      setStatus('error')
      return null
    }
  }

  return { createClient, status, data, error }
}
