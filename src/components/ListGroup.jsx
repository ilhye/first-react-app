export default function ListGroup() {
  // enclosed with curly braces to turn them into objects
  const items = [
    { id: 1, location: "San Jose", country: "Philippines" },
    { id: 2, location: "New York", country: "United States" },
    { id: 3, location: "Taiwan", country: "China" },
  ]; 

  /**
   * Sort using LOCATION
   * items.sort((a, b) => a.location.localeCompare(b.location)); - Alphabetical
   * items.sort((a, b) => b.location.localeCompare(a.location)); - Reverse Order
   * 
   * Sort using COUNTRY
   * items.sort((a, b) => a.country.localeCompare(b.country)); - Alphabetical
   * items.sort((a, b) => b.country.localeCompare(a.country)); - Reverse
   */

  
  /**
   * Key - unique identifier
   * essential siya kapag magc-change, add, or delete
   * &nbsp; {items.country} - para ma-display location with its country
   */
  const listItems = items.map((items) => (
    <li key={items.id}>
      {items.location}, {items.country}
    </li>
  ));

  return <ol>{listItems}</ol>;
}
