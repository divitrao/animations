import {open} from 'react-native-quick-sqlite'
import sqlTableName from './sqlTableName'


export const SQL_DATABASE = open({'name':"UserInfoList"})

export const CreateTable = () =>{
    const create_user_list_table = `CREATE TABLE IF NOT EXISTS ${sqlTableName.USER_LIST_TABLE}
    (
        first_name varchar(100),
        last_name varchar(100),
        location varchar(100)
    )
    `
    console.log("aadsad")
    SQL_DATABASE.execute(create_user_list_table)
}