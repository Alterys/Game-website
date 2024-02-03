import styles from "../style/Square.module.css";

const Square = (props) => {
  let className = styles.square;

  if (props.value === 'X') {
      className += ` ${styles.cross}`;
  } else if (props.value === 'O') {
      className += ` ${styles.zero}`;
  } else {
      if (props.move === 'X') {
          className += ` ${styles.cross_move}`;
      }
      if (props.move === 'O') {
          className += ` ${styles.zero_move}`;
      }
  }

  return (
    <button
      className={className}
      onClick={props.onClick}
    />
  );
};

export default Square;
