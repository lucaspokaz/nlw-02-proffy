import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'
import api from '../../services/api'

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

// FC ou FunctionalComponent
const TeacherItem: React.FC<TeacherItemProps> = (props) => {

  function createNewConnection() {
    api.post('/connections', {
      user_id: props.teacher.id
    })
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={props.teacher.avatar} alt="perfil" />
        <div>
          <strong>{props.teacher.name}</strong>
          <span>{props.teacher.subject}</span>
        </div>
      </header>
      <p> {props.teacher.bio} </p>
      <footer>
        <p>
          Preço/Hora <strong>R$ {props.teacher.cost}</strong>
        </p>
        <a target='blank'
          href={`https://wa.me/${props.teacher.whatsapp}`}
          onClick={createNewConnection}
        >
          <img src={whatsappIcon} alt="whatsapp" /> Entrar em contato
        </a>
      </footer>
    </article>
  )
}

export default TeacherItem;
