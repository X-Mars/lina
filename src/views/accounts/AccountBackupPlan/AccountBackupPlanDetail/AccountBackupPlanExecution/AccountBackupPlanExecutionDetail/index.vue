<template>
  <GenericDetailPage :object.sync="execution" :active-menu.sync="config.activeMenu" v-bind="config" v-on="$listeners">
    <keep-alive>
      <component :is="config.activeMenu" :object="execution" />
    </keep-alive>
  </GenericDetailPage>
</template>

<script>
import { GenericDetailPage } from '@/layout/components'
import AccountBackupPlanExecutionInfo from './AccountBackupPlanExecutionInfo'

export default {
  components: {
    GenericDetailPage,
    AccountBackupPlanExecutionInfo
  },
  data() {
    return {
      execution: { id: '' },
      config: {
        activeMenu: 'AccountBackupPlanExecutionInfo',
        actions: {
          detailApiUrl: `/api/v1/assets/account-backup-plan-executions/${this.$route.params.id}/`,
          hasUpdate: false,
          hasDelete: false
        },
        submenu: [
          {
            title: this.$t('common.BasicInfo'),
            name: 'AccountBackupPlanExecutionInfo'
          }
        ],
        getTitle: this.getExecutionTitle

      }
    }
  },
  methods: {
    getExecutionTitle() {
      return `${this.$route.meta.title}: ${this.execution.id}`
    }
  }
}
</script>

<style scoped>

</style>
