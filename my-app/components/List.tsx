type ListParams = {
  description: string;
};

function List(props: ListParams) {
  return (
    <p>{props.description}</p>
  )
}

export default List;