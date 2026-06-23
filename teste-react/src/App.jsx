import { useState } from "react";
import api from "./services/api"

function login() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const user = api.getUser("user", { email, senha });
  if (!user) throw new Error("Usuario ou senha incorretas")
  console.log(user)
  alert("Usuário Encontrado! Bem vindo", user)
  return user
}

function App() {
  const [email, setEmail] = useState("Hello")
  const [password, setPassword] = useState("")
  console.log(email)

  return (
    <div>
      <div id="containerLogin">
        <h1>Login</h1>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" value={email} onChange={e => setEmail(e.target.value)} /> <br />
        <label htmlFor="senha">Senha:</label>
        <input type="password" name="senha" id="senha" value={password} onChange={e => setPassword(e.target.value)} /> <br />
        {/* "A" chama a função onChanhe que chama a função set[valor], a váriavel passa a receber o valor do set[valor] */}
        {/* QUando um state é atualizado, todo o componente é renderizado */}
        {/* Renderiza: Significa reexecutar a função novamente */}
        <button type="submit" onClick={() => login()}>
          Enviar
        </button>
      </div>
    </div >
  )
}

export default App
