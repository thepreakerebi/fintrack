import { create } from "zustand"

export type Person = {
  name: string
  image: string
}

interface PeopleState {
  people: Person[]
  setPeople: (people: Person[]) => void
  addPerson: (person: Person) => void
}

export const peopleStore = create<PeopleState>((set) => ({
  people: [
    { name: "Ava", image: "/ava.png" },
    { name: "Liam", image: "/liam.png" },
    { name: "Noah", image: "/noah.png" },
    { name: "Other", image: "/others.png" },
    { name: "Other", image: "/others.png" },
    { name: "Other", image: "/others.png" },
    { name: "Other", image: "/others.png" },
    { name: "Other", image: "/others.png" },
    { name: "Other", image: "/others.png" },
    { name: "Other", image: "/others.png" },
    { name: "Other", image: "/others.png" },
    { name: "Other", image: "/others.png" },
    { name: "Other", image: "/others.png" },
    { name: "Other", image: "/others.png" },
    { name: "Other", image: "/others.png" },
  ],
  setPeople: (people) => set({ people }),
  addPerson: (person) => set((state) => ({ people: [...state.people, person] })),
}))

