<template>
  <GenericCreateUpdatePage
    ref="createUpdatePage"
    :initial="initial"
    :fields="fields"
    :fields-meta="fieldsMeta"
    :url="url"
  />
</template>

<script>
import { GenericCreateUpdatePage } from '@/layout/components'
import { getDayFuture } from '@/utils/common'
import PermissionFormActionField from '../components/PermissionFormActionField'
import { remoteApplication } from '../const.js'

export default {
  components: {
    GenericCreateUpdatePage
  },
  data() {
    const queryCategory = this.$route.query.category
    const queryType = this.$route.query.type
    const urlSearchFields = `category=${queryCategory}&type=${queryType}`
    return {
      initial: {
        is_active: true,
        date_start: new Date().toISOString(),
        date_expired: getDayFuture(36500, new Date()).toISOString(),
        type: queryType,
        category: queryCategory
      },
      fields: [
        [this.$t('common.Basic'), ['name']],
        [this.$t('perms.User'), ['users', 'user_groups']],
        [this.$t('assets.Applications'), ['category', 'type', 'applications', 'system_users']],
        [this.$t('common.action'), ['actions']],
        [this.$t('common.Other'), ['is_active', 'date_start', 'date_expired', 'comment']]
      ],
      url: `/api/v1/perms/application-permissions/?${urlSearchFields}`,
      createSuccessNextRoute: { name: 'ApplicationPermissionDetail' },
      fieldsMeta: {
        users: {
          el: {
            value: [],
            ajax: {
              url: '/api/v1/users/users/?fields_size=mini',
              transformOption: (item) => {
                return { label: item.name + '(' + item.username + ')', value: item.id }
              }
            }
          }
        },
        user_groups: {
          el: {
            value: [],
            url: '/api/v1/users/groups/'
          }
        },
        category: {
          type: 'select',
          disabled: true
        },
        type: {
          type: 'select',
          disabled: true
        },
        applications: {
          label: this.$t('assets.Applications'),
          el: {
            value: [],
            ajax: {
              url: `/api/v1/applications/applications/?${urlSearchFields}`,
              transformOption: (item) => {
                return { label: item.name + ' (' + item.type_display + ')', value: item.id }
              }
            }
          }
        },
        system_users: {
          el: {
            value: [],
            ajax: {
              url: (function() {
                let url = '/api/v1/assets/system-users/'
                if (this.$route.query.category === 'remote_app') {
                  url += `?protocol=rdp`
                } else if (queryType) {
                  url += `?protocol=${queryType}`
                }
                return url
              }.bind(this)()),
              transformOption: (item) => {
                if (queryType === 'k8s') {
                  return { label: item.name, value: item.id }
                }
                const username = item.username || '*'
                return { label: item.name + '(' + username + ')', value: item.id }
              }
            }
          }
        },
        date_start: {
          label: this.$t('common.dateStart')
        },
        date_expired: {
          label: this.$t('common.dateExpired')
        },
        actions: {
          label: this.$t('perms.Actions'),
          component: PermissionFormActionField,
          helpText: remoteApplication.includes(queryType) ? this.$t('common.actionsTips') : ''
        },
        is_active: {
          type: 'checkbox'
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
