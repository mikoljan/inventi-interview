import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import * as Icon from 'react-bootstrap-icons';
import BootstrapTable from 'react-bootstrap-table-next';
import PostDetail from './postDetail';
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../redux/posts";

export default function(props){
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const [itemId, setItemId] = React.useState(-1);

  const columns = [
    {
      text: 'User',
      dataField: 'userId'
    },
    {
      text: 'Id',
      dataField: 'id'
    },
    {
      text: 'Title',
      dataField: 'title',
      formatter: (cell, row, index, extraData) => {
        return <>
          <a href="#" onClick={() => setItemId(row.id)} >
            {cell}
          </a>
        </>;
      }
    },
    {
      text: 'Body',
      dataField: 'body'
    },
    {
        text: "",
        align: 'center',
        headerAlign: 'center',
        formatter: (cell, row, index, extraData) => {
            return <>
              <a href="#" onClick={() => deletePostById(row.id)} >
                  <Icon.Trash3Fill style={{color: 'red'}} />
              </a>
            </>;
        }
    }
  ]

  const deletePostById = (id) => {
    dispatch(deletePost(id));
  }

  const resetItem = () => {
    setItemId(-1);
  }

  return(
  <>
    <PostDetail itemId={itemId} resetItem={resetItem}/>
    <BootstrapTable
          data={posts}
          columns={columns}
          striped
          hover
          keyField='id'
          noDataIndication="Table is Empty"
          bordered={false}
      />
  </>)
}

