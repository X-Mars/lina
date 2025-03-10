<template>
  <div>
    <GenericListPage :table-config="tableConfig" :header-actions="headerActions" />
    <Dialog v-if="relationDialog.show" :visible.sync="relationDialog.show" :title="this.$t('audits.Hosts')" :show-cancel="false" :show-confirm="false">
      <ListTable :table-config="relationDialog.tableConfig" :header-actions="relationDialog.headerActions" />
    </Dialog>
  </div>
</template>

<script type="text/jsx">
import GenericListPage from '@/layout/components/GenericListPage'
import { getDaysFuture, getDaysAgo } from '@/utils/common'
import { Dialog, ListTable } from '@/components'
import { DisplayFormatter } from '@/components/TableFormatters'
import { setUrlParam } from '@/utils/common'

export default {
  components: {
    GenericListPage, Dialog, ListTable
  },
  data() {
    const now = new Date()
    const dateFrom = getDaysAgo(7, now).toISOString()
    const dateTo = getDaysFuture(1, now).toISOString()
    const vm = this
    return {
      tableConfig: {
        permissions: {
          app: 'ops',
          resource: 'commandexecution'
        },
        url: '/api/v1/audits/command-execution-logs/',
        columns: [
          'hosts', 'user', 'command', 'run_as', 'result', 'is_finished',
          'is_success', 'date_start'
        ],
        columnsMeta: {
          hosts: {
            width: '60px',
            formatter: (row, col, cellValue) => {
              const onClick = () => {
                vm.relationDialog.tableConfig.url = setUrlParam(vm.relationDialog.tableConfig.url, 'commandexecution', row.id)
                vm.relationDialog.show = true
              }
              return <el-link class='text-link' onClick={onClick}>{ cellValue.length }</el-link>
            }
          },
          command: {
            showOverflowTooltip: true
          },
          user: {
            formatter: DisplayFormatter,
            showOverflowTooltip: true
          },
          run_as: {
            formatter: DisplayFormatter,
            showOverflowTooltip: true
          },
          is_finished: {
            width: '100px'
          },
          is_success: {
            width: '100px'
          },
          result: {
            width: '80px',
            formatter: (row) => {
              const label = this.$t('audits.View')
              const route = { to: { name: 'CeleryTaskLog', params: { id: row.id }}}
              return <router-link class='text-link' {...{ attrs: route }} target='_blank'>{ label }</router-link>
            }
          },
          date_start: {
            width: '160px'
          }
        },
        extraQuery: {
          date_to: dateTo,
          date_from: dateFrom
        }
      },
      relationDialog: {
        show: false,
        tableConfig: {
          url: '/api/v1/audits/command-executions-hosts-relations/',
          columns: [
            {
              prop: 'asset_display',
              label: this.$t('audits.Hosts')
            }
          ]
        },
        headerActions: {
          hasLeftActions: false,
          hasColumnSetting: false,
          hasImport: false,
          hasExport: false,
          searchConfig: {
            exclude: ['id', 'asset', 'commandexecution'],
            options: [
              {
                label: this.$t('audits.Hosts'),
                value: 'hostname_ip'
              }
            ]
          },
          hasSearch: true
        }
      },
      headerActions: {
        hasLeftActions: false,
        hasDatePicker: true,
        hasImport: false,
        searchConfig: {
          options: [
            {
              label: this.$t('audits.User'),
              value: 'user__name'
            },
            {
              label: this.$t('audits.Username'),
              value: 'user__username'
            },
            {
              label: this.$t('audits.SystemUserName'),
              value: 'run_as__username'
            }
          ]
        },
        datePicker: {
          dateStart: dateFrom,
          dateEnd: dateTo
        }
      }
    }
  }
}
</script>

<style>
</style>
