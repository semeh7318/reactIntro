const GroceryListItem = (props) => {
  return (
    <li onClick={() => console.log("Item cliqué")}>
      {props.item}
    </li>
  );
};
 
export default GroceryListItem;