import zhCN from './langs/zh-cn';
import zhTW from './langs/zh-tw';
import enUS from './langs/en-us';

const locales: Record<App.I18n.LangType, App.I18n.Schema> = {
  'zh-TW': zhTW,
  'zh-CN': zhCN,
  'en-US': enUS
};

export default locales;
