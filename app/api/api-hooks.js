import { useEffect, useState } from 'react'
import { getNormalizedGamesDataByCategory, isResponseOk } from './api-utils'

export const useGetDataByCategory = (endpoint, category) => {
  const [data, setData] = useState(null)
  useEffect(() => {
    async function fetchData() {
      const responseData = await getNormalizedGamesDataByCategory(endpoint, category)
      if (isResponseOk(responseData)) {
        setData(responseData)
      } else {
        setData([]) // Если данные не прошли проверку, установить пустой массив
      }
    }
    fetchData()
  }, [endpoint, category]) // Добавляем зависимости, чтобы хук перезагружался при изменении endpoint или category
  return data
}