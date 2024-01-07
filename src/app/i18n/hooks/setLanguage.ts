import i18n from '@/app/i18n';
import { i18Document, i18Storage } from '@/shared/lib';
import { EnumLanguages } from '..';

export const setLanguage = (language: EnumLanguages) => {
  i18n.locale = language;
  i18Storage.setLanguage(language);
  i18Document.setLanguage(language);
};
