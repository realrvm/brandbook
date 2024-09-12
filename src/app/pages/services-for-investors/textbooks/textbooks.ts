const textbooksListBasis = {
  date: '27.09.2024',
  title: 'Название статьи раздела учебника',
  img: 'assets/images/img/dummy/dummy1.jpg',
  content:
    'С чего начать бизнес в благоприятных условиях экономического роста, откроем нестандартные пути решения',
}

export const textbooksButtons = [
  { id: 1, label: 'ИИС', isActive: false },
  { id: 2, label: 'Налоги и льготы', isActive: false },
  { id: 3, label: 'С чего начать', isActive: false },
  { id: 4, label: 'Правила инвестиций', isActive: false },
  { id: 5, label: 'Типы облигаций', isActive: false },
  { id: 6, label: 'Финансовая игра', isActive: false },
  { id: 7, label: 'Все', isActive: true },
]

export const textbooksList: Record<string, string>[] = []

function pushTextbooksToList(): void {
  Array.from({ length: 20 }, (_, i) => {
    textbooksList.push({ ...textbooksListBasis, id: i.toString() })
  })
}

pushTextbooksToList()
