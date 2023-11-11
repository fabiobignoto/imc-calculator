import { useState } from 'react';

import styles from './Header.module.css'

const Header = () => {
    const [showText, setShowtext] = useState(false);

    const botaoClicado = (e) => {
        setShowtext(!showText);
        console.log(e)
        e.currentTarget.classList.toggle(styles.hideDef);
        e.currentTarget.classList.toggle(styles.showDef);

    }

    return (
        <header className={styles.header}>
            <h1 className={styles.headerTitle}>Índice de Massa Corporal</h1>
            {showText && (
                <><p className={styles.headerParagraph}>O índice de massa corporal (IMC) é uma medida internacional usada para calcular se uma pessoa está no peso ideal. Desenvolvido pelo polímata Lambert Quételet no fim do século XIX, trata-se de um método fácil e rápido para a avaliação do nível de gordura de cada pessoa, sendo, por isso, um preditor internacional de obesidade adotado pela Organização Mundial da Saúde (OMS).</p>  <p className={styles.smallText}>  Disponível em: <a className={styles.smallText} href='https://pt.wikipedia.org/wiki/%C3%8Dndice_de_massa_corporal' >https://pt.wikipedia.org/wiki/%C3%8Dndice_de_massa_corporal</a></p></>
            )
            }

            <button className={styles.showDef} type="button" onClick={(e) => botaoClicado(e)}>{showText ? 'Recolher definição' : 'Expandir definição'}</button>
        </header >
    )
}

export default Header;