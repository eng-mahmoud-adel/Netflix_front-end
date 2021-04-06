function ListElements(props) {
  return (
    <>
      {props.children.map((item, index) => (
        <li key={index} className="col-6 col-sm-3 pl-0" style={{ listStyleType:"none"}}>
            <a className="text-muted" href="#">
                <small>{item}</small>
            </a>
        </li>
      ))}
    </>
  );
}

export default ListElements;