import './StretchableBlock.scss';

const itemsArr = [
  {
    title: 'Перевірка замовлення',
  },
  {
    title: 'Недозвон',
  },
  {
    title: 'Угоди з якими потрібно розібратись',
  },
  {
    title: 'Бронь',
  },
  {
    title: 'Перевірка посилки',
  },
  {
    title: 'Не знайдені замовлення',
  },
  {
    title: 'Очікує віжправлення',
  },
  {
    title: 'Відправлено',
  },
  {
    title: 'На відділені',
  },
  {
    title: 'Завершити упаковку',
  },
];

export const StretchableBlock = () => {
  return (
    <div className="stretchable">
      {itemsArr.map((el, i) => (
        <div className="stretchable-item" key={i}>
          <span className="stretchable-item-text">{el.title}</span>
        </div>
      ))}
    </div>
  );
};
