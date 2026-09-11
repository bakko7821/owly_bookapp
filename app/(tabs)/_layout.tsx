import { Tabs } from "expo-router";
import { BlurView } from "expo-blur";
import { Pressable, Text, View } from "react-native";

function CustomTabBar({ state, descriptors, navigation }: any) {
  return (
    <View className="absolute bottom-4 left-4 right-4 overflow-hidden rounded-[24px]">
      <BlurView
        intensity={80}
        tint="dark"
        className="h-16 flex-row items-center rounded-[24px] border border-white/10 bg-white/[0.08] px-1"
      >
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];

          const label = options.tabBarLabel ?? options.title ?? route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <Pressable
              key={route.key}
              onPress={onPress}
              className="h-16 flex-1 items-center justify-center"
            >
              <View
                className={`h-11 min-w-12 items-center justify-center rounded-2xl px-3 ${
                  isFocused ? "bg-white/[0.14]" : "bg-transparent"
                }`}
              >
                <Text
                  className={`text-xs ${
                    isFocused
                      ? "font-semibold text-white"
                      : "font-medium text-white/60"
                  }`}
                >
                  {String(label)}
                </Text>
              </View>
            </Pressable>
          );
        })}
      </BlurView>
    </View>
  );
}

export default function TabsLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Главная",
        }}
      />

      <Tabs.Screen
        name="library"
        options={{
          title: "Библиотека",
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Поиск",
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Профиль",
        }}
      />
    </Tabs>
  );
}
