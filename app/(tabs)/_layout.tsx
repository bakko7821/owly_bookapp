import { Icon, Label } from "expo-router";
import { NativeTabs } from "expo-router/unstable-native-tabs";

export default function TabsLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Label>Главная</Label>
        <Icon sf="house.fill" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="library">
        <Label>Библиотека</Label>
        <Icon sf="books.vertical.fill" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="search">
        <Label>Поиск</Label>
        <Icon sf="magnifyingglass" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="profile">
        <Label>Профиль</Label>
        <Icon sf="person.fill" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
