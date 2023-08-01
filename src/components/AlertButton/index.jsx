export const AlertButton = ({ label }) => {
  return <button onClick={() => alert(`A label desse botão é: ${label}`)}>AlertButton</button>
}

AlertButton.defaultProps = {
  label: 'Clique aqui (texto inserido por DefaultProps).'
}