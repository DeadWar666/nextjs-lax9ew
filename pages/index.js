import react, { useState, useEffect } from 'react';
import RankItem from '../components/RankItem';
import dados from './dados.json';
import styles from './index.module.css';

export default function home() {
  const [list, setList] = useState(dados);
  const [count, setCount] = useState(0);
  const [tema, mudarTema] = useState(1, 2);

  useEffect(() => {
    setCount(prevState => prevState + 1);
  }, [list]);

  function handleFilterByGold() {
    const filteredList = [...dados].filter(item => item.GoldMedals > 0);
    setList(filteredList);
  }
  function handleClearFilter() {
    setList(dados);
  }
  function handleFilterBySilver() {
    const filteredList = [...dados].filter(item => item.SilverMedals > 0);
    setList(filteredList);
  }
  function handleFilterByBronze() {
    const filteredList = [...dados].filter(item => item.BronzeMedals > 0);
    setList(filteredList);
  }

  function handleSorByBronzeMedals() {
    const sortedList = [...list]
      .sort((a, b) => a.BronzeMedals - b.BronzeMedals)
      .reverse();
    setList(sortedList);
  }

  function handleSorBySilverMedals() {
    const sortedList = [...list]
      .sort((a, b) => a.SilverMedals - b.SilverMedals)
      .reverse();
    setList(sortedList);
  }

  function handleSorByGoldMedals() {
    const sortedList = [...list]
      .sort((a, b) => a.GoldMedals - b.GoldMedals)
      .reverse();
    setList(sortedList);
  }
  function handleSorByTotalMedals() {
    const sortedList = [...list]
      .sort((a, b) => a.TotalMedals - b.TotalMedals)
      .reverse();
    setList(sortedList);
  }
  function handleSorByRank() {
    const sortedList = [...list]
      .sort((a, b) => a.RankItem - b.RankItem)
      .reverse();
    setList(sortedList);
  }
  return (
    <div className={props.tema == '1' ? styles.item1 : styles.item2}>
      <div className={styles.cabeca}>
        <h1 className={styles.titulo}> Quadro de medalhas - tokyo 2020 </h1>
        <div className={styles.filter}>
          <button onClick={handleFilterByGold}>Somente Com Ouro </button>
          <button onClick={handleFilterBySilver}>Somente Com Prata </button>
          <button onClick={handleFilterByBronze}>Somente Com Bronze </button>
          <button onClick={handleClearFilter}>Todos </button>
        </div>
        <div className={styles.titulo}>
          Resultado: {list.length} itens ({count})
        </div>
        <div>
          <div className={styles.header}>
            <div onClick={handleSorByRank}>Rank</div>
            <div>Time</div>
            <div onClick={handleSorByGoldMedals}>Ouro</div>
            <div onClick={handleSorBySilverMedals}> Prata </div>
            <div onClick={handleSorByBronzeMedals}>bronze </div>
            <div onClick={handleSorByTotalMedals}>Total</div>
          </div>
          {list.map(item => {
            return <RankItem tema={2} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
