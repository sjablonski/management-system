import { useState } from 'react';
import Button from 'components/Button';
import Card from 'components/Card';
import PageHeader from 'components/PageHeader';
import Table from 'components/Table';
import useSortableData from 'hooks/useSortableData';
import moment from 'moment';
import './EmergencyReportList.scss';
import Search from 'components/Search';
import useSearch from 'hooks/useSearch';

function EmergencyReportList() {
  const tableHeaders = [
    {
      name: 'index',
      label: '#',
      sort: null,
    },
    {
      name: 'id',
      label: 'ID',
      sort: 'ASC',
    },
    {
      name: 'date',
      label: 'Data',
      sort: 'ASC',
    },
    {
      name: 'location',
      label: 'Lokalizacja',
      sort: 'ASC',
    },
    {
      name: 'type',
      label: 'Typ',
      sort: 'ASC',
    },
    {
      name: 'status',
      label: 'Status',
      sort: 'ASC',
    },
    {
      name: 'actions',
      label: 'Akcje',
      sort: '',
    },
  ];

  const tableData = [
    {
      id: '1',
      date: '2011-10-05T14:48:00.000Z',
      location: 'ul. Warszawska 47, Kielce',
      type: 'Pogotowie',
      status: 'nowe',
    },
    {
      id: '2',
      date: '2011-10-10T16:48:00.000Z',
      location: 'ul. Warszawska 48, Wrocław',
      type: 'Pogotowie',
      status: 'nowe',
    },
    {
      id: '3',
      date: '2011-10-06T14:48:00.000Z',
      location: 'ul. Warszawska 49, Gdańsk',
      type: 'Pogotowie',
      status: 'nowe',
    },
  ];

  const [querySearch, setQuerySearch] = useState('');
  const { items, requestSort } = useSortableData(tableData);
  const { search } = useSearch(['id', 'date', 'location', 'type', 'status']);

  const handleClick = (name) => {
    requestSort(name);
  };

  const handleQuerySearch = (query) => {
    setQuerySearch(query);
  };

  return (
    <main>
      <PageHeader icon="view_list" title="Lista zgłoszeń">
        <Button icon="add">Dodaj zgłoszenie</Button>
      </PageHeader>
      <Card>
        <div className="emergency-report__table-actions">
          <Button className="button--secondary" icon="filter_list">
            Filtruj
          </Button>
          <Search
            className="emergency-report__search"
            value={querySearch}
            onSearch={handleQuerySearch}
          />
        </div>
        <Table headers={tableHeaders} onClickHeader={handleClick}>
          {search(querySearch, items).map((item, i) => (
            <tr key={item.id} className="table__row">
              <td>{i}</td>
              <td>{item.id}</td>
              <td>{moment(item.date).format('hh:mm, DD-MM-yyyy')}</td>
              <td>{item.location}</td>
              <td>{item.type}</td>
              <td>{item.status}</td>
              <td className="table__actions">
                <div className="table__buttons-wrapper">
                  <Button icon="check" className="button--small button--success">
                    Przyjmij
                  </Button>
                  <Button icon="info" className="button--small button--info">
                    Szczegóły
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </Table>
      </Card>
    </main>
  );
}

export default EmergencyReportList;
