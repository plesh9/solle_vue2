import i18n from '@/app/i18n';

export const useTranslation = (defaultMessage?: string) => {
  const t = (message: string) => {
    return i18n.t(`${defaultMessage ? `${defaultMessage}.` : ''}${message}`);
  };

  return t;
};
