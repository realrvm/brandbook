import { MarketParticipant, ProjectFile, Service } from './main.interface'

export const servicesList: Service[] = Array.from({ length: 3 }, (_, id) => ({
  id: id + 1,
  img: 'assets/images/img/dummy/dummy3.jpg',
  title: 'Руководство по выходу на облигационный рынок',
  content:
    'Развитие строительного бизнеса в условиях экономического кризиса, нестандартные пути решения',
}))

export const marketParticipantsList: MarketParticipant[] = Array.from(
  { length: 10 },
  (_, id) => ({
    id: id + 1,
    img: 'assets/images/img/dummy/dummy4.jpg',
    result: '75 000 000 650 ₽',
    emitents: '55',
    stocks: '22',
    bonds: '22',
    actions: '22',
  }),
)

export const projectsFileList: ProjectFile[] = [
  {
    id: 1,
    title: 'Проект 1',
    content:
      'Развитие сельскохозяйственной отрасли в условиях экономического кризиса, нестандартные пути решения',
    img: 'assets/images/img/dummy/dummy9.jpg',
    tag: 'Приборостроение и электроника',
  },
  {
    id: 2,
    title: 'Проект 2',
    content:
      'Развитие сельскохозяйственной отрасли в условиях экономического кризиса, нестандартные пути решения',
    img: 'assets/images/img/dummy/dummy10.jpg',
    tag: 'Приборостроение и электроника',
  },
  {
    id: 3,
    title: 'Проект 3',
    content:
      'Развитие сельскохозяйственной отрасли в условиях экономического кризиса, нестандартные пути решения',
    img: 'assets/images/img/dummy/dummy10.jpg',
    tag: 'Приборостроение и электроника',
  },
  {
    id: 4,
    title: 'Проект 4',
    content:
      'Развитие сельскохозяйственной отрасли в условиях экономического кризиса, нестандартные пути решения',
    img: 'assets/images/img/dummy/dummy10.jpg',
    tag: 'Приборостроение и электроника',
  },
  {
    id: 5,
    title: 'Проект 5',
    content:
      'Развитие сельскохозяйственной отрасли в условиях экономического кризиса, нестандартные пути решения',
    img: 'assets/images/img/dummy/dummy10.jpg',
    tag: 'Приборостроение и электроника',
  },
  {
    id: 6,
    title: 'Проект 6',
    content:
      'Развитие сельскохозяйственной отрасли в условиях экономического кризиса, нестандартные пути решения',
    img: 'assets/images/img/dummy/dummy9.jpg',
    tag: 'Приборостроение и электроника',
  },
]
