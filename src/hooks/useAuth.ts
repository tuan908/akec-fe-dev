import { type Session } from 'next-auth'
import { useSession } from 'next-auth/react'
import { startTransition, useEffect, useState } from 'react'

export function useAuth() {
  const { data } = useSession()
  const [session, setSession] = useState<Session | null>()

  useEffect(() => {
    startTransition(() => {
      setSession(data)
    })
  }, [data])

  return [session]
}
