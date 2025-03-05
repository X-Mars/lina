<template>
  <div>
    <Dialog
      v-if="iVisible"
      :destroy-on-close="true"
      :show-cancel="false"
      :show-confirm="false"
      :title="$tc('DiscoverAccountsDialog')"
      :visible.sync="iVisible"
      top="35vh"
      width="80%"
      @close="loading=true"
    >
      <span v-if="loading" v-loading="loading" class="loading" />
      <iframe title="dialog" :src="url" style="border: none;" @load="onIframeLoad" />
    </Dialog>
  </div>
</template>

<script>
import Dialog from '@/components/Dialog/index.vue'
import { gatherAccountHeaderActions, gatherAccountTableConfig } from '@/views/accounts/const'

export default {
  name: 'AccountDiscoverDialog',
  components: {
    Dialog
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    asset: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      showDeleteAccountDialog: false,
      loading: true,
      showLoading: true,
      gatherAccounts: [],
      config: {
        tableConfig: gatherAccountTableConfig(this, `/api/v1/accounts/gathered-accounts/discover/?asset_id=${this.asset}`),
        headerActions: gatherAccountHeaderActions(this)
      }
    }
  },
  computed: {
    iVisible: {
      get() {
        return this.visible
      },
      set(val) {
        this.$emit('update:visible', val)
      }
    },
    url: {
      get() {
        return `/api/v1/accounts/gather-account-executions/adhoc/?asset_id=${this.asset}`
      }
    }
  },
  watch: {
    asset: {
      handler(val) {
        this.config.tableConfig.url = `/api/v1/accounts/gathered-accounts/discover/?asset_id=${val}`
      },
      immediate: true
    }
  },
  mounted() {
  },
  beforeMount() {
  },
  methods: {
    onIframeLoad() {
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
iframe {
  width: 100%;
  height: 500px;
}

.loading {
  margin-top: 20px;
  display: block;
}
</style>
