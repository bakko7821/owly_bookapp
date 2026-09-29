import { useColorScheme } from "@/hooks/useColorScheme";
import { colors } from "@/theme";
import { Text, View } from "react-native";

export default function SearchScreen() {
  const colorScheme = useColorScheme();
  const theme = colors[colorScheme];

  return (
    <View
      className="flex-1 items-center justify-center"
      style={{ backgroundColor: theme.background }}
    ></View>
  );
}
