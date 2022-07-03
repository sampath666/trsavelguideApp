import './index.css'

const Card = ({Obj}) => (
  <li className="cd1">
    <img className="img1" alt={Obj.name} src={Obj.image_url} />
    <div className="cd2">
      <h1>{Obj.name}</h1>
      <p className="p1">{Obj.description}</p>
    </div>
  </li>
)

export default Card
