<template>
  <GenericCreateUpdatePage
    :fields="fields"
    :initial="initial"
    :fields-meta="fieldsMeta"
    :url="url"
    v-bind="$attrs"
    @getObjectDone="onGetObjectDone($event)"
  />
</template>

<script>
import GenericCreateUpdatePage from '@/layout/components/GenericCreateUpdatePage'
import { Required } from '@/components/DataForm/rules'
import getFields from '../fields'

export default {
  name: 'CommonUserSSH',
  components: { GenericCreateUpdatePage },
  data() {
    const fields = getFields.bind(this)()
    return {
      initial: {
        login_mode: 'auto',
        protocol: this.$route.query.protocol,
        username_same_with_user: false,
        auto_generate_key: false,
        auto_push: false,
        sftp_root: 'tmp',
        sudo: '/bin/whoami',
        shell: '/bin/bash'
      },
      fields: [
        [this.$t('common.Basic'), ['name', 'protocol', 'username', 'username_same_with_user']],
        [this.$t('common.Auth'), ['login_mode', 'auto_generate_key', 'password', 'private_key', 'passphrase']],
        [this.$t('assets.AutoPush'), ['auto_push', 'sudo', 'shell', 'home', 'system_groups']],
        [this.$t('common.Command filter'), ['cmd_filters']],
        [this.$t('assets.UserSwitch'), ['su_enabled', 'su_from']],
        [this.$t('common.Other'), ['priority', 'sftp_root', 'comment']]
      ],
      fieldsMeta: {
        login_mode: fields.login_mode,
        username: fields.username,
        private_key: fields.private_key,
        passphrase: fields.passphrase,
        username_same_with_user: fields.username_same_with_user,
        auto_generate_key: fields.auto_generate_key,
        protocol: fields.protocol,
        cmd_filters: fields.cmd_filters,
        auto_push: fields.auto_push,
        sftp_root: {
          rules: [Required],
          helpText: this.$t('assets.SFTPHelpMessage')
        },
        sudo: {
          rules: [Required],
          helpText: this.$t('assets.SudoHelpMessage'),
          hidden: (item) => item.protocol !== 'ssh' || !item.auto_push
        },
        password: fields.password,
        shell: {
          hidden: (item) => item.protocol !== 'ssh' || !item.auto_push,
          rules: [Required]
        },
        home: {
          label: this.$t('assets.Home'),
          hidden: (item) => item.protocol !== 'ssh' || !item.auto_push || item.username_same_with_user,
          helpText: this.$t('assets.HomeHelpMessage')
        },
        system_groups: fields.system_groups,
        su_enabled: {
          type: 'switch',
          hidden: (item) => item.protocol !== 'ssh'
        },
        su_from: {
          hidden: (item) => !item.su_enabled,
          rules: [Required],
          el: {
            multiple: false,
            clearable: true,
            ajax: {
              url: '/api/v1/assets/system-users/su-from/',
              transformOption: (item) => {
                return { label: item.name + '(' + item.username + ')', value: item.id }
              }
            }
          }
        }
      },
      url: '/api/v1/assets/system-users/'
    }
  },
  methods: {
    onGetObjectDone(obj) {
      this.fieldsMeta.private_key.el.fingerprint = obj.ssh_key_fingerprint
    }
  }
}
</script>

<style lang='less' scoped>

</style>
