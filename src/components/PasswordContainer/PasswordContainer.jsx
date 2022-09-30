import { useState } from "react";

import "./PasswordContainer.scss";

const PasswordContainer = () => {
  const [inputValue, setInputValue] = useState(1);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState();

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleChangeUpper = (e) => {
    e.target.checked ? setIncludeUppercase(true) : setIncludeUppercase(false);
  };
  const handleChangeNumbers = (e) => {
    e.target.checked ? setIncludeNumbers(true) : setIncludeNumbers(false);
  };
  const handleChangeSymbols = (e) => {
    e.target.checked ? setIncludeSymbols(true) : setIncludeSymbols(false);
  };

  const arrayFromLowToHigh = (low, high) => {
    const arr = [];
    for (let i = low; i <= high; i++) {
      arr.push(i);
    };
    return arr;
  };
  const lowerCaseCharCodes = arrayFromLowToHigh(65, 90);
  const upperCaseCharCodes = arrayFromLowToHigh(97, 122);
  const numberCharCodes = arrayFromLowToHigh(48, 57);
  const symbolCharCodes = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126));

  const generatePassword = (characterAmount, uppercase, numbers, symbols) => {
    let charCodes = lowerCaseCharCodes;
    if (uppercase) {
      charCodes = charCodes.concat(upperCaseCharCodes);
    };
    if (numbers) {
      charCodes = charCodes.concat(numberCharCodes);
    };
    if (symbols) {
      charCodes = charCodes.concat(symbolCharCodes);
    };
    const passwordCharacters = [];
    for (let i = 0; i < characterAmount; i++) {
      const character = charCodes[Math.floor(Math.random() * charCodes.length)];
      passwordCharacters.push(String.fromCharCode(character));
    };
    setPassword(passwordCharacters.join(''));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generatePassword(inputValue, includeUppercase, includeNumbers, includeSymbols);
  };

  return(
    <div className="password-container">
      <h1>Password Generator</h1>
      <h3>{password}</h3>
      <form className="password-c-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Number of characters</label>
          <input onChange={handleInput} type="number" name="" id="characterAmountNumber" min={1} max={50} value={inputValue}/>
          <div>
            <input onInput={handleInput} type="range" name="" id="characterAmountRange" min={1} max={50} value={inputValue}/>
          </div>
        </div>
        <div>
          <input type="checkbox" name="" id="includeUppercase" onChange={handleChangeUpper}/>
          <label htmlFor="includeUppercase">Include uppercase</label>
        </div>
       <div>
          <input type="checkbox" name="" id="includeNumbers" onChange={handleChangeNumbers}/>
          <label htmlFor="includeNumbers">Include numbers</label>
       </div>
        <div>
          <input type="checkbox" name="" id="includeSymbols" onChange={handleChangeSymbols}/>
          <label htmlFor="includeSymbols">Include symbols</label>
        </div>
        <button type="submit">Generate password</button>
      </form>
    </div>
  );
};

export default PasswordContainer;