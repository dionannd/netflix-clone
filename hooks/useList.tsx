import { collection, DocumentData, onSnapshot } from 'firebase/firestore'
import React from 'react'
import { db } from '../firebase'
import { Movie } from '../typing'

const useList = (uid: string | undefined) => {
  const [list, setList] = React.useState<DocumentData[] | Movie[]>([])

  React.useEffect(() => {
    if (!uid) return

    return onSnapshot(collection(db, 'customers', uid, 'myList'), snapshot => {
      setList(
        snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
      )
    })
  }, [db, uid])

  return list
}

export default useList
