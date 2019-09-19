import { storage, tbPath } from "./storage";
import {
  Task,
  priorityType,
  statusType,
  validatePriority,
  validateStatus,
} from "./task";
import { Note } from "./note";
import {
  log,
  note,
  pending,
  underline,
  dim,
  success,
  message,
  green,
  magenta,
  blue,
  red,
  yellow,
  isUndefined,
  withWrap,
  formatDate,
  today,
  getLastDayOfWeek,
} from "./utils";

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

  getItemsStats(items: Array<any>) {
    let [pending, done, notes] = [0, 0, 0];

    items.forEach(item => {
      if (item.isTask) {
        switch (item.status) {
          case statusType.done: {
            done++;
            break;
          }
          case statusType.pending: {
            pending++;
            break;
          }
        }
      } else {
        notes++;
      }
    });

    return { done, pending, notes };
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
      switch (board) {
        case "daily":
          endTime = { endTime: formatDate(today) };
          break;
        case "weekly":
          endTime = { endTime: formatDate(getLastDayOfWeek()) };
          break;
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

  displayBoard(board: string, items: any) {
    const { done, pending } = this.getItemsStats(items);

    log({
      prefix: "\n ",
      message: underline(board),
      suffix: dim(`[${done}/${done + pending}]`),
    });
  }

  displayItem(item: any) {
    const { id, isTask, status, description, priority } = item;

    const prefix = `${" ".repeat(4 - id.length)}${dim(`${id}.`)} `;
    const suffix = "";
    let message = description;

    switch (priority) {
      case priorityType.hign: {
        message = red(`${description} (!!)`);
        break;
      }
      case priorityType.medium: {
        message = yellow(`${description} (!)`);
        break;
      }
    }

    if (status === statusType.done) {
      message = dim(description);
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
    const dailyBoardName = this.getBoardName("daily");
    const weeklyBoardName = this.getBoardName("weekly");
    const data = this.groupByBoard() as {
      [key: string]: Array<any>;
    };

    const dailyItems = (data[dailyBoardName] || []).map(item => {
      if (
        (!item.endTime || item.endTime !== formatDate(today)) &&
        item.status === 1
      ) {
        const newItem = {
          ...item,
          endTime: formatDate(today),
          status: 0,
          board: "daily",
        };
        this.updateItem(newItem);
        return newItem;
      }
      return item;
    });
    const weeklyItems = (data[weeklyBoardName] || []).map(item => {
      const lastDayOfWeek = formatDate(getLastDayOfWeek());
      if (
        (!item.endTime || item.endTime !== lastDayOfWeek) &&
        item.status === 1
      ) {
        const newItem = {
          ...item,
          endTime: lastDayOfWeek,
          status: 0,
          board: "weekly",
        };
        this.updateItem(newItem);
        return newItem;
      }
      return item;
    });

    const newDate = {
      ...data,
      [dailyBoardName]: dailyItems,
      [weeklyBoardName]: weeklyItems,
    };

    Object.keys(newDate)
      .sort()
      .map(board => {
        const items = newDate[board];

        if (items.length === 0) {
          return;
        }

        if (new Date().getDay() === 7) {
          const filterItems = items.filter(({ id, status, endTime }) => {
            if (isUndefined(endTime) && status === 1) {
              this.deleteItem(id);
              return false;
            }
            return true;
          });

          if (filterItems.length !== 0) {
            this.displayBoard(board, filterItems);
            filterItems.map((item: any) => this.displayItem(item));
          }
        } else {
          this.displayBoard(board, items);
          items.map((item: any) => this.displayItem(item));
        }
      });
  }

  displayStats() {
    const { done, pending, notes } = this.getItemsStats(
      Object.values(this.data),
    );
    const total = done + pending;
    const percent = total === 0 ? 0 : Math.floor((done * 100) / total);

    const status = [
      `${green(String(done))} ${dim("done")}`,
      `${magenta(String(pending))} ${dim("pending")}`,
      `${blue(String(notes))} ${dim("notes")}`,
    ];

    log({ prefix: "\n ", message: dim(`${percent}% of all tasks complete.`) });
    log({ prefix: " ", message: status.join(dim(" · ")), suffix: "\n" });
  }
}

export const tb = new Taskbook();
