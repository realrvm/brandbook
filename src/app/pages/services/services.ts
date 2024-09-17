import type { Meetup, ServicesFinancing } from './services.interface'

export const servicesButtons = [
  { id: 1, label: 'Конференции и мероприятия', isActive: true },
  { id: 2, label: 'Видеоматериалы', isActive: false },
]

export const meetups: Meetup[] = [
  {
    id: 1,
    img: 'assets/images/img/dummy/meetup.jpg',
    date: '27. 07. 2024',
    endDate: '26.07.2024',
    title: 'Название мероприятия в Кемерово',
    content:
      'Описание конференции развитие строительного бизнеса в условиях экономического кризиса, нестандартные пути решения',
  },
  {
    id: 2,
    img: 'assets/images/img/dummy/meetup.jpg',
    date: '27. 07. 2024',
    endDate: '26.07.2024',
    title: 'Название мероприятия в Кемерово',
    content:
      'Описание конференции развитие строительного бизнеса в условиях экономического кризиса, нестандартные пути решения',
  },
  {
    id: 3,
    img: 'assets/images/img/dummy/meetup.jpg',
    date: '27. 07. 2024',
    endDate: '26.07.2024',
    title: 'Название мероприятия в Кемерово',
    content:
      'Описание конференции развитие строительного бизнеса в условиях экономического кризиса, нестандартные пути решения',
  },
  {
    id: 4,
    img: 'assets/images/img/dummy/meetup.jpg',
    date: '27. 07. 2024',
    endDate: '26.07.2024',
    title: 'Название мероприятия в Кемерово',
    content:
      'Описание конференции развитие строительного бизнеса в условиях экономического кризиса, нестандартные пути решения',
  },
  {
    id: 5,
    img: 'assets/images/img/dummy/meetup.jpg',
    date: '27. 07. 2024',
    endDate: '26.07.2024',
    title: 'Название мероприятия в Кемерово',
    content:
      'Описание конференции развитие строительного бизнеса в условиях экономического кризиса, нестандартные пути решения',
  },
]

export const servicesFinancing: ServicesFinancing = {
  content:
    'Контент с общим описанием о том, что муниципалитеты могут выпускать собственные облигации с примерами выпусков сибирских муниципалитетов. Несмотря на то, что в названии тут есть слово «облигации», эти бумаги отличаются от своих рыночных аналогов. Эмитенты продают их напрямую, народные облигации не торгуются на бирже, а значит, их стоимость не меняется в зависимости от ситуации на рынке. Поэтому вернуть все вложенные средства можно в любой момент без потери процентов. Такие бумаги могут покупать только физические лица. Сделать это можно на Финуслугах за пару кликов — брокерский счет для этого не нужен.',
}

const question = {
  question: 'C чего начать инвестировать в акции и облигации?',
  answer:
    'Ответ от платформы с общим описанием о том, что муниципалитеты могут выпускать собственные облигации с примерами выпусков сибирских муниципалитетов. Несмотря на то, что в названии тут есть слово «облигации», эти бумаги отличаются от своих рыночных аналогов. Эмитенты продают их напрямую, народные облигации не торгуются на бирже, а значит, их стоимость не меняется в зависимости от ситуации на рынке. ',
}

export const questions = Array.from({ length: 10 }, (_, i) => ({
  ...question,
  id: i + 1,
}))