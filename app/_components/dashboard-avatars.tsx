"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { usePeopleStore } from "@/hooks/use-people"

export default function DashboardAvatars() {
  const people = usePeopleStore((s) => s.people)

  const displayed = people.slice(0, 4)

  const names =
    people.length > 3
      ? `${people[0].name}, ${people[1].name}, ${people[2].name} +${people.length - 3} others`
      : people.map((p) => p.name).join(", ")

  return (
    <section className="flex flex-col sm:flex-row sm:items-center w-full gap-3">
      {/* Avatars */}
      <section className="flex -space-x-2">
        {displayed.map((person, idx) => (
          <Avatar key={idx} className="ring-2 ring-background">
            <AvatarImage src={person.image} alt={person.name} />
            <AvatarFallback>{person.name[0]}</AvatarFallback>
          </Avatar>
        ))}
      </section>
      {/* Names */}
      <p className="text-muted-foreground font-medium truncate">{names}</p>
    </section>
  )
}

