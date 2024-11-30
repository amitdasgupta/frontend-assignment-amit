export function Header({
  names = ["S.No.", "Percentage funded", "Amount pledged"],
}) {
  return (
    <thead>
      <tr className="row">
        {names.map((val) => (
          <th key={val} className="cell">
            {val}
          </th>
        ))}
      </tr>
    </thead>
  );
}
