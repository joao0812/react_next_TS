export default function segundo() {
    const condit = true
    const content = <p>EU SOU UM CONTEUDO</p>
    const items = []
    for (let i=0; i < 10; i++){
        items.push(i)
    }
    return(
        <div>
            <h1 className="text-3xl font-bold">SEGUNDO</h1>
            <a href="primeiro">Primeiro</a>
            {condit && (content)}
            {items.map((item, idx)=> <span key={idx}>  {item}  </span>)}
            
        </div>
    )
}