import {Link} from "react-router-dom"

import illustration from "../assets/images/illustration.svg"
import logo from "../assets/images/logo.svg"

import "../styles/auth.scss"
import { Button } from "../components/Button"

import { useContext } from "react"
import { AuthContext } from "../App"

export function NewRoom(){
  const {user} = useContext(AuthContext)
  console.log(user?.name)

  return (
    <div id="page-auth">
      <aside>
        <img src={illustration} alt="Ilustracao simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logo} alt="LetMeAsk" />

          <h1>Lalala</h1>
          <h1>{user?.name}</h1>


          <h2>Criar uma nova sala</h2>
          <form>
            <input
              type="text"
              placeholder="Nome da sala"
            />
            <Button type="submit">
              Criar sala
            </Button>
          </form>
            <p>
              Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
            </p>
        </div>
      </main>
    </div>
  )
}