import { ChannelList, ChannelPreviewMessenger } from "stream-chat-expo";
import { useStream } from "@/contexts/StreamContext";
import { useRouter } from "expo-router";
import { View } from "react-native";

export default function ChannelListScreen() {
  const { client } = useStream();
  const router = useRouter();

  if (!client) return null;

  return (
    <View style={{ flex: 1 }}>
      <ChannelList
        filters={{ members: { $in: [client.user.id] } }}
        onSelect={(channel) => {
          try {
            router.push({ pathname: "/chat-view", params: { channelId: channel.id } })
          } catch (error) {
            console.log(error)
          }
        }}
        Preview={(props) => <ChannelPreviewMessenger {...props} />}
      />
    </View>
  );
}
