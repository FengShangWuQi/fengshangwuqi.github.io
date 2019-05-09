export interface IItemProps {
  id: string;
  board: string;
  description: string;
}

export class Item {
  readonly id: string;
  board: string;
  description: string;

  constructor(props: IItemProps) {
    this.id = props.id;
    this.board = props.board;
    this.description = props.description;
  }
}
