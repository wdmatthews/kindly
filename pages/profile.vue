<template>
  <div class="pa-4">
    <BaseCard
      v-if="true"
      max-width="600"
      class="mx-auto mb-4"
    >
      <template #title>
        <span class="unselectable">Welcome!</span>
      </template>
      <p class="unselectable">
        Welcome to Kindly, Student Name!<br>
        You do not have a nickname yet, but you can set it below<br>
        Your nickname will be seen by your teachers and fellow classmates<br>
        Your classmates cannot see your real name, but will instead see your nickname
      </p>
      <v-form
        v-model="nicknameFormIsValid"
        @submit.prevent
      >
        <NicknameField ref="nicknameField" />
      </v-form>
      <BaseAlert
        v-show="true"
        color="warning"
        icon="alert"
      >
        Someone already has that nickname. Maybe you are friends?
      </BaseAlert>
      <template #actions>
        <v-btn
          color="primary"
          outlined
          class="text-button font-weight-bold"
          :disabled="!nicknameFormIsValid"
          @click="setNickname"
        >
          <v-icon left>
            mdi-pencil
          </v-icon>
          Set Nickname
        </v-btn>
      </template>
    </BaseCard>
    <h1 class="text-h4 text-center unselectable">
      Hello, Student Name (Nickname)!
    </h1>
    <p class="mb-0 text-h6 text-center unselectable">
      You have {{ notifications.length }} notification{{ notifications.length !== 1 ? 's' : '' }}
    </p>
    <v-row
      v-show="notifications.length > 0"
      no-gutters
      justify="center"
      class="mt-4"
    >
      <v-col
        cols="12"
        md="6"
      >
        <v-list
          rounded
          color="blue-grey darken-4"
          class="px-0 py-2"
        >
          <div class="text-center py-2">
            <v-btn
              color="error"
              outlined
              class="text-button font-weight-bold"
              @click="clearNotifications"
            >
              <v-icon left>
                mdi-delete
              </v-icon>
              Clear All
            </v-btn>
          </div>
          <v-list-item
            v-for="(notification, i) in notifications"
            :key="`notification-${i}`"
            class="mb-0"
          >
            <v-list-item-content>
              <v-list-item-title v-text="notification.content" />
              <v-list-item-subtitle v-text="formatTime(notification.time)" />
            </v-list-item-content>
            <v-list-item-action>
              <v-btn
                icon
                @click="clearNotification(i)"
              >
                <v-icon color="error">
                  mdi-delete
                </v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import formatTime from '~/assets/methods/formatTime'

export default {
  data: vm => ({
    nicknameFormIsValid: false,
    notifications: [
      {
        content: 'Notification 1',
        time: new Date(),
      },
      {
        content: 'Notification 2',
        time: new Date(),
      },
      {
        content: 'Notification 3',
        time: new Date(),
      },
    ],
  }),
  computed: {
    nickname() {
      return this.$refs.nicknameField?.nickname
    },
  },
  methods: {
    formatTime,
    setNickname() {
      // if (!this.nicknameFormIsValid) { return }
      
    },
    clearNotifications() {
      this.notifications = []
    },
    clearNotification(index) {
      this.notifications.splice(index, 1)
    },
  },
}
</script>
