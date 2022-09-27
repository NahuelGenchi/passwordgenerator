import "./PasswordContainer.scss";

const PasswordContainer = () => {
  return(
    <div className="container">
      <h1>Password Generator</h1>
      <h3>password</h3>
      <form>
        <label htmlFor="">Number of characters</label>
        <input type="range" name="" id="characterAmountRange" min={1} max={50} value={10}/>
        <input type="number" name="" id="characterAmountNumber" min={1} max={50} value={10}/>
        <label htmlFor="includeUppercase">Include uppercase</label>
        <input type="checkbox" name="" id="includeUppercase" />
        <label htmlFor="includeNumbers">Include numbers</label>
        <input type="checkbox" name="" id="includeNumbers" />
        <label htmlFor="includeSymbols">Include symbols</label>
        <input type="checkbox" name="" id="includeSymbols" />
        <button type="submit">Generate password</button>
      </form>
    </div>
  );
};

export default PasswordContainer;