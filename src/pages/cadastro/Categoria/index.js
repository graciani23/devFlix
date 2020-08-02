import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);


    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor,
        })
    }

    function handlerChange(infos) {
        setValue(
            infos.target.getAttribute('name'),
            infos.target.value
        );
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>

            <form onSubmit={function handleSubmit(infos) {
                infos.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);

                setValues(valoresIniciais)
            }}>

                <FormField
                    label="Nome da Categoria"
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handlerChange}
                />

                <FormField
                    label="Descrição: "
                    type="???"
                    name="descricao"
                    value={values.descricao}
                    onChange={handlerChange}
                />
                {/* <div>
                <label>
                    Descrição:
                    <input
                        type="text"
                        name="descricao"
                        value={values.descricao}
                        onChange={handlerChange}
                    />
                </label>
                </div> */}

                <FormField
                    label="Cor"
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handlerChange}
                />

                {/* <div>
                    <label>
                        Cor:
                    <input
                            type="color"
                            name="cor"
                            value={values.cor}
                            onChange={handlerChange}
                        />
                    </label>
                </div> */}

                <Button>
                    Cadastrar
                </Button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Ir para HOME
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;