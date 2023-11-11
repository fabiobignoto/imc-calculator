import { useEffect, useState } from "react";

import styles from './Formulario.module.css'

const Formulario = () => {

    const [altura, setAltura] = useState(1);
    const [peso, setPeso] = useState(0);
    const [resultado, setResultado] = useState(0);
    const [estilo, setEstilo] = useState(styles.baixo);
    const [categoria, setCategoria] = useState('');

    const calculaIMC = () => {
        setResultado(peso / altura / altura);
    }

    useEffect(() => {
        calculaIMC();
    }, [altura, peso])

    useEffect(() => {
        if (resultado < 18.00) {
            setEstilo(styles.baixo);
            setCategoria('Abaixo do recomendado')
        }
        else {
            if (resultado < 25.00) {
                setEstilo(styles.bom);
                setCategoria('Índice bom')

            }
            else {
                if (resultado < 30.00) {
                    setEstilo(styles.acima);
                    setCategoria('Acima do recomendado')

                }
                else {
                    if (resultado < 35.00) {
                        setEstilo(styles.obesidadeI);
                        setCategoria('Obesidade I')

                    }
                    else {
                        if (resultado < 40.00) {
                            setEstilo(styles.obesidadeII);
                            setCategoria('Obesidade II')
                        }
                        else {
                            if (resultado >= 40.00) {
                                setEstilo(styles.obesidadeIII);
                                setCategoria('Obesidade III')
                            }
                        }
                    }
                }
            }
        }

    }, [resultado])

    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <div className={styles.input_div}>
                    <div>
                        <label htmlFor="height">Altura (m):</label>
                        <input className={styles.input} id="height" type="number" onInput={(e) => setAltura(parseFloat(e.target.value))} step={0.01} />
                    </div>
                    <div>
                        <label htmlFor="weight">Peso (Kg):</label>
                        <input className={styles.input} id="weight" type="number" onInput={(e) => setPeso(parseFloat(e.target.value))} />
                    </div>
                </div>
            </form >

            <h2>I.M.C.</h2>
            <div id={styles.result} className={estilo}  >
                <span>{resultado.toFixed(2)}</span>
                <span>{categoria}</span>
            </div>

        </div>
    )
}

export default Formulario;