// CardTable.jsx
import { Card, Table } from 'react-bootstrap';

export function CardTable({ title, columns = [], data = [] }) {
  return (
    <Card className="shadow-sm mb-4">
      <Card.Body>
        <h6 className="text-primary fw-bold mb-3">{title}</h6>
        <div className="table-responsive">
          <Table bordered hover size="sm" className="mb-0">
            <thead className="table-light">
              <tr>
                {columns.map((col, idx) => (
                  <th key={idx}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.length === 0 ? (
                <tr>
                  <td colSpan={columns.length} className="text-center text-muted">
                    Tidak ada data
                  </td>
                </tr>
              ) : (
                data.map((row, i) => (
                  <tr key={i}>
                    {columns.map((col, j) => (
                      <td key={j}>{row[col] ?? '-'}</td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
}


export function CardTableMultiHeader({ title, headerGroups = [], columns = [], data = [] }) {
  return (
    <Card className="shadow-sm mb-4">
      <Card.Body>
        <h6 className="text-primary fw-bold mb-3">{title}</h6>
        <div className="table-responsive">
          <Table bordered hover size="sm" className="mb-0">
            <thead className="table-light">
              {headerGroups.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <th
                      key={j}
                      colSpan={cell.colSpan || 1}
                      rowSpan={cell.rowSpan || 1}
                      className="align-middle text-center"
                    >
                      {cell.label}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {data.length === 0 ? (
                <tr>
                  <td colSpan={columns.length} className="text-center text-muted">
                    Tidak ada data
                  </td>
                </tr>
              ) : (
                data.map((row, i) => (
                  <tr key={i}>
                    {columns.map((col, j) => (
                      <td key={j}>{row[col] ?? '-'}</td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
}

