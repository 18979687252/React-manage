export const homeSliderMenu = [
  {
    name: '音乐',
    url: 'index/music',
    icon: 'home',
  }, {
    name: '账号',
    url: 'index/account',
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