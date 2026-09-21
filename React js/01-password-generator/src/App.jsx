import React, { useState, useEffect, useRef } from "react";

const App = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [isCharacter, setIsCharacter] = useState(false);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);

  useEffect(() => {
    let pwd = "";
    let str =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (isNumberAllowed) str += "123456789";
    if (isCharacter) str += "@#$%^&*()_+-=[]{}|;:'\",.<>/?`~\\";

    for (let i = 0; i < length; i++) {
      const randomStr = Math.floor(Math.random() * str.length);
      pwd += str.charAt(randomStr);
    }

    setPassword(pwd);
  }, [length, isCharacter, isNumberAllowed]);

  const passref = useRef();

  const handleCopyButton = () => {
    passref.current.select();
    window.navigator.clipboard.writeText(password);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black flex items-center justify-center px-4">

      {/* Main Card */}
      <div className="w-full max-w-lg">

        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-6 sm:p-8">

          {/* Heading */}
          <div className="text-center mb-7">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Password Generator
            </h1>

            <p className="text-slate-400 mt-2 text-sm">
              Create a strong and secure password instantly
            </p>
          </div>

          {/* Password Input */}
          <div className="flex bg-slate-950 border border-slate-700 rounded-xl overflow-hidden shadow-inner">

            <input
              type="text"
              ref={passref}
              value={password}
              readOnly
              className="flex-1 min-w-0 bg-transparent text-emerald-400 font-mono text-lg px-4 py-3 outline-none"
            />

            <button
              onClick={handleCopyButton}
              className="bg-emerald-500 hover:bg-emerald-400 active:scale-95 transition-all duration-200 text-slate-950 font-bold px-5"
            >
              Copy
            </button>

          </div>

          {/* Controls */}
          <div className="mt-8 space-y-6">

            {/* Length */}
            <div>

              <div className="flex justify-between items-center mb-3">
                <label className="text-white font-semibold">
                  Password Length
                </label>

                <span className="bg-emerald-500/15 text-emerald-400 px-3 py-1 rounded-lg font-bold">
                  {length}
                </span>
              </div>

              <input
                type="range"
                min={8}
                max={50}
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />

              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>8</span>
                <span>50</span>
              </div>

            </div>

            {/* Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

              {/* Number */}
              <label className="flex items-center gap-3 bg-slate-950/70 border border-slate-700 hover:border-emerald-500/50 rounded-xl p-4 cursor-pointer transition">

                <input
                  type="checkbox"
                  checked={isNumberAllowed}
                  onChange={() =>
                    setIsNumberAllowed((prev) => !prev)
                  }
                  className="w-5 h-5 accent-emerald-500 cursor-pointer"
                />

                <div>
                  <p className="text-white font-semibold">
                    Numbers
                  </p>
                  <p className="text-xs text-slate-500">
                    0-9
                  </p>
                </div>

              </label>

              {/* Characters */}
              <label className="flex items-center gap-3 bg-slate-950/70 border border-slate-700 hover:border-emerald-500/50 rounded-xl p-4 cursor-pointer transition">

                <input
                  type="checkbox"
                  checked={isCharacter}
                  onChange={() =>
                    setIsCharacter((prev) => !prev)
                  }
                  className="w-5 h-5 accent-emerald-500 cursor-pointer"
                />

                <div>
                  <p className="text-white font-semibold">
                    Characters
                  </p>
                  <p className="text-xs text-slate-500">
                    ! @ # $ %
                  </p>
                </div>

              </label>

            </div>

          </div>

          {/* Bottom Info */}
          <div className="mt-7 pt-5 border-t border-white/10 flex justify-between text-xs text-slate-500">
            <span>🔐 Secure Generator</span>
            <span>{length} characters</span>
          </div>

        </div>

        <p className="text-center text-slate-600 text-xs mt-5">
          Generate strong passwords for better security
        </p>

      </div>
    </div>
  );
};

export default App;

