export interface ITask {
  id: string
  title: string
  description: string
  dueDate: string
  isComplete: boolean
  priority: "high" | "low" | "medium"
  user : string | null
}

export interface IUser{
  id : string,
  name : string
}

