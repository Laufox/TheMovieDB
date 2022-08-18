import Alert from 'react-bootstrap/Alert'

const AlertBox = ( { variant, message } ) => {
    return <Alert variant={variant}> <Alert.Heading>DANGER!!!</Alert.Heading> <p>{message}</p> </Alert>
}

export default AlertBox