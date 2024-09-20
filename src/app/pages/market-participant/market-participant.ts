import { MPCard, Participant } from './market-participant.interface'

export const participantButtons = [
  { id: 1, label: 'Организаторы', isActive: true },
  { id: 2, label: 'ПBO', isActive: false },
  { id: 3, label: 'Рейтинговые агентства', isActive: false },
  { id: 4, label: 'Аудиторские компании', isActive: false },
  { id: 5, label: 'Биржи', isActive: false },
  { id: 6, label: 'Брокеры', isActive: false },
  { id: 7, label: 'ЦФА платформы', isActive: false },
  { id: 8, label: 'Инвестиционные платформы', isActive: false },
]

export const mpCard: MPCard = {
  id: 0,
  title: 'Цифра брокер',
  emits: '55',
  stocks: '22',
  bonds: '22',
  noExchange: '22',
  res: '75 000 000 650 ₽',
}

export const mpCards: MPCard[] = Array.from({ length: 7 }, (_, i) => ({
  ...mpCard,
  id: i + 1,
}))

export const participantData: Participant = {
  img: 'cifra',
  descr:
    'Мы создаем передовые технологические сервисы и продукты, позволяющие нам находить инновационные решения во всех сферах недвижимости. Наша миссия — изменить повседневность, создав более комфортные, безопасные и экологичные условия для жизни. Мы создаем передовые технологические сервисы и продукты, позволяющие нам находить инновационные решения во всех сферах недвижимости. Наша миссия — изменить повседневность, создав более комфортные, безопасные и экологичные условия для жизни. Мы создаем передовые технологические сервисы и продукты, позволяющие нам находить инновационные решения во всех сферах недвижимости. Наша миссия — изменить повседневность, создав более комфортные, безопасные и экологичные условия для жизни.',
  contacts: {
    address: '661357, Россия, г. Кемерово, ул. Ленина, д. 29, стр. 134, этаж 7',
    phone: '+7 (000) 000-008',
    email: 'info@cifra-broker.ru',
    www: 'www.sitekomp.ru',
  },
}
