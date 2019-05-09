import { Item, IItemProps } from "./item";

import { message } from "./utils";

export interface ITaskProps extends IItemProps {
  status: number;
  priority: number;
}

export enum priorityType {
  hign = 2,
  medium = 1,
  normal = 0,
}

export enum statusType {
  pending = 0,
  done = 1,
}

export class Task extends Item {
  isTask = true;
  status: number;
  priority: number;

  constructor({ priority, status, ...otherProps }: ITaskProps) {
    super(otherProps);
    this.status = status;
    this.priority = priority;
  }
}

export const validatePriority = (priority: any) => {
  if (
    !(
      priority === priorityType.normal ||
      priority === priorityType.medium ||
      priority === priorityType.hign
    )
  ) {
    message.error("priority illegal");
    process.exit(1);
  }
};

export const validateStatus = (status: any) => {
  if (!(status === statusType.pending || status === statusType.done)) {
    message.error("status illegal");
    process.exit(1);
  }
};
