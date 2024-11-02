import React from 'react'

const isDemo = process.env.NEXT_PUBLIC_DEMO_MODE === 'false'

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  if (isDemo) {
    return // or shows the demo message
  }
  // ... rest of submission logic
}
