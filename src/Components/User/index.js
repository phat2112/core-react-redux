import React, {useState,useEffect, useRef} from 'react';
import PropTypes from 'prop-types'
import {Table} from 'antd'
import * as userAction from 'Stores/User/Actions'
import {UserSelector} from 'Stores/User/Selectors'
import {connect} from 'react-redux'

const User = ({getUserList, userList}) => {
      const [search, setSearch] = useState(false)
      const [valueSearch, setValueSearch] = useState('')
      const [searchResponse, setSearchResponse] = useState([])
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
      ];
      const handleSearch = e => {
          let newArr = []
          e.preventDefault()
          console.log('valueSearch', valueSearch, userList.toJS().data)
          if(userList.toJS()){
              let result = userList.toJS().data.filter(item => item.firstName + item.lastName  === valueSearch)
              if(result){
                  setSearch(true)
                  newArr.push(result)
                  console.log('trueeee', result)
                  setSearchResponse(...newArr)
              }
          }
      }
      useEffect(() => {
        getUserList(1)
      }, [])
      useEffect(() => {
          console.log('userList', userList.toJS())
      }, [userList])
      
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                    </tr>
                </thead>
                {search ?(
                    <tbody>
                      {
                          searchResponse && searchResponse.map((item, index) => (
                              <tr index={index}>
                                <td>{item.id}</td>
                                <td>{item.firstName + item.lastName}</td>
                                <td>{item.email}</td>
                              </tr>
                          ))
                      }
                    </tbody>
                ) : (
                    <tbody>
                        {
                        userList.toJS().data && userList.toJS().data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.firstName + item.lastName}</td>
                                <td>{item.email}</td>
                            </tr>
                        ))}
                    </tbody>
                )}
            </table>
            <form onSubmit={e => handleSearch(e)}>
                <input type="text" value={valueSearch} onChange={e=> setValueSearch(e.target.value)}/>
                <button type='submit'>Search</button>
            </form>
        </div>
    );
};

User.propTypes = {
    userList: PropTypes.object,
    getUserList: PropTypes.func,
};
const mapStateToProps = state => ({
    userList: UserSelector.userList(state)
})
const mapDispatchToProps = dispatch => ({
    getUserList: page => dispatch(userAction.getUserList(page))
})
export default connect(mapStateToProps, mapDispatchToProps)(User);