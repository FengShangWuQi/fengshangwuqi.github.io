import chalk from "chalk";
import signale from "signale";

import { storage, tbPath } from "./storage";
import {
  Task,
  priorityType,
  statusType,
  validatePriority,
  validateStatus,
} from "./task";
import { Note } from "./note";
import { message, isUndefined, withWrap, formatDate } from "./utils";

signale.config({ displayLabel: false });

const { log, note, pending, success } = signale;
const { underline, red, yellow, gray } = chalk;

class Taskbook {
  data = storage.getData(tbPath);

  validateID(id: string) {
    if (!(id && this.data[id])) {
      withWrap();
      message.error(`id ${id} illegal`);
      process.exit(1);
    }
  }

  generateID() {
    const ids = Object.keys(this.data).map(id => Number(id));

    return ids.length === 0 ? 1 : Math.max(...ids) + 1;
  }

  getItemAlias(item: any) {
    return item.isTask ? "Task" : "Note";
  }

  getBoardName(name: string) {
    return `@${name}`.toUpperCase();
  }

  groupByBoard() {
    return Object.values(this.data).reduce((prev: any, curr: any) => {
      const boardArr = Object.keys(prev);
      if (boardArr.length !== 0 && boardArr.includes(curr.board)) {
        return {
          ...prev,
          [curr.board]: [...prev[curr.board], curr],
        };
      }
      return {
        ...prev,
        [curr.board]: [curr],
      };
    }, {});
  }

  createItem({
    board,
    taskDesc,
    noteDesc,
    priority,
  }: {
    board: string;
    taskDesc?: string;
    noteDesc?: string;
    priority?: number;
  }) {
    let item = null;

    if (taskDesc && noteDesc) {
      withWrap();
      message.error("-t or -n, can not have both.");
      process.exit(1);
    }
    if (!(taskDesc || noteDesc)) {
      withWrap();
      message.error("-t or -n, must have one.");
      process.exit(1);
    }
    !isUndefined(priority) && validatePriority(priority);

    if (taskDesc) {
      let endTime = {};

      if (board === "daily") {
        endTime = { endTime: formatDate(new Date()) };
      }

      item = new Task({
        id: String(this.generateID()),
        board: this.getBoardName(board),
        description: taskDesc,
        priority: priority || priorityType.normal,
        status: statusType.pending,
        ...endTime,
      });
    } else if (noteDesc) {
      item = new Note({
        id: String(this.generateID()),
        board: this.getBoardName(board),
        description: noteDesc,
      });
    }

    storage.setData(tbPath, { ...this.data, [item!.id]: item });

    withWrap();
    message.success(
      `craete ${taskDesc ? "Task" : "Note"} ${item!.board}-${item!.id}`,
    );
  }

  updateItem({
    id,
    board,
    description,
    priority,
    status,
    endTime,
  }: {
    id: string;
    board?: string;
    description?: string;
    priority?: number;
    status?: number;
    endTime?: string;
  }) {
    this.validateID(id);

    if (
      isUndefined(board) &&
      isUndefined(description) &&
      isUndefined(priority) &&
      isUndefined(status)
    ) {
      withWrap();
      message.error("edit must have one argv.");
      process.exit(1);
    }

    const { [id]: item, ...rest } = this.data;

    if (board) {
      item.board = this.getBoardName(board);
    }
    if (description) {
      item.description = description;
    }
    if (!isUndefined(priority) && item.isTask) {
      validatePriority(priority);
      item.priority = priority;
    }
    if (!isUndefined(status) && item.isTask) {
      validateStatus(status);
      item.status = status;
    }
    if (endTime) {
      item.endTime = endTime;
    }

    storage.setData(tbPath, {
      ...rest,
      [id]: {
        ...item,
      },
    });

    withWrap();
    message.success(`Edit ${this.getItemAlias(item)} ${item.board}-${id}`);
  }

  deleteItem(id: string) {
    this.validateID(id);

    const { [id]: item, ...rest } = this.data;

    storage.setData(tbPath, {
      ...rest,
    });
    this.data = rest;

    withWrap();
    message.success(`Delete ${this.getItemAlias(item)} ${item.board}-${id}`);
  }

  cleanItems() {
    const data = { ...this.data } as {
      [key: string]: any;
    };

    Object.values(data).map(item => {
      if (!item.endTime && item.status === 1) {
        this.deleteItem(item.id);
      }
    });
  }

  autoDailyItemsStatus() {
    const data = this.groupByBoard() as {
      [key: string]: Array<any>;
    };
    const dailyBoardName = this.getBoardName("daily");

    return (data[dailyBoardName] || []).map(item => {
      if (
        (!item.endTime || item.endTime !== formatDate(new Date())) &&
        item.status === 1
      ) {
        const newItem = {
          ...item,
          endTime: formatDate(new Date()),
          status: 0,
          board: "daily",
        };
        this.updateItem(newItem);
        return newItem;
      }
      return item;
    });
  }

  displayBoard(board: string) {
    log({
      prefix: "\n",
      message: underline(board),
    });
  }

  displayItem(item: any) {
    const { id, isTask, status, description, priority } = item;

    const prefix = " ";
    const suffix = gray(`#${id}`);
    let message = description;

    if (status !== statusType.done) {
      switch (priority) {
        case priorityType.hign: {
          message = red(description);
          break;
        }
        case priorityType.medium: {
          message = yellow(description);
          break;
        }
      }
    }

    const msgObj = {
      prefix,
      message,
      suffix,
    };

    if (isTask) {
      return status === statusType.done ? success(msgObj) : pending(msgObj);
    }

    return note(msgObj);
  }

  displayItemsByBoard() {
    const data = this.groupByBoard() as {
      [key: string]: Array<any>;
    };

    const dailyBoardName = this.getBoardName("daily");
    const dailyItems = this.autoDailyItemsStatus();

    const newDate = {
      ...data,
      [dailyBoardName]: dailyItems,
    };

    Object.keys(newDate)
      .sort()
      .map(board => {
        const items = newDate[board];

        if (items.length === 0) {
          return;
        }

        this.displayBoard(board);
        items.map((item: any) => this.displayItem(item));
      });

    withWrap();
  }
}

export const tb = new Taskbook();
