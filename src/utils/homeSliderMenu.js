export const homeSliderMenu = [
  {
    name: '首页',
    url: 'music',
    icon: 'home',
  }, {
    name: '账号',
    url: 'account',
    icon: 'bars',
  }, {
    name: '工具模块',
    url: 'tool',
    icon: 'tool',
    children: [
      { name: '小应用', url: 'tools' },
      { name: '富文本编辑器', url: 'editor' },
      { name: '待办事项', url: 'todoList' },
    ]
  }]