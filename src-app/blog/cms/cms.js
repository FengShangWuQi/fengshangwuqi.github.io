import CMS from "netlify-cms-app";

const titleField = {
  label: "Title",
  name: "title",
  widget: "string",
};

const originalField = {
  label: "isOriginal",
  name: "original",
  widget: "boolean",
  default: true,
};

const tagsField = {
  label: "Tags",
  name: "tags",
  widget: "select",
  multiple: true,
  options: ["Front-End", "React", "Weekly"],
};

const timeField = {
  label: "Date",
  name: "date",
  widget: "date",
  format: "YYYY-MM-DD",
};

const coverField = {
  label: "Cover",
  name: "cover",
  widget: "image",
  allow_multiple: false,
  default: "/assets/default.png",
};

const commonField = {
  // preview_path: "{{slug}}",
  editor: {
    preview: false,
  },
  create: true,
};

const bodyFiled = {
  label: "Body",
  name: "body",
  widget: "markdown",
};

const zhoubaoTemplate = `
## 前端动态

### 1、[]()

### 2、[]()

### 3、[]()

### 4、[]()

### 5、[]()

### 6、[]()

## 明星项目

### 1、[]()

### 2、[]()

## 本周热点

### 1、[]()

### 2、[]()

## 最后一提

1、

2、 
`;

CMS.init({
  config: {
    load_config_file: false,
    backend: {
      name: "github",
      repo: "FengShangWuQi/fengshangwuqi.github.io",
      branch: "dev",
      squash_merges: true,
    },
    publish_mode: "editorial_workflow",
    media_folder: "static/assets",
    public_folder: "/assets",
    collections: [
      {
        ...commonField,
        name: "post",
        label: "Post",
        folder: "posts",
        fields: [
          titleField,
          originalField,
          {
            ...tagsField,
            default: ["Front-End"],
          },
          timeField,
          coverField,
          bodyFiled,
        ],
      },
      {
        ...commonField,
        name: "zhoubao",
        label: "ZhouBao",
        folder: "zhoubao",
        fields: [
          titleField,
          originalField,
          {
            ...tagsField,
            default: ["Weekly", "Front-End"],
          },
          timeField,
          coverField,
          { ...bodyFiled, default: zhoubaoTemplate },
        ],
      },
    ],
  },
});
