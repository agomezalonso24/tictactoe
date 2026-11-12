import Card from 'react-bootstrap/Card'

export default function Header(props){
    return <Card className='text-center' style={{ width: '18rem', margin: 'auto auto 10px' }}>
      <Card.Body>
        <Card.Title>Cabecera</Card.Title>
        <Card.Text>
          {props.turn === 'Player 1 -Xs' ? 'Player 2 -0s' : 'Player 1 -Xs'} has won
        </Card.Text>
      </Card.Body>
    </Card>


}
