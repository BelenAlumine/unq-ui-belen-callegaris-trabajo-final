import { useState } from "react";
import { validateWord } from "../service/apiService";

const Game = () => {
const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    if (!inputValue.trim()) return; 

    try {
      const data = await validateWord(inputValue); 
      console.log("Respuesta de la API:", data);
      
      setInputValue(""); 
    } catch (error) {
      console.error(error);
      // TODO: toast.error("Error inesperado, vuelva a intentar.");
    }
  };

  return (
    <div>
      <div>
        <h1>Palabras encadenadas</h1>
      </div>
      
      <form onSubmit={handleSubmit} className="game-input">
        <input
          type="text"
          placeholder=""
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Game;