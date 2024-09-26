import catalan from './ca.json'
import spanish from './es.json'
import english from './en.json'

const LANGUAGES = {
    CATALAN: 'ca',
    SPANISH: 'es',
    ENGILSH: 'en'
}

export const getI18N = (
    { currentLocale = 'es' } : 
    {currentLocale ?: string | undefined}
) => {
    if(currentLocale == LANGUAGES.CATALAN) return catalan
    if(currentLocale == LANGUAGES.SPANISH) return spanish
    if(currentLocale == LANGUAGES.ENGILSH) return english
return spanish
}