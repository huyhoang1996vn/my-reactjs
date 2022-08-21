import { useState, useEffect } from 'react';
import axios from "axios";

/*
componentDidMount()
Được gọi khi component đã được mount (render thành công )

ComponentDidUpdate()
Phương thức này được gọi khi component đã re-render xong

componentWillUnmount()
Đây là bước cuối cùng trong mỗi component, khi tất cả các tác vụ hoàn thành và bạn tiến hành unmount DOM. Quá trình này chỉ có duy nhất 1 phương thức đó là 
*/


/*
Role giving dependencies in useEffect:
- An empty array acts: it only runs once (like componentDidMount as in).

- No value acts, it runs first on mount and then on every re-render. 
 (as both componentDidMount and componentDidUpdate)

- An array with any value inside, 
  eg , [variable1] will only execute the code inside your useEffect hook ONCE on mount, 
  as well as whenever that particular variable (variable1) changes.
*/

export default function FormUseEffect() {
    const [listUser, setListUser] = useState([]);
   
    // like componentDidMount,  it only runs once.
    useEffect(() => {
      const getUserAPI = 'https://5df8a4c6e9f79e0014b6a587.mockapi.io/freetuts/users'
      axios.get(getUserAPI).then((res) => {
        setListUser(res.data);
      }).catch((err) => {
        console.log(err);
        alert("Xảy ra lỗi");
      })
   
    }, [])
   
    return (
      <>
        <code>freetuts.net</code> <br />
        {listUser.map((e, i)=><p key={i} >{e.name}</p>)}
      </>
    );
  }