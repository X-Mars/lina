import empty from '@/layout/empty'
import i18n from '@/i18n/i18n'

const clouds = {
  path: 'cloud',
  component: empty,
  redirect: '',
  hidden: true,
  meta: {
    title: i18n.t('CloudSync'),
    app: 'xpack',
    resource: 'account'
  },
  children: [
    {
      path: '',
      component: () => import('@/views/assets/Cloud'),
      name: 'CloudCenter',
      hidden: true,
      meta: {
        title: i18n.t('CloudSync')
      }
    },
    {
      path: 'account',
      component: empty,
      hidden: true,
      meta: {
        title: i18n.t('AccountList'),
        permissions: ['xpack.view_account']
      },
      children: [
        {
          path: '',
          name: 'AccountList',
          hidden: true,
          redirect: '/console/assets/cloud',
          meta: {
            title: i18n.t('AccountList'),
            permissions: ['xpack.view_account']
          }
        },
        {
          path: 'create',
          component: () => import('@/views/assets/Cloud/Account/AccountCreateUpdate'),
          name: 'AccountCreate',
          hidden: true,
          meta: {
            title: i18n.t('Create'),
            action: 'create',
            permissions: ['xpack.add_account']
          }
        },
        {
          path: ':id/update',
          component: () => import('@/views/assets/Cloud/Account/AccountCreateUpdate'),
          name: 'AccountUpdate',
          hidden: true,
          meta: {
            title: i18n.t('Update'),
            action: 'update',
            permissions: ['xpack.change_account']
          }
        },
        {
          path: ':id/',
          component: () => import('@/views/assets/Cloud/Account/AccountDetail/index'),
          name: 'AccountDetail',
          hidden: true,
          meta: {
            title: i18n.t('Detail'),
            permissions: ['xpack.view_account']
          }
        }
      ]
    },
    {
      path: 'sync-instance-tasks',
      component: empty,
      hidden: true,
      meta: {
        title: i18n.t('SyncInstanceTaskList'),
        permissions: ['xpack.view_syncinstancetask']
      },
      children: [
        {
          path: '',
          component: () => import('@/views/assets/Cloud/'),
          name: 'SyncInstanceTaskList',
          hidden: true,
          meta: {
            title: i18n.t('SyncInstanceTaskList'),
            permissions: ['xpack.view_syncinstancetask']
          }
        },
        {
          path: 'create',
          component: () => import('@/views/assets/Cloud/SyncInstanceTask/SyncInstanceTaskCreateUpdate'),
          name: 'SyncInstanceTaskCreate',
          hidden: true,
          meta: {
            title: i18n.t('SyncInstanceTaskCreate'),
            permissions: ['xpack.add_syncinstancetask']
          }
        },
        {
          path: ':id/update',
          component: () => import('@/views/assets/Cloud/SyncInstanceTask/SyncInstanceTaskCreateUpdate'),
          name: 'SyncInstanceTaskUpdate',
          hidden: true,
          meta: {
            title: i18n.t('SyncInstanceTaskUpdate'),
            permissions: ['xpack.change_syncinstancetask']
          }
        },
        {
          path: ':id',
          component: () => import('@/views/assets/Cloud/SyncInstanceTask/SyncInstanceTaskDetail/index'),
          name: 'SyncInstanceTaskDetail',
          hidden: true,
          meta: {
            title: i18n.t('SyncInstanceTaskDetail')
          }
        }
      ]
    },
    {
      path: 'strategy',
      component: empty,
      hidden: true,
      meta: {
        title: i18n.t('Strategy'),
        permissions: ['xpack.view_strategy']
      },
      children: [
        {
          path: '',
          name: 'CloudStrategyList',
          hidden: true,
          component: () => import('@/views/assets/Cloud/'),
          meta: {
            title: i18n.t('StrategyList'),
            permissions: ['xpack.view_strategy']
          }
        },
        {
          path: 'create',
          component: () => import('@/views/assets/Cloud/Strategy/StrategyCreateUpdate'),
          name: 'CloudStrategyCreate',
          hidden: true,
          meta: {
            title: i18n.t('StrategyCreate'),
            action: 'create',
            permissions: ['xpack.add_strategy']
          }
        },
        {
          path: ':id/update',
          component: () => import('@/views/assets/Cloud/Strategy/StrategyCreateUpdate'),
          name: 'CloudStrategyUpdate',
          hidden: true,
          meta: {
            title: i18n.t('StrategyUpdate'),
            permissions: ['xpack.change_strategy']
          }
        },
        {
          path: ':id/',
          component: () => import('@/views/assets/Cloud/Strategy/StrategyDetail/index'),
          name: 'CloudStrategyDetail',
          hidden: true,
          meta: {
            title: i18n.t('StrategyDetail'),
            permissions: ['xpack.view_strategy']
          }
        }
      ]
    }
  ]
}

function setChildrenActiveMenu(children, activeMenu) {
  for (const item of children) {
    item.meta.activeMenu = activeMenu
    if (item.children) {
      setChildrenActiveMenu(item.children, activeMenu)
    }
  }
}

setChildrenActiveMenu(clouds.children, '/console/assets/assets')
export default [
  clouds
]
