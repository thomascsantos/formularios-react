import { type } from '@testing-library/user-event/dist/type';
import { useState } from 'react';
import './App.css';

function App() {
  const [formValues, setformValues] = useState({ bio: "developer front-end" })
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    const isCheckbox = type === 'checkbox'
    const data = formValues[name] || {}
    if (isCheckbox) {
      data[value] = checked
    }
    const newValue = (isCheckbox) ? data : value
    setformValues({ ...formValues, [name]: newValue })
    console.log(name,value,type,checked)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="name" onChange={handleInputChange} value={formValues.name || ""}></input>
      <input type="text" name="email" placeholder="Email" onChange={handleInputChange} value={formValues.email || ""}></input>

      <select name="language" onChange={handleInputChange} value={formValues.language || ""}>
        <option value="javascript">javaScript</option>
        <option value="php">Php</option>
        <option value="java">Java</option>

      </select>

      <div className="radios">
        <label>
          <input type="radio" value="cafe" name="drink" onChange={handleInputChange} checked={formValues.drink === "cafe"} />Café
        </label>
        <label>
          <input type="radio" value="cha" name="drink" onChange={handleInputChange} checked={formValues.drink === "cha"} />Chá
        </label>
      </div>

      <div className="checks">
        <label>
          <input type="checkbox" name="social" value="twitter" onChange={handleInputChange} />twitter
        </label>
        <label>
          <input type="checkbox" name="social" value="instagram" onChange={handleInputChange} />instagram
        </label>
        <label>
          <input type="checkbox" name="social" value="facebook" onChange={handleInputChange} />facebook
        </label>
      </div>

      <textarea name="bio" value={formValues.bio || ""} onChange={handleInputChange}></textarea>

      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
