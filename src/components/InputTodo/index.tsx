import React, { useState } from "react"
import { Input, Space } from 'antd';
import { observer } from "mobx-react-lite"
import todo from "../../store/todo";

const { Search } = Input;

const InputTodo = observer(() => {
    const [valueInput,setValueInput] = useState("")

    const onChange = (value:string)=>{
        todo.addTodo(value)
        setValueInput("")
    }
    return <Search
        placeholder="input search text"
        allowClear
        value={valueInput}
        onChange={(e)=>setValueInput(e.target.value)}
        enterButton="Добавить"
        size="large"
        onSearch={onChange}
    />
})

export default InputTodo