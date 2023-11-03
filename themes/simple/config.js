const CONFIG = {

  LOGO_IMG: '/Logo.webp',
  TOP_BAR: true, // 显示顶栏
  TOP_BAR_CONTENT: process.env.NEXT_PUBLIC_THEME_SIMPLE_TOP_TIPS || '',
  LOGO_DESCRIPTION: process.env.NEXT_PUBLIC_THEME_SIMPLE_LOGO_DESCRIPTION || '<div>Welcome to our website, where ancient Chinese tales come to life. Journey with us through the rich tapestry of China\'s history, as we delve into captivating stories from bygone eras. From legendary heroes to mythical creatures, from timeless romances to epic battles, our website is your portal to the enchanting world of Chinese folklore and mythology.</div>',

  AUTHOR_LINK: process.env.NEXT_PUBLIC_AUTHOR_LINK || '#',

  // 菜单配置
  MENU_CATEGORY: true, // 显示分类
  MENU_TAG: true, // 显示标签
  MENU_ARCHIVE: true, // 显示归档
  MENU_SEARCH: true // 显示搜索
}
export default CONFIG
