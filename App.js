import React from 'react';
import { ScrollView, View, Text, Image, TextInput, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat dengan Nova Uminee</Text>
      
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.messageContainer}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1521747116042-5a810fda9664' }}
            style={styles.avatar}
          />
          <View style={styles.messageBubble}>
            <Text style={styles.message}>Halo! Apa kabar?</Text>
          </View>
        </View>
        <View style={styles.messageContainer}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1521747116042-5a810fda9664' }}
            style={styles.avatar}
          />
          <View style={styles.messageBubble}>
            <Text style={styles.message}>Saya baik-baik saja, terima kasih!</Text>
          </View>
        </View>
        {/* Tambahkan lebih banyak pesan di sini jika diperlukan */}
      </ScrollView>

      <TextInput
        style={styles.input}
        placeholder="Ketik pesan..."
        placeholderTextColor="#888"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9F9F9', // Warna latar belakang yang lembut
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333', // Warna teks
  },
  scrollContainer: {
    flex: 1,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start', // Align items to the start for better layout
    marginBottom: 15,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  messageBubble: {
    maxWidth: '75%', // Mengatur lebar maksimal pesan
    padding: 10,
    backgroundColor: '#E0E0E0', // Warna gelembung pesan
    borderRadius: 10,
    elevation: 1, // Menambahkan bayangan untuk efek kedalaman
  },
  message: {
    fontSize: 16,
    color: '#333', // Warna teks
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginTop: 10,
    backgroundColor: '#fff', // Warna latar belakang input
    elevation: 2, // Menambahkan bayangan pada input
  },
});

export default App;
