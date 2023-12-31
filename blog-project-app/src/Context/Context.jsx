import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth, db } from '../firebase/firebase';
import Loading from '../components/Loading/Loading';
import { collection, onSnapshot, query } from 'firebase/firestore';

const BlogContext = createContext( );
const Context = ({children}) => {
  
    const [currentUser, setCurrentUser] = useState(false);
    const [ loading, setLoading ] = useState(true);
    const [ userLoading, setUserLoading] = useState(true);
    const [ allUsers, settAllUsers] = useState([]);

    const [publish, setPublish] = useState(false);

    useEffect(( ) => {
        // setLoading(true);
        const unsubscribe = onAuthStateChanged(auth, (user) =>{
            if(user) {
                 setCurrentUser(user);
            } else {
                setCurrentUser(null)
            }

            setLoading(false);
        });

        return ( ) => unsubscribe( );
    }, [ currentUser ]);

    useEffect(( ) => {
        const getUsers = ( ) => {
            const postRef = query(collection(db, "users"));
            onSnapshot(postRef, (snapshot) => {
                settAllUsers(
                    snapshot.docs.map((doc) => ({
                        ...doc.data( ),
                        id: doc.id,
                    }))
                )
                setUserLoading(false);
            });
        };
        getUsers( );
    }, [ ]);

    

    return <BlogContext.Provider value={{currentUser, setCurrentUser, allUsers, userLoading, publish, setPublish}}>
                    {loading ? <Loading /> : children}
               </BlogContext.Provider>
}

export default Context

export const Blog = ( ) => useContext(BlogContext);