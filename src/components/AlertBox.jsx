import Alert from 'react-bootstrap/Alert'

const AlertBox = ( { variant, headingMessage, bodyMessage } ) => {
    return <Alert variant={variant}> <Alert.Heading>{headingMessage}</Alert.Heading> <p>{bodyMessage}</p> </Alert>
}

export default AlertBox