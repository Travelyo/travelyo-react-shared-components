import { useEffect, useState } from 'react'
import { baseUrl, getMuid } from '@/lib/utils'
import { ProposalClientForm } from '../ProposalTypes'

export type CreateClientResponse = ProposalClientForm & {
  id: string
}

export const useCreateClient = () => {
  const [status, setStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle')
  const [data, setData] = useState<CreateClientResponse | null>(null)
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {
    console.log('logged error: ', error)
  }, [error])

  const createClient = async (clientData: Record<string, any>) => {
    setStatus('pending')
    setError(null)

    try {
      const response = await fetch(`${baseUrl}/api/v-6/v6-feat-b2b/b2b/client?muid=${getMuid()}&locale=${window.dataGlobalSettings?.locale || 'en'}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(clientData),
      })

      if (response.status === 400) {
        const errors = await response.json()
        console.log('errors: ', errors);
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
