/* eslint-disable import/no-unresolved */

import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { defineMessages, useIntl } from "react-intl"

const i18n = defineMessages({
  text: {
    id: "agent-profile-screen.text",
    defaultMessage: "Open up App.js to start working on your app!",
  },
})

const white = "#fff"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: "center",
    justifyContent: "center",
  },
})

export const AgentProfileScreen = () => {
  const intl = useIntl()

  return (
    <View style={styles.container}>
      <Text>{intl.formatMessage(i18n.text)}</Text>
    </View>
  )
}
