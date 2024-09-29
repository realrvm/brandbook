import { HosCard } from './history-of-success.interface'

export const hosCard: HosCard = {
  id: 0,
  date: '27.09.2024',
  title: 'Юнисервис Капитал',
  img: 'assets/images/img/dummy/dummy12.jpg',
  descr:
    'Развитие строительного бизнеса в условиях экономического кризиса, нестандартные пути решения',
}

export const hosCards: HosCard[] = Array.from({ length: 7 }, (_, i) => ({
  ...hosCard,
  id: i + 1,
}))
