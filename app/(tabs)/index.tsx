import { Text, View } from "react-native";
import { useColorScheme } from "../../hooks/useColorScheme";
import { colors } from "@/theme";

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const theme = colors[colorScheme];

  return (
    <View
      className="flex-1 items-center justify-center"
      style={{ backgroundColor: theme.background }}
    >
      <Text className="text-3xl font-bold " style={{ color: theme.foreground }}>
        Hello iPhone!
      </Text>
    </View>
  );
}
