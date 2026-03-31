import { getResolvedSiteLang } from "@utils/language";
import { es } from "./languages/es";
import type I18nKey from "./i18nKey";


export type Translation = {
    [K in I18nKey]: string;
};

const defaultTranslation = es;

const map: { [key: string]: Translation } = {
    es: es,
    es_es: es,
    es_mx: es,
};

export function getTranslation(lang: string): Translation {
    return map[lang.toLowerCase()] || defaultTranslation;
}

export function i18n(key: I18nKey): string {
    const lang = getResolvedSiteLang();
    return getTranslation(lang)[key];
}
