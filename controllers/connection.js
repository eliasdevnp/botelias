const connectionReady = (cb = () =>{}) => {
    console.log('Estou escutando Mensagens')
    console.log('Estou Conectado!');
    console.log('🔴 Mande uam Mensagem');
    cb()
}

const connectionLost = (cb = () =>{}) => {
    console.log('** Error de autentificacion vuelve a generar el QRCODE (Borrar el archivo session.json) **');
    cb()
}


module.exports = {connectionReady, connectionLost}