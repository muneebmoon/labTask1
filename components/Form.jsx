import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, FlatList } from 'react-native';

const Form = () => {
  const [studentName, setStudentName] = useState('');
  const [registrationNo, setRegistrationNo] = useState('');
  const [subject1, setSubject1] = useState('');
  const [subject2, setSubject2] = useState('');
  const [subject3, setSubject3] = useState('');
  const [subject4, setSubject4] = useState('');
  const [submittedData, setSubmittedData] = useState([]);

  const handleSubmit = () => {
    const newEntry = {
      studentName,
      registrationNo,
      subject1,
      subject2,
      subject3,
      subject4,
    };
    setSubmittedData([...submittedData, newEntry]);
    handleReset();
  };

  const handleReset = () => {
    setStudentName('');
    setRegistrationNo('');
    setSubject1('');
    setSubject2('');
    setSubject3('');
    setSubject4('');
  };

  const isFormIncomplete = 
    !studentName.trim() || 
    !registrationNo.trim() || 
    !subject1.trim() || 
    !subject2.trim() || 
    !subject3.trim() || 
    !subject4.trim();

  return (
    <View style={{ padding: 20 }}>
      <ScrollView style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 18, marginBottom: 10 }}>Enter Student Name:</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            padding: 10,
            marginBottom: 20,
          }}
          placeholder="Enter Student Name"
          value={studentName}
          onChangeText={setStudentName}
        />
        <Text style={{ fontSize: 18, marginBottom: 10 }}>Enter Registration No:</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            padding: 10,
            marginBottom: 20,
          }}
          placeholder="Enter Registration No"
          value={registrationNo}
          onChangeText={setRegistrationNo}
        />
        <Text style={{ fontSize: 18, marginBottom: 10 }}>Subject 1 Marks:</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            padding: 10,
            marginBottom: 20,
          }}
          placeholder="Subject 1 Marks"
          value={subject1}
          onChangeText={setSubject1}
        />
        <Text style={{ fontSize: 18, marginBottom: 10 }}>Subject 2 Marks:</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            padding: 10,
            marginBottom: 20,
          }}
          placeholder="Subject 2 Marks"
          value={subject2}
          onChangeText={setSubject2}
        />
        <Text style={{ fontSize: 18, marginBottom: 10 }}>Subject 3 Marks:</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            padding: 10,
            marginBottom: 20,
          }}
          placeholder="Subject 3 Marks"
          value={subject3}
          onChangeText={setSubject3}
        />
        <Text style={{ fontSize: 18, marginBottom: 10 }}>Subject 4 Marks:</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            padding: 10,
            marginBottom: 20,
          }}
          placeholder="Subject 4 Marks"
          value={subject4}
          onChangeText={setSubject4}
        />
        <Button title="Submit" onPress={handleSubmit} disabled={isFormIncomplete} />
        <Button title="Reset" onPress={handleReset} style={{ marginTop: 10 }} />
      </ScrollView>

      <Text style={{ fontSize: 18, marginVertical: 20 }}>Submitted Data:</Text>
      <FlatList
        data={submittedData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1, borderColor: 'gray' }}>
            <Text>Student Name: {item.studentName}</Text>
            <Text>Registration No: {item.registrationNo}</Text>
            <Text>Subject 1 Marks: {item.subject1}</Text>
            <Text>Subject 2 Marks: {item.subject2}</Text>
            <Text>Subject 3 Marks: {item.subject3}</Text>
            <Text>Subject 4 Marks: {item.subject4}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Form;
