---
title: 如何让 vim 成为我们的神器
original: true
tags:
  - Vim
date: 2017-10-08
cover: vim.png
---

> **Vim** 是一个上古神器，刚刚接触的同学可能很难驾驭，本篇文章主要带领大家快速入门，并持续分享当前流行的一些 **vim-plugin**，有兴趣的同学还可以参考 [to-vim-tmux-zsh](https://github.com/FengShangWuQi/to-vim-tmux-zsh) 仓库继续研究 **Tmux** 和 **Zsh**。

## Vim 的优势

- Vim 是一个完全 **跨平台** 的编辑器;
- Vim 是一个高度 **可定制**、**可扩展** 的编辑器;
- Vim 有着 **良好的生态** 环境;

## 新手指南

```bash
$ vimtutor  // vim 教程
```

### Vim 模式

- **普通模式**: 默认模式，可用于文本删除、替换，恢复、粘贴等操作;
- **插入模式**: 输入 **i** 进入插入模式，相当于普通编辑器的编辑模式；
- **可视模式**: 输入 **v** 进入可视模式，选择文本，进行复制等操作；
- **命令模式**: 输入 **:** 进入命令模式，可执行执行内部和外部命令；

### 移动光标

- **hjkl**: 上下左右；
- **2w**：向前移动两个单词；
- **3e**：向前移动到第 3 个单词的末尾；
- **0**：移动到行首；
- **\$**：当前行的末尾；
- **H**：光标移动到顶部；
- **M**：光标移动到中间；
- **L**：光标移动到底部；
- **gf**：根据 path 跳转到指定文件；
- **gg**：第一行；
- **G**：最后一行；
- **行号 + G**：指定行；
- **( )**: 移到上一句和下一句；
- **{ }**: 移到上一段和下一段；
- **ctrl + o**：跳转回之前的位置；
- **ctrl + i**：返回跳转之前的位置；
- **ctrl + d**：向下移动半页；
- **ctrl + u**：向上移动半页；
- **ctrl + f**：向下移动整页；
- **ctrl + b**：向上移动整页；

### 退出

- **esc**：进入普通模式；
- **:q!**：不保存退出；
- **:wq**：保存后退出；

### 删除

- **x**：删除当前字符；
- **dw**：删除至当前单词末尾；
- **de**：删除至当前单词末尾，包括当前字符；
- **d\$**：删除至当前行尾；
- **dd**：删除整行；
- **2dd**：删除两行；

### 修改

- **i**：插入文本；
- **a**：在当前字符后面进入插入模式；
- **A**：当前行末尾添加；
- **r**：替换当前字符；
- **o**: 打开新的一行进入插入模式；
- **s**：删除一个字符然后进入插入模式；
- **cc**：修改整行；

### 撤销

- **u**：撤销
- **ctrl + r**： 取消撤销

### 复制粘贴剪切

- **y**：复制
- **p**：粘贴
- **yy**：复制当前行
- **dd**：剪切当前行

### 文件

- **:e!** 强制刷新该文件
- **ctrl + g** 显示当前行以及文件信息

### 查找

- **/**：正向查找（n：继续查找，N：相反方向继续查找）
- **？**：逆向查找
- **%**：查找配对的 {，[，(

### 替换

- **:s/old/new**：替换该行第一个匹配串
- **:s/old/new/g**：替换全行的匹配串
- **:%s/old/new/g**：替换整个文件的匹配串

## 基本配置

创建 **Vim** 的配置文件 **.vimrc**

```bash
touch ~/.vimrc
```

### 文件编码

```vim
set enc=utf-8
```

### 不和 vi 兼容

```vim
set noswapfile
```

### 备份和撤销文件

```vim
set nobackup
set noswapfile

if has('persistent_undo')
  set undofile
  set undodir=~/.vim/undodir
  if !isdirectory(&undodir)
    call mkdir(&undodir, 'p', 0700)
  endif
endif
```

### 中文

```vim
set fileencodings=ucs-bom,utf-8,gb18030,latin1
```

### 鼠标支持

```vim
if has('mouse')
  if has('gui_running') || (&term =~ 'xterm' && !has('mac'))
    set mouse=a
  else
    set mouse=nvi
  endif
endif

set clipboard=unnamed
```

### 设置文本菜单

```vim
if has('gui_running')
  let do_syntax_sel_menu = 1
  let do_no_lazyload_menus = 1
endif

if !has('gui_running')
  if has('wildmenu')
    set wildmenu
    set cpoptions-=<
    set wildcharm=<C-Z>
    nnoremap <F10>      :emenu <C-Z>
    inoremap <F10> <C-O>:emenu <C-Z>
  endif
endif
```

### 查找

```vim
set ignorecase
set smartcase
set hlsearch
set incsearch

nnoremap <silent> <F2>      :nohlsearch<CR>
inoremap <silent> <F2> <C-O>:nohlsearch<CR>
```

### 显示行号

```vim
set number
```

### 设置缩进

```vim
set shiftwidth=2
set tabstop=2
```

### 突出显示当前行

```vim
set cursorline
```

### 启动 vim 时关闭折叠代码

```vim
set nofoldenable
```

### 主题

```vim
syntax enable
colorscheme one
set background=dark
```

### 背景透明

```vim
hi Normal ctermfg=252 ctermbg=none
```

## 插件配置

使用 [vim-plug](https://github.com/junegunn/vim-plug) 管理插件

### 树形目录

```vim
Plug 'scrooloose/nerdtree'                            " https://github.com/preservim/nerdtree
Plug 'jistr/vim-nerdtree-tabs'                        " https://github.com/jistr/vim-nerdtree-tabs
Plug 'Xuyuanp/nerdtree-git-plugin'                    " https://github.com/Xuyuanp/nerdtree-git-plugin
Plug 'ryanoasis/vim-devicons'                         " https://github.com/ryanoasis/vim-devicons
Plug 'tiagofumo/vim-nerdtree-syntax-highlight'        " https://github.com/tiagofumo/vim-nerdtree-syntax-highlight
Plug 'tpope/vim-eunuch'                               " https://github.com/tpope/vim-eunuch

map <C-n> :NERDTreeToggle<CR>

let NERDTreeMinimalUI = 1
let NERDTreeShowHidden = 1

let g:nerdtree_tabs_open_on_console_startup = 1

nnoremap <F5> :UndotreeToggle<cr>

" i 在新的水平分割的窗口中打开
" s 在新的竖直分割的窗口中打开
" t 在标签页中打开
" go 预览文件
" r 刷新光标所在的目录
" R 刷新当前根路径
" I 显示隐藏文件
" m 显示文件操作菜单
" C 将根路径设置为光标所在的目录
" u 设置上级目录为根路径
" gT 前一个 tab
" gt 后一个 tab
" <C-W> 加方向键（h、j、k、l、<Left> 等）可以在窗口之间跳转
" <C-W> + w 跳转到下一个窗口
" <C-W> + s 和 :split 作用相同，把当前窗口横向一分为二
" <C-W> + v 和 :vsplit 作用相同，把当前窗口纵向一分为二
" <C-W> + o 或 :only 只保留当前窗口，关闭其他所有窗口
```

### 标签

```vim
Plug 'majutsushi/tagbar'                         " https://github.com/majutsushi/tagbar

nnoremap <F9>      :TagbarToggle<CR>
inoremap <F9> <C-O>:TagbarToggle<CR>
```

### 自动补全

```vim
Plug 'Valloric/YouCompleteMe'                         " https://github.com/ycm-core/YouCompleteMe
Plug 'Raimondi/delimitMate'                           " https://github.com/Raimondi/delimitMate

nnoremap <Leader>fi :YcmCompleter FixIt<CR>
nnoremap <Leader>gd :YcmCompleter GoToDefinition<CR>
```

### 语法高亮，检查

```vim
Plug 'sheerun/vim-polyglot'                           " https://github.com/sheerun/vim-polyglot
Plug 'w0rp/ale'                                       " https://github.com/w0rp/ale

let g:ale_fix_on_save = 1
let g:ale_sign_column_always = 1
let g:ale_sign_error = '●'
let g:ale_sign_warning = '▶'

nmap <silent> <C-k> <Plug>(ale_previous_wrap)
nmap <silent> <C-j> <Plug>(ale_next_wrap)
```

### 全局搜索，快速打开文件

```vim
Plug 'junegunn/fzf', { 'do': { -> fzf#install() } }   " https://github.com/junegunn/fzf
Plug 'junegunn/fzf.vim'                               " https://github.com/junegunn/fzf.vim
Plug 'ctrlpvim/ctrlp.vim'                             " https://github.com/ctrlpvim/ctrlp.vim

let g:ctrlp_user_command = ['.git', 'cd %s && git ls-files -co --exclude-standard']
let g:ctrlp_regexp = 1

" <c-r>: 切换匹配模式
" <c-t>：在新的 tab 中打开
" :Rg
```

### 状态条

```vim
Plug 'vim-airline/vim-airline'                        " https://github.com/vim-airline/vim-airline
Plug 'vim-airline/vim-airline-themes'                 " https://github.com/vim-airline/vim-airline-themes

let g:airline_theme='onedark'
let g:airline_powerline_fonts = 1

let g:airline#extensions#tabline#enabled = 1
let g:airline#extensions#tabline#formatter = 'unique_tail'
let g:airline#extensions#ale#enabled = 1
let g:airline#extensions#tabline#buffer_nr_show = 1
let g:airline#extensions#nerdtree_statusline = 0
let g:airline_section_c = ''
```

### 注释

```vim
Plug 'scrooloose/nerdcommenter'                       " https://github.com/preservim/nerdcommenter

let g:NERDSpaceDelims = 1
let g:NERDDefaultAlign = 'left'

" <leader>c<space> 注释/取消注释
" <leader>ca 切换　// 和 /* */
" <leader>cs /* 块注释 */
" <leader>cm 只用一组符号注释
" <leader>cA 在行尾添加注释
```

### git

```vim
Plug 'airblade/vim-gitgutter'                         " https://github.com/airblade/vim-gitgutter
Plug 'tpope/vim-fugitive'                             " https://github.com/tpope/vim-fugitive
Plug 'tpope/vim-rhubarb'                              " https://github.com/tpope/vim-rhubarb

set updatetime=100
let g:gitgutter_max_signs = -1

" jump to next hunk: ]c
" jump to previous hunk: [c
" stage the hunk: <Leader>hs
" undo the hunk: <Leader>hu
" preview the hunk: <Leader>hp

" :G
" :Gvdiffsplit
" :GBrowse
"
" s: 加到暂存区中
" u: 重置加入暂存区的修改
" =: 切换 diff 显示
" cc: 提交当前暂存区中的文件
```

### Markdown

```vim
Plug 'iamcco/markdown-preview.nvim', { 'do': 'cd app && yarn install'  }      " https://github.com/iamcco/markdown-preview.nvim
```

### Emmet

```vim
Plug 'mattn/emmet-vim'                                " https://github.com/mattn/emmet-vim

let g:user_emmet_leader_key='<C-Z>'

" <C-Z>,
```

### Prettier

```vim
Plug 'prettier/vim-prettier', { 'do': 'npm install' }     " https://github.com/prettier/vim-prettier

autocmd BufWritePre *.js,*.jsx,*.mjs,*.ts,*.tsx,*.css,*.less,*.scss,*.json,*.graphql,*.md,*.vue,*.yaml,*.html PrettierAsync

" :PrettierAsync
```

### Wakatime

```vim
Plug 'wakatime/vim-wakatime'                              " https://github.com/wakatime/vim-wakatime "
```

### Whitespace

```vim
Plug 'ntpeters/vim-better-whitespace'

let g:better_whitespace_enabled=1
```

## 总结

最后，呈上 [to-vim-tmux-zsh](https://github.com/FengShangWuQi/to-vim-tmux-zsh) 仓库可供参考，顾名思义，除了 **vim**，还有 **tmux** 和 **zsh** 的相关内容。
