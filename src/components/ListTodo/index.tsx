import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Checkbox,Button, Col, Row } from 'antd';
import { TodoType } from '../../store/todo';
import { observer } from "mobx-react-lite"
import todo from "../../store/todo"


const columns: ColumnsType<TodoType> = [
    {
        title: 'Text',
        dataIndex: 'text',
        key: 'text',
    },
    {
        title: 'Done',
        dataIndex: 'done',
        key: 'id',
        render:(_,item)=><Checkbox onChange={()=>todo.doneTodo(item.id)} checked={item.done}/>
    },
    {
        title: 'Action',
        dataIndex: 'actions',
        key: 'actions',
        render: (_,item) => {
            return (
                <Button onClick={()=>todo.deleteTodo(item.id)} type="text" danger>
                Удалить
              </Button>
            )
        }
    },
];



const ListTodo: React.FC = observer(() => {
    const newTodo = todo.todos.map((item) => ({ ...item, key: item.id }))
    return <Table pagination={false} columns={columns} dataSource={newTodo} />
});

export default ListTodo;