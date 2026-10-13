import GroceryListItem from "./GroceryListItem";
 
const GroceryList = () => {
  // Partie 5 : tableau d'éléments
  const items = ["Pommes", "Bananes", "Fraises"];
 
  return (
    <ul>
      {items.map((item, index) => (
        <GroceryListItem key={index} item={item} />
      ))}
    </ul>
  );
};
 
export default GroceryList;