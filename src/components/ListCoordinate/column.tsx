import type { ColumnsType } from 'antd/es/table';
import { DataType } from './type';

const columns: ColumnsType<DataType> = [
    {
      title: 'Номер заявки',
      dataIndex: 'nameOrder',
      key: 'nameOываываrder',
    },
    {
      title: 'Координаты от lat',
      dataIndex: 'coordinateFromLat',
      key: 'coordinateFromLat',
    },
    {
      title: 'Координаты от int',
      dataIndex: 'coordinateFromInt',
      key: 'coordinateFromInt',
    },
    {
      title: 'Координаты до lat',
      dataIndex: 'coordinateToLat',
      key: 'coordinateToLat',
    },
    {
      title: 'Координаты до int',
      dataIndex: 'coordinateToInt',
      key: 'coordinateToInt',
    },
  ];

  export default columns;