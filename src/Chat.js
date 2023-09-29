import React,{useState,useEffect} from 'react'
import { View, FlatList, TextInput, TouchableOpacity, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import ImagePicker from 'react-native-image-picker';
import AudioRecord from 'react-native-audio-record';
import { NativeEventEmitter, NativeModules } from 'react-native';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    const [audioRecording, setAudioRecording] = useState(false);
  
    useEffect(() => {
      // Simula mensajes previamente cargados.
      setMessages([
        {
          _id: 1,
          text: '¡Hola!',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native Developer',
          },
        },
        {
          _id: 2,
          text: '¡Hola! ¿En qué puedo ayudarte?',
          createdAt: new Date(),
          user: {
            _id: 1,
            name: 'Usuario',
          },
        },
      ]);
    }, []);
  
    const handleSend = (newMessages = []) => {
      setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
      setInputText('');
    };
  
    const handlePickImage = () => {
      const options = {
        title: 'Selecciona una imagen',
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
  
      ImagePicker.showImagePicker(options, (response) => {
        if (response.uri) {
          const imageMessage = [
            {
              _id: Math.random().toString(36).substring(7),
              image: response.uri,
              createdAt: new Date(),
              user: {
                _id: 1,
                name: 'Usuario',
              },
            },
          ];
          handleSend(imageMessage);
        }
      });
    };
  
    const toggleAudioRecording = async () => {
      if (audioRecording) {
        const audioPath = await AudioRecord.stop();
        const audioMessage = [
          {
            _id: Math.random().toString(36).substring(7),
            audio: audioPath,
            createdAt: new Date(),
            user: {
              _id: 1,
              name: 'Usuario',
            },
          },
        ];
        handleSend(audioMessage);
      } else {
        AudioRecord.init();
        AudioRecord.start();
      }
      setAudioRecording(!audioRecording);
    };
  
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          inverted
          data={messages}
          keyExtractor={(message) => message._id.toString()}
          renderItem={({ item }) => (
            <Text style={{ padding: 10 }}>{item.text || 'Audio'}</Text>
          )}
        />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={handlePickImage}>
            <Text style={{ fontSize: 20, padding: 10 }}>📷</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleAudioRecording}>
            <Text style={{ fontSize: 20, padding: 10 }}>
              {audioRecording ? 'Stop' : '🎤'}
            </Text>
          </TouchableOpacity>
          <TextInput
            style={{ flex: 1, fontSize: 16, padding: 10 }}
            value={inputText}
            onChangeText={(text) => setInputText(text)}
            placeholder="Escribe un mensaje..."
          />
          <TouchableOpacity onPress={() => handleSend([{ text: inputText }])}>
            <Text style={{ fontSize: 20, padding: 10 }}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}

export default Chat