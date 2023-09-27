// import { getDictionary } from "../../get-dictionary"
// import { Locale } from "../../i18n-config"

// import { useState, useEffect } from "react"

// const useDictionary = ({ params: { lang } }: { params: { lang: Locale } }) => {
//   const [data, setData] = useState({})

//   useEffect(() => {
//     const getDict = async () => {
//       console.log("hello")
//       const dictionary = await getDictionary(lang)
//       setData(dictionary)
//     }
//     getDict()
//   }, [])

//   return data
// }

// export default useDictionary

import { create } from "zustand"

interface useDictionaryStore {
  dictionary: {}
  setDictionary: (dict: {}) => void
}

export const useDictionaryHandler = create<useDictionaryStore>((set) => ({
  dictionary: {},
  setDictionary: (dict: {}) => set(() => ({ dictionary: dict })),
}))
