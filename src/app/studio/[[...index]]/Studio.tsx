'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'
import { useEffect } from 'react'

export function Studio() {
  useEffect(() => {
    // Hide scrolling on the main body when in the studio
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <div className="fixed inset-0 z-[99999] bg-white">
      <NextStudio config={config} />
    </div>
  )
}
