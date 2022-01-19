
const UsuarioEntrada = ({setUser}) => {
  return (
    <>
      <label htmlFor="entrada">Informe o nome de usuário: </label>
      <input type="text" name="entrada" id="usuarioEntrada" onChange={(e) => setUser(e.target.value)}/>
    </>
  )
}

export default UsuarioEntrada;