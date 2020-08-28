# translate.js

这是一个js库方便中文静态网站快速创建其英文版本

This is a JS library for Chinese static websites to quickly create its English version

版本：v1.1

by [xuanzhi33](http://www.xuanzhi33.top)

## 引入
1. 请将本js在`</body>`前引入
2. 在引入本js前需先引入jQuery库，推荐使用cdn：

```
<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.0/dist/jquery.min.js"></script>
```
3. 您可下载本仓库中的translate.js后引入或者直接使用cdn引入：

```
<script src="https://cdn.jsdelivr.net/gh/xuanzhi33/translate.js@v1.1/translate.js"></script>
```

## 用法
1. 在引入本js前需先引入jQuery库
2. 本js用于为中文网页创建英文版本
3. 格式：`<element en="[英语内容]">[中文原文]</element>`
    - 如： `<p en="helloworld">你好世界</p>`
4. 语言切换方式
    - 自动切换：系统语言为英文时访问该页面将自动显示为英文。
    - 手动切换：需在页面上添加class为transBtn的按钮，用户点击该按钮来切换语言。
