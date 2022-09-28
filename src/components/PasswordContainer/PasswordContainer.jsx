import "./PasswordContainer.scss";

const PasswordContainer = () => {
  return(
    <div className="password-container">
      <h1>Password Generator</h1>
      <h3>password</h3>
      <form className="password-c-form">
        <div>
          <label htmlFor="">Number of characters</label>
          <input type="number" name="" id="characterAmountNumber" min={1} max={50} value={10}/>
          <div>
            <input type="range" name="" id="characterAmountRange" min={1} max={50} value={10}/>
          </div>
        </div>
        <div>
          <input type="checkbox" name="" id="includeUppercase" />
          <label htmlFor="includeUppercase">Include uppercase</label>
        </div>
       <div>
          <input type="checkbox" name="" id="includeNumbers" />
          <label htmlFor="includeNumbers">Include numbers</label>
       </div>
        <div>
          <input type="checkbox" name="" id="includeSymbols" />
          <label htmlFor="includeSymbols">Include symbols</label>
        </div>
        <button type="submit">Generate password</button>
      </form>
    </div>
  );
};

export default PasswordContainer;