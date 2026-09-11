import { BlurView } from "expo-blur";
import { Pressable, View } from "react-native";

type TabBarProps = {
  onTabPress: (route: string) => void;
  activeTab: string;
};

export function TabBar({ onTabPress, activeTab }: TabBarProps) {
  const tabs = [
    { name: "home", icon: "⌂" },
    { name: "library", icon: "▣" },
    { name: "search", icon: "⌕" },
    { name: "profile", icon: "●" },
  ];

  return (
    <View className="absolute bottom-5 left-4 right-4 overflow-hidden rounded-[28px]">
      <BlurView
        intensity={80}
        tint="dark"
        className="h-16 flex-row items-center justify-around px-2"
      >
        {tabs.map((tab) => {
          const active = activeTab === tab.name;

          return (
            <Pressable
              key={tab.name}
              onPress={() => onTabPress(tab.name)}
              className={`h-12 w-16 items-center justify-center rounded-2xl ${
                active ? "bg-white/15" : ""
              }`}
            >
              <View>
                {/* Временно текстовые иконки */}
                <View>{/* позже заменим на SVG */}</View>
              </View>
            </Pressable>
          );
        })}
      </BlurView>
    </View>
  );
}
