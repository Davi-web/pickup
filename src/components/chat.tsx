import Talk from 'talkjs';
import { useEffect, useState, useRef } from 'react';

function MyChatComponent() {
  const chatboxEl = useRef();

  // wait for TalkJS to load
  const [talkLoaded, markTalkLoaded] = useState(false);
  Talk.ready.then(() => markTalkLoaded(true));

  useEffect(() => {
    if (talkLoaded) {
      const currentUser = new Talk.User({
        id: '1',
        name: 'Henry Mill',
        email: 'henrymill@example.com',
        photoUrl: 'henry.jpeg',
        welcomeMessage: 'Hello!',
        role: 'default',
      });

      const otherUser = new Talk.User({
        id: '2',
        name: 'Jessica Wells',
        email: 'jessicawells@example.com',
        photoUrl: 'jessica.jpeg',
        welcomeMessage: 'Hello!',
        role: 'default',
      });

      const session = new Talk.Session({
        appId: 't64V6ais',
        me: currentUser,
      });

      const conversationId = Talk.oneOnOneId(currentUser, otherUser);
      const conversation = session.getOrCreateConversation(conversationId);
      conversation.setParticipant(currentUser);
      conversation.setParticipant(otherUser);

      const chatbox = session.createChatbox();
      chatbox.select(conversation);
      chatbox.mount(chatboxEl);

      return () => session.destroy();
    }
  }, [talkLoaded]);

  return <div ref={chatboxEl} />;
}