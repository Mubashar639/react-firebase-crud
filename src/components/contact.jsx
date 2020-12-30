import React,{useState,useEffect} from 'react';
import {firestore} from '../firebase';

export default function ContactList() {
  const [users,setUsers]=useState([]);
  // const fetchUsers=async()=>{
  //   const response=db.collection('users');
  //   console.log(response);
  //   const data=await response.get();
  //   data.docs.forEach(item=>{
  //    setUsers([...users,item.data()])
  //   })
  // }

  // useEffect(() => {
  //   fetchUsers();
  // },[]);
  
  useEffect( () => {
    // getUsers()
    firestore.collection("users")
    .onSnapshot(snapshot => {
      const listItems = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }))
      setUsers(listItems);
    })
    console.log(users)
    return users;
}, [])

// const getUsers = () => {
//   firestore.collection('users').get()
//     .then(querySnapshot => {
//     querySnapshot.forEach( doc => {
//       let id= doc.id;
//       let data = doc.data();
//       let finalData = {data,id};
//       // console.log(doc.data())
//       setUsers(prev => ([...prev,finalData]))
//     })
//   })
//   .catch(err => {
//     console.log(err.message)
//   })
// }

// const del =async (id) => {
//   // await db.collection('users').where('id', '==', id).get();
// //   const doc = await db.collection('users').document(id).delete();

//   const doc = db.collection('users');
//   console.log(`deleted: ${doc}`);
// }

return (
  <div className="App">
      { users ?
        users && users.map(user=>{
          // console.log(user);
          let {id} = user;
          let {firstname, lastname, gender} = user;
          return(
            <div key={id} className="user-container" style={{textAlign: 'center'}}>
              {/* <p>id: {id}</p> */}
              <h4>First Name: {firstname}</h4>
              <p>Last Name: {lastname}</p>
              <p>Gender : {gender}</p>
              {/* {console.log(firestore.collection('users').doc(user.id).delete())} */}
              <button onClick={() => firestore.collection('users').doc(id).delete()}>Delete</button>
            </div>
          )
        })
        : null
      }
    </div>
  );
}