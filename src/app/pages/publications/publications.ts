import { MainNews, SearchPublicationsResult } from './publications.interface'

export const publicationsButtons = [
  { id: 1, label: 'Новости', isActive: false },
  { id: 2, label: 'Статьи', isActive: false },
  { id: 3, label: 'Экспертное мнение', isActive: false },
  { id: 4, label: 'Законодательство', isActive: true },
]

const mainNews: MainNews = {
  id: 0,
  date: '27.09.2024',
  title: 'Повышение ключевой ставки, это нужно знать и уметь.',
  section: 'Биржа  /  Торги  / Деловой рынок',
}

const searchResultsItem: SearchPublicationsResult = {
  id: 0,
  title: 'Главное на рынке облигаций 2024',
  date: '27.09.2024',
  section: 'Биржа  /  Торги  / IT-технологии',
  img: 'assets/images/img/dummy/dummy3.jpg',
  content:
    'Развитие сельскохозяйственной отрасли в условиях экономического кризиса, нестандартные пути решения. Развитие сельскохозяйственной отрасли в условиях экономического кризиса, нестандартные пути решения',
}

export const mainNewsList: MainNews[] = Array.from({ length: 7 }, (_, i) => ({
  ...mainNews,
  id: i + 1,
}))

export const searchResultsList: SearchPublicationsResult[] = Array.from(
  { length: 7 },
  (_, i) => ({
    ...searchResultsItem,
    id: i + 1,
  }),
)
