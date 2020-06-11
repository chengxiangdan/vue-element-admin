import defaultSettings from '@/settings'

// 默认去找setting.js下面的title的值 如果值为空那么 去后面的值
const title = defaultSettings.title || '后台管理'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
