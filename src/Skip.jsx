import Button from 'react-bootstrap/Button';

export default function Reset(props){
    return <Button style={{ width: '18rem', margin: 'auto auto 10px'}} variant='outline-primary' onClick={props.skipTurn}>Skip Turn?</Button>
}