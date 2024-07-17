export enum FilterAction {
  all = "all",
  completed = "completed",
  incomplete = "incomplete",
}

export type FilterType = keyof typeof FilterAction
