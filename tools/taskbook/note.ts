import { Item, IItemProps } from "./item";

export class Note extends Item {
  isNote = true;

  constructor(props: IItemProps) {
    super(props);
  }
}
