import { Stack, useLocalSearchParams } from "expo-router";
import { Channel, MessageInput, MessageList } from "stream-chat-expo";
import { View } from "react-native";
import { useStream } from "@/contexts/StreamContext";

export default function ChatScreen() {
  const { client } = useStream();
  const { channelId } = useLocalSearchParams();

  if (!client || !channelId) return null;

  const channel = client.channel("messaging", channelId as string);

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        name="chat-view"
        options={{
          title: 'Home',
        }}
      />
      <Channel channel={channel}>
        <MessageList />
        <MessageInput />
      </Channel>
    </View>
  );
}
