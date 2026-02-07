import { dateEnUS, dateZhCN, dateZhTW, enUS, zhCN, zhTW } from 'naive-ui';
import type { NDateLocale, NLocale } from 'naive-ui';

export const naiveLocales: Record<App.I18n.LangType, NLocale> = {
  'zh-TW': zhTW,
  'zh-CN': zhCN,
  'en-US': enUS
};

export const naiveDateLocales: Record<App.I18n.LangType, NDateLocale> = {
  'zh-TW': dateZhTW,
  'zh-CN': dateZhCN,
  'en-US': dateEnUS
};
