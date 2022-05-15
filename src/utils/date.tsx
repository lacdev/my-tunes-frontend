import { format, formatDistance } from 'date-fns'
import { es } from 'date-fns/locale'
const formatDate = (date: Date) => {
  try {
    const result = new Date(date)
    return formatDistance(result, new Date(), {
      addSuffix: true,
      includeSeconds: true,
      locale: es,
    })
  } catch (error) {
    console.log(error)
    return ''
  }
}

// { locale: es }

const formatCreationDate = (date: Date) => {
  try {
    const result = new Date(date)
    return format(result, 'yyyy')
  } catch (error) {
    console.log(error)
    return ''
  }
}
export { formatDate, formatCreationDate }
