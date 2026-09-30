import { Text, TouchableOpacity, View } from "react-native";
import { useColorScheme } from "../../hooks/useColorScheme";
import { colors } from "@/theme";

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const theme = colors[colorScheme];

  return (
    <View
      className="flex-1 flex-col items-start justify-start"
      style={{ backgroundColor: theme.background }}
    >
      <View className="w-full pt-14 px-6 pb-4 items-start justify-start">
        <Text
          className="text-4xl font-times font-bold"
          style={{ color: theme.foreground }}
        >
          Главная
        </Text>
      </View>
      <View className="bg-red-300 w-full flex-1 flex-col items-start justify-around">
        <View
          style={{ backgroundColor: theme.card }}
          className="w-full px-6 py-2 flex-col flex-1"
        >
          <View className="w-full flex-row items-center justify-between">
            <Text
              className="text-2xl font-times font-medium"
              style={{ color: theme.foreground }}
            >
              Читали ранее
            </Text>
            <TouchableOpacity>
              <Text className="text-base font-roboto font-medium text-sky-500">
                Все
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{ backgroundColor: theme.border }}
          className="w-full px-6 py-2 flex-col flex-1"
        >
          <View className="w-full flex-row items-center justify-between">
            <Text
              className="text-2xl font-times font-medium"
              style={{ color: theme.foreground }}
            >
              Бестселлеры
            </Text>
            <TouchableOpacity>
              <Text className="text-base font-roboto font-medium text-sky-500">
                Больше
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
