<template>
  <GenericDetailPage :object.sync="TaskDetail" :active-menu.sync="config.activeMenu" v-bind="config" v-on="$listeners">
    <keep-alive>
      <component :is="config.activeMenu" :object="TaskDetail" />
    </keep-alive>
  </GenericDetailPage>
</template>

<script>
import { GenericDetailPage, TabPage } from '@/layout/components'
import Detail from './Detail.vue'
import GatewayList from './GatewayList.vue'
export default {
  components: {
    GenericDetailPage,
    TabPage,
    Detail,
    GatewayList
  },
  data() {
    return {
      TaskDetail: {},
      config: {
        activeMenu: 'Detail',
        submenu: [
          {
            title: this.$t('assets.DomainDetail'),
            name: 'Detail'
          },
          {
            title: this.$t('assets.Gateway'),
            name: 'GatewayList',
            hidden: () => !this.$hasPerm('assets.view_gateway')
          }
        ],
        hasRightSide: true
      }
    }
  }
}
</script>

<style scoped>

</style>
