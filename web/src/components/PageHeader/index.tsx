import React from 'react'
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back2.svg'
import './styles.css'

interface PageHeaderProps {
  title: string;
  description?: string;
}

// FC ou FunctionalComponent
const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img className="botao-voltar" src={backIcon} alt="voltar" />
        </Link>
        <img src={logoImg} alt="proffy" />
      </div>
      <div className="header-content">
        <strong> {props.title} </strong>
        { props.description && <p>{props.description}</p> }

        { props.children }
      </div>
    </header>
  )
}

export default PageHeader;