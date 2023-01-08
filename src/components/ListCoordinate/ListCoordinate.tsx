import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectRoute } from 'store/mapRouteSlice';
import { Table, Typography } from 'antd';
import { DataType } from './type';
import columns from './column';
import styles from './ListCoordinate.module.css';
import styled from "styled-components";

const StyledTable = styled((props) => <Table {...props} />)`
  && tbody > tr:hover > .ant-table-cell-row-hover {
    background: none !important;
  }
`;

const ListCoordinate: React.FC = () => {
  const data = useSelector((state:any) => state.mapRoute.mapRoutes.list);
  const idSelected = useSelector((state:any) => state.mapRoute.mapRoutes.idSelected);
  
  const dispatch = useDispatch();
  const handleSelect = (data: DataType) => {
    dispatch(selectRoute(data.id));
  };

  return (
    <div className={styles.container}>
      <Typography.Title style={{ marginBottom: 24, color: '#303730' }}>
        Заявки
      </Typography.Title>
      
      <StyledTable
        pagination={false} 
        columns={columns}
        dataSource={data}
        rowClassName={(record: DataType) => {
          return  record.id === idSelected ? 'selected' : ''
        }}
        onRow={(record: DataType) => {
          return {
            onClick: () => handleSelect(record)
          };
        }}
      />
    </div>
  )
};

export default ListCoordinate;