import { useState } from 'react';

function History() {
  const [arr, setArr] = useState([0]);
  const [index, setIndex] = useState(0);

  const currentValue = arr[index];
  const MAX_INDEX = 9;

  const handleAdd = () => {
    const nextValue = currentValue + 1;

    let newArr = [...arr.slice(0, index + 1), nextValue];

    if (newArr.length > MAX_INDEX + 1) {
      newArr = newArr.slice(1);
      setIndex(MAX_INDEX);
    } else {
      setIndex(newArr.length - 1);
    }
    setArr(newArr);
  };

  const handleUndo = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  const handleRedo = () => {
    if (index < arr.length - 1) {
      setIndex((prev) => prev + 1);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
      <p style={{ margin: '5px 0' }}>값: {currentValue}</p>
      <p style={{ margin: '5px 0' }}>index: {index}</p>
      {}
      <p style={{ margin: '5px 0' }}>arr: [{arr.join(',')}]</p>

      <div style={{ marginTop: '15px' }}>
        <button onClick={handleAdd} style={{ marginRight: '5px' }}>+1</button>
        {}
        <button onClick={handleUndo} disabled={index === 0} style={{ marginRight: '5px' }}>Undo</button>
        {}
        <button onClick={handleRedo} disabled={index === arr.length - 1}>Redo</button>
      </div>
    </div>
  );
}

export default History;