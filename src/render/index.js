// 渲染进程代码 /src/render/index.js
// 打开新窗口属性用法有点类似vscode打开新的窗口

const btn = document.querySelector('#btn');
const path = require('path');
const BrowerWindow = require('electron').remote.BrowserWindow;

btn.onclick = () => {
  win = new BrowerWindow({
    width: 300,
    height: 200,
    frame: true, // false隐藏关闭按钮、菜单选项 true显示
    fullscreen: false, // 全屏展示
    transparent: false
  })

  win.loadURL(path.join('file:', __dirname, 'news.html'));

  win.on('close', () => {
    win = null
  });
}