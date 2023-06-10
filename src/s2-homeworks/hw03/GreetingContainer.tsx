import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

export const pureAddUser = (name: string, setError: React.Dispatch<React.SetStateAction<string>>,
    setName: React.Dispatch<React.SetStateAction<string>>, addUserCallback: (name: string) => void) => {
    if (name === '') { setError('error') }
    else { addUserCallback(name); setName('') }
}

export const pureOnBlur = (name: string, setError: React.Dispatch<React.SetStateAction<string>>) => { // если имя пустое - показать ошибку
    if (name === '') {
        setError('error')
    }
}

export const pureOnEnter = (addUser: () => void) => { // если нажата кнопка Enter - добавить
    addUser()
}


export const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') { pureOnEnter(addUser) }
    }

    const totalUsers = users.length
    const lastUser = users.slice(-1)[0]
    const lastUserName = lastUser?.name.split(' ').slice(-1)[0]




    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}


