import {useState} from "react";

function CalculoIMC(){

    const [peso, setPeso] = useState(null);
    const [altura, setAltura] = useState(null);
    const [resultado, setResultado] = useState(null);
    const [classificacao, setClassificacao] = useState(null);

    const calcularIMC = () => {
        if (peso && altura) {
            const imc = peso / (altura * altura);
            setResultado(imc.toFixed(2));

            if (imc < 18.5) {
                setClassificacao("Abaixo do Peso");
            } else if (imc >= 18.5 && imc < 24.9) {
                setClassificacao("Peso Normal");
            } else if (imc >= 25 && imc < 29.9) {
                setClassificacao("Sobrepeso");
            } else if (imc >= 30 && imc < 34.9) {
                setClassificacao("Obesidade Grau I");
            } else if (imc >= 35 && imc < 39.9) {
                setClassificacao("Obesidade Grau II");
            } else {
                setClassificacao("Obesidade Grau III");
            }
        }
    };

    return(
        <>
            <div style={{ marginLeft: '16px' }}>
                <label htmlFor="peso">Peso      - </label>
                <input type="number" id="peso" value={peso} 
                onChange={ e => setPeso(e.target.value)}/>
            </div>
            <div style={{ marginLeft: '16px' }}>
                <label htmlFor="alt">Altura - </label>
                <input type="number" id="alt" value={altura} 
                onChange={ e => setAltura(e.target.value)}/>
            </div>
            <button style={{ marginLeft: '16px' }} onClick={calcularIMC}>Calcular IMC</button>
            {resultado && <h1>Resultado IMC: {resultado}</h1>}
            {classificacao && <p>Classificação: {classificacao}</p>}
            <h2 style={{ marginLeft: '16px' }}>Tabela de Classificação do IMC</h2>
            <table style={{ borderCollapse: 'collapse', width: '100%', maxWidth: '400px', marginLeft: '16px' }}>
                <thead>
                    <tr>
                        <th style={{ border: '2px solid black', padding: '5px' }}>Classificação</th>
                        <th style={{ border: '2px solid black', padding: '5px' }}>IMC</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ border: '2px solid black', padding: '8px' }}>Abaixo do Peso</td>
                        <td style={{ border: '2px solid black', padding: '8px' }}>Menos que 18.5</td>
                    </tr>
                    <tr>
                        <td style={{ border: '2px solid black', padding: '8px' }}>Peso Normal</td>
                        <td style={{ border: '2px solid black', padding: '8px' }}>18.5 - 24.9</td>
                    </tr>
                    <tr>
                        <td style={{ border: '2px solid black', padding: '8px' }}>Sobrepeso</td>
                        <td style={{ border: '2px solid black', padding: '8px' }}>25 - 29.9</td>
                    </tr>
                    <tr>
                        <td style={{ border: '2px solid black', padding: '8px' }}>Obesidade Grau I</td>
                        <td style={{ border: '2px solid black', padding: '8px' }}>30 - 34.9</td>
                    </tr>
                    <tr>
                        <td style={{ border: '2px solid black', padding: '8px' }}>Obesidade Grau II</td>
                        <td style={{ border: '2px solid black', padding: '8px' }}>35 - 39.9</td>
                    </tr>
                    <tr>
                        <td style={{ border: '2px solid black', padding: '8px' }}>Obesidade Grau III</td>
                        <td style={{ border: '2px solid black', padding: '8px' }}>40 ou mais</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default CalculoIMC;