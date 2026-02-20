"use client"

import { useState, useEffect } from "react"

const notifications = [
  "Oluwaseun just purchased 10,000 Instagram Likes",
  "Amanda from Nairobi just got 5,000 YouTube Subscribers",
  "Tunde from Lagos booked a Website Development Package",
  "Precious just paid for 20,000 TikTok Views",
  "Adewale just got his CV revamped for that dream job",
  "Chidinma signed up for a Google My Business Optimization",
  "Emeka just built a SAAS Tool with our AI Team",
]

interface Notification {
  id: number
  text: string
}

export default function FloatingNotifications() {
  const [activeNotifications, setActiveNotifications] = useState<Notification[]>([])
  const [nextId, setNextId] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const randomNotification = notifications[Math.floor(Math.random() * notifications.length)]
      const id = nextId
      setNextId((prev) => prev + 1)

      setActiveNotifications((prev) => [...prev, { id, text: randomNotification }])

      setTimeout(() => {
        setActiveNotifications((prev) => prev.filter((n) => n.id !== id))
      }, 5000)
    }, 30000)

    return () => clearInterval(interval)
  }, [nextId])

  return (
    <div className="fixed bottom-4 left-4 z-50 pointer-events-none">
      <div className="space-y-3">
        {activeNotifications.map((notification) => (
          <div
            key={notification.id}
            className="bg-card border border-primary/50 rounded-lg p-4 text-sm text-foreground shadow-lg shadow-primary/20 animate-slide-up pointer-events-auto max-w-xs"
          >
            {notification.text}
          </div>
        ))}
      </div>
    </div>
  )
}
