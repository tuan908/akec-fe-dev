import { type Session } from 'next-auth'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

export default function useAuth() {
  const { data } = useSession()
  const [ready, setReady] = useState(false)
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    if (typeof data === 'undefined') {
      setSession(null)
      setReady(false)
    }

    if (data === null) {
      setSession(null)
      setReady(true)
    }

    if (data !== null) {
      setSession(data)
      setReady(true)
    }
  }, [data])

  return { ready, session }
}