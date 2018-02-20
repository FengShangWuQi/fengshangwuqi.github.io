---
title: CSS 自定义属性 -- 使用 JS 和不使用 JS
original: false
tag: FrontEnd,CSS
date: 2017-08-08T19:29:49+08:00
---

<div class="original-info">
  <div className="original-address">
    原文地址：
    <a
      href="http://vanseodesign.com/css/custom-properties-and-javascript/?utm_source=CSS-Weekly&utm_campaign=Issue-276&utm_medium=web"
      target="_blank"
      rel="noopener noreferrer"
    >
      CSS Custom Properties—Dynamic Changes With And Without Javascript
    </a>
  </div>
  <div className="original-auth">作者：Steven Bradley</div>
</div>

> 你曾想过在页面加载过后去修改 Sass 或 Less 的变量值么？我曾经尝试过，但并没有成功，因为当预处理的代码编译成了 CSS，它的变量就不再是变量了，然而，**自定义属性** 就没有这样的限制。

在该系列的文章中，我曾提及过自定义属性它最牛扳的特性就是它的 **动态性**。它的强大我们一眼就能对比出来，**预处理变量** 在编译后就成了固定值，而 **自定义属性** 可以在页面加载后继续更改变量的值。

本篇文章我们将一起来看如何通过用户交互和 JavaScipt 来做一些帅气的改变。

## 不用 JS 来更改 CSS 自定义属性

大多数的动态特效貌似多多少少都需要点 JavaScipt，所以，我们就从一个简单的例子入手，使用自定义属性改变 :hover 的效果。

我们给一个 div 一个 width 和 height，然后，定义一个值为 #ccc 的自定义属性 background，接着，我们用 **var** 函数设置 background-color，并给它 1s 的 transition。

```css
div {
 width: 15em;
 height: 15em;

  --background: #ccc;
  background-color: var(--background);
  transition: background-color 1s;
}
```

为了改变 background-color，我们再次定义 **--background** 的值。

```css
div:hover {
  --background: #cce;
}
```

虽然，上面的例子不用自定义属性也可以轻松的实现，但如果我们的改变增多，使用自定义属性书写的代码明显要更干净，更易读。

## 使用 JS 来更改 CSS 自定义属性

用 JavaScipt 来更改自定义属性的值将会变的特别有趣。

首先，我们必须要知道如何获取自定义属性的值，和如何设置。

### 获取自定义属性的值

要获取自定义属性的值，你要知道两个 JavaScipt 函数：[window.getComputedStyle](http://t.cn/RyWZ4kT) 和 [getPropertyValue](http://t.cn/R9l85oZ)，前者可以获取元素所有 CSS 属性的值，后者可以获取特定属性的值。

```JavaScript
let style = window.getComputedStyle(element, [pseudoElt]);
var value = style.getPropertyValue(property);
```

如果你是 JavaScipt 方向，那么上面的代码你肯定不陌生，如果你并不熟悉，可以参考下面的 demo。

首先，我们使用 **:root** 定义一个全局变量：

```css
:root {
 --color: red
}
```

接着，我们使用 `getComputedStyle()` 和 `getPropertyValue()` 方法来读取 color 的值。

```JavaScript
var styles = getComputedStyle(document.documentElement);  // 获取 root 的样式
var colorValue = styles.getPropertyValue('--color');      // 获取 --color 的值
```

现在 colorValue 的值就为 **--color** 的值，不信你可以在控制台中打印。

```JavaScript
console.log(colorValue);  // red
```

### 如何设置自定义属性的值

要设置自定义属性的值，你要用到 [style.setProperty](http://t.cn/R9lEgBy) 这个方法。

```css
style.setProperty(propertyName, value, priority);
```

**setProperty** 有三个参数，前两个是属性名称和属性的值，其中，属性值可以为空，第三个 **priority** 是可选的，允许你设置 **important**，但 CSS 准则建议尽量不设置该属性。

设置一个新值比读取一个值更容易，因为你不需要将值保存到变量中。

```JavaScript
document.documentElement.style.setProperty('--color', 'green');
```

事实上，在设置新值前，该属性可以不存在，你可以在 **setProperty** 中初始化自定义属性。

### 移除自定义属性

还有一个 [removeProperty()](http://t.cn/R9ln8Pa) 方法可以移除自定义属性，如果你不想要了的话。

```JavaScript
var oldValue = style.removeProperty(property);
```

## 使用 Color Picker 更改颜色值

接下来，我们就一起来实践一下。

首先，我们创建一个空的 div，用于显示用户输入的颜色。

```html
<div></div>
<input type="color" id="div-bkgd" value="#cccccc">
```

接下来，我们在全局创建一个 **--background** 自定义属性，初始化为 #ccc，给 div 一个 width，height 和 margin，用 **var()** 给 background 赋值, 然后简单设置 input 的样式。

```css
:root {
 --background: #ccc;
}

div {
 width: 20em;
 height: 20em;
 margin: 1em auto;
 background: var(--background);
}

input {
 display: block;
 width: 10em;
 margin: 1em auto;
}
```

最后，我们使用 **document.querySelector()** 获取 input 元素，给该元素添加一个事件监听器，监听用户输入的变化，然后用 **setProperty** 将输入的值赋给自定义属性 **--background**。

```JavaScript
var colorInput = document.querySelector("#div-bkgd");

colorInput.addEventListener("change", function() {
 document.documentElement.style.setProperty("--background", this.value);
});
```

大功告成，你可以在复制代码在浏览器中运行查看效果。另外值得注意的是。color input 并不支持所有浏览器, 像在 **IE** 和 **Safari** 中就无法工作。

## 额外的 demo

为了便于大家充分地理解，下面提供了一些额外的 demo，帮助大家快速掌握。

- [CSS 变量 demo](http://t.cn/R9YUySH)
- [Using CSS custom properties for theme previews](http://t.cn/R9lmFHb)

## 总结

将自定义属性和 JavaScipt 或其他脚本语言结合, 你会瞬间坠入 **自定义属性** 的爱河。