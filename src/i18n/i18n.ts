import { computed, ref } from 'vue';
import en from '../locales/en.json'
import th from '../locales/th.json'

type Lang = 'en' | 'th';

const currentLang = ref<Lang>('en');

const locales = { en, th };

const language = computed(() => locales[currentLang.value]);

const setLang = (lang: Lang) => {
  currentLang.value = lang;
}

export function useI18n() {
  return { language, currentLang, setLang };
}
