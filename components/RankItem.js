import style from './RankItem.module.css';

export default function RankItem(props) {
  return (
    <div className={style.item}>
      <div className={style.rank}>{props.item.Rank}</div>
      <div>
        {' '}
        <img
          className={style.imagem}
          src={`https://olympics.com/tokyo-2020/olympic-games/resCOMMON/img/flags/${
            props.item.NOC
          }.png`}
        />{' '}
        {props.item.Team}
      </div>
      <div>{props.item.GoldMedals}</div>
      <div>{props.item.SilverMedals}</div>
      <div>{props.item.BronzeMedals}</div>
      <div>{props.item.Total}</div>
    </div>
  );
}
