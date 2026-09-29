import { useColorScheme } from "@/hooks/useColorScheme";
import { colors } from "@/theme";
import { Text, View } from "react-native";

export default function ProfileScreen() {
  const colorScheme = useColorScheme();
  const theme = colors[colorScheme];

  return (
    <View
      className="flex-1 items-start justify-start"
      style={{ backgroundColor: theme.background }}
    >
      <View className="bg-red-500 w-full pt-14 px-6 pb-4 items-start justify-start">
        <Text className="text-4xl font-times font-bold">Профиль</Text>
      </View>
    </View>
  );
}
