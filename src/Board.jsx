import Square from './Square';

export default function Board(props){
    return <div>
        {
          props.values.map((rowValues, index)=>{
            let row = rowValues.map((value, columnIndex)=>{
              return <Square key= {index + "-" + columnIndex} value={value}/>
            })
            return <div key={"row" + index} >{row}</div>
          })
        }
      </div>
}