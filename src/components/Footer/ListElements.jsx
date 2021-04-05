function ListElements(props) {
  return (
    <>
        {props.children.map((item) => (
            <li className="col-6 col-sm-3 pl-0" style={{ listStyleType:"none"}}>
                <a class="text-muted" href="#">
                    <small>{item}</small>
                </a>
            </li>
        ))}           
    </>
  );
}

export default ListElements;