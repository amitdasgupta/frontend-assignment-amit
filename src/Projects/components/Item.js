export function Item({ sNo, amtPledged, percFunded }) {
  return (
    <tr className="row">
      <td className="cell">{sNo}</td>
      <td className="cell">{percFunded}</td>
      <td
        className="cell
      "
      >
        {amtPledged}
      </td>
    </tr>
  );
}
