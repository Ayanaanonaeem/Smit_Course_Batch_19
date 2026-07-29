import { useCallback, useEffect, useState, useRef} from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef=useRef(null)


  const handlecopybutton=useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])
  const generatePassword = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    let pswd = "";

    if (number) str += "1234567890";
    if (character) str += "@#$%^&*()_+-=[]{}|;:'\",.<>/?`~\\";
    
    for (let i = 0; i < length; i++) {
      let randomstr = Math.floor(Math.random() * str.length + 1);

      pswd += str.charAt(randomstr);
    }

    setPassword(pswd);
  }, [length, character, number, setPassword]);

  useEffect(() => {
    generatePassword();
  }, [length, character, number, setPassword]);

  return (
    <>
    
      <div
        className=" bg-gray-900 mx-auto my-9 h-35 rounded-2xl flex flex-col "
        style={{ width: "600px" }}
      >
        <h1 className="text-white text-center my-1">Password generator</h1>
        <div className="mb-2">
          <input
            type="text"
            value={password}
            
            readOnly
            className="bg-white h-10 pl-5 my-3 ml-2 w-80 rounded-bl-2xl rounded-tl-2xl outline-none text-orange-500"
            style={{
              width: "500px",
            }}
            ref={passwordRef}
          />
          <button onClick={handlecopybutton} className="bg-blue-700 text-white w-15 h-10 rounded-br-2xl rounded-tr-2xl">
            Copy
          </button>
        </div>
        <div className="flex gap-1 ml-2">
          <input
            type="range"
            name=""
            id=""
            min={8}
            max={80}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label className="text-orange-500 mr-3">length ({length}) </label>
          <input
          defaultChecked={Number}
            type="checkbox"
            name=""
            id=""
            onChange={() => {
              setNumber((prev) => !prev);
            }}
            id="Number"
          />
          <label className="text-orange-500 mr-3" htmlFor="Number">
            Number
          </label>
          <input
            type="checkbox"
            name=""
            defaultChecked={character}
            
            onChange={() => {
              setCharacter((prev) => !prev);
            }}
            id="Character"
          />
          <label className="text-orange-500 mr-3" htmlFor="Character">
            Characters
          </label>
        </div>
      </div>
    </>
  );
}

export default App;
