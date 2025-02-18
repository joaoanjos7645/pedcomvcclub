import { STREAM_API_KEY } from "@/constants";
import { useAuth } from "@/contexts/AuthContext";
import { createContext, useContext, useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StreamChat } from "stream-chat";
import { OverlayProvider, Chat, Streami18n } from "stream-chat-expo";

const StreamContext = createContext(null);

const streami18n = new Streami18n({
  language: 'pt-br',
});

export function StreamProvider({ children }: { children: React.ReactNode }) {
  const { bottom } = useSafeAreaInsets();
  const { user } = useAuth();
  const [client, setClient] = useState<StreamChat | null>(null);
  const [channels, setChannels] = useState<any[]>([]); // Adicionando estado para armazenar os canais

  useEffect(() => {
    const connectUser = async () => {
      console.log(user);
      if (!user) return;

      const chatClient = StreamChat.getInstance(STREAM_API_KEY);
      const res = await chatClient.connectUser(
        {
          id: user.id,
          name: user.name,
          email: user.email,
        },
        user.token
      );
      console.log('Resposta: ' + res);

      setClient(chatClient);

      const filter = { members: { $in: [user.id] } }; 
      const channelsResponse = await chatClient.queryChannels(filter);
      setChannels(channelsResponse);
    };

    connectUser();

    return () => {
      client?.disconnectUser();
    };
  }, [user]);

  return (
    <StreamContext.Provider value={{ client, channels }}>
      <OverlayProvider 
      bottomInset={bottom}
      i18nInstance={streami18n}
      >
        {client ? <Chat client={client}>{children}</Chat> : children}
      </OverlayProvider>
    </StreamContext.Provider>
  );
}

export const useStream = () => useContext(StreamContext);
