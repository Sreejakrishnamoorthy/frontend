import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import Broadcast from 'mdi-material-ui/Broadcast'
import Calendar from 'mdi-material-ui/Calendar'
import ChartLine from 'mdi-material-ui/ChartLine'
// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Channels',
      icon: Broadcast,
      
    }, 
    {
      title: 'Calendar',
      icon: Calendar,
      path: '',
      openInNewTab: false
    },
    {
      title: 'Analytics',
      icon: ChartLine,
      path: '/'
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    }
  ]
}

export default navigation