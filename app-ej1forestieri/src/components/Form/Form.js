import {Fragment, useState} from "react";

const Form = () => {

    const [datosUsuario, setDatosUsuario] = useState({
        nombre:'',
        telefono:'',
        email:''
    })

    const handleInputChange = (event) => {
        setDatosUsuario({
            ...datosUsuario,
            [event.target.name] : event.target.value

        })
    }

    return (
        <Fragment>
                <h2>Por favor, ingrese sus datos para completar la compra</h2>
                <form>
                <input type="text" placeholder="Nombre y Apellido" className="campo-form" name="nombre" onChange={handleInputChange} />
                <input type="text" placeholder="Teléfono" className="campo-form" name="telefono" onChange={handleInputChange} />
                <input type="text" placeholder="Email" className="campo-form" name="email" onChange={handleInputChange} />
                </form>
        </Fragment>
    )
}

export default Form