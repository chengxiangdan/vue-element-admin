module.exports = {
  // 标题
  title: '后台管理',

  /**
   * @type {boolean} true | false
   * @description Whether show the settings right-panel
   */
  // 控制右侧的控制面板是否显示
  showSettings: false,

  /**
   * @type {boolean} true | false
   * @description Whether need tagsView
   */
  // 控制面板是否显示
  tagsView: true,

  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   */
  // 控制头部是否滑动
  fixedHeader: false,

  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   */
  // 左侧菜单栏是否显示图标
  sidebarLogo: false,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  // 错误日志
  errorLog: 'production'
}
