const ListItem = (props: any) => {
  const { name, value } = props;
  return (
    <>
      <li>
        {name}={value}
      </li>
    </>
  );
};

export default ListItem;
