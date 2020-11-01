import { FC } from "react";

export type TRoute = {
  path: string
  component: FC<any>
  notExact?: boolean
  private?: boolean
}