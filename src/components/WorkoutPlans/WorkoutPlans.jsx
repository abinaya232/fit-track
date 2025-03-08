import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  SectionList,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import styles from './WorkoutPlansStyles';

export const WorkoutPlans = ({isDarkMode}) => {
  const [workoutPlans, setWorkoutPlans] = useState([
    {
      title: 'Strength Training',
      data: [
        {id: '1', name: 'Bench Press', reps: '4 sets x 8 reps'},
        {id: '2', name: 'Deadlift', reps: '4 sets x 6 reps'},
        {id: '3', name: 'Squats', reps: '4 sets x 10 reps'},
      ],
    },

    {
      title: 'Cardio & Endurance',
      data: [
        {id: '4', name: 'Running', reps: '30 minutes'},
        {id: '5', name: 'Jump Rope', reps: '5 rounds x 3 minutes'},
        {id: '6', name: 'Cycling', reps: '45 minutes'},
      ],
    },
    {
      title: 'Yoga & Flexibility',
      data: [
        {id: '7', name: 'Sun Salutations', reps: '10 rounds'},
        {id: '8', name: 'Downward Dog', reps: 'Hold 30s'},
        {id: '9', name: 'Child’s Pose', reps: 'Hold 1 min'},
      ],
    },
  ]);

  const [customWorkouts, setCustomWorkouts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [exerciseName, setExerciseName] = useState('');
  const [exerciseReps, setExerciseReps] = useState('');
  const [timers, setTimers] = useState({});

  const addWorkout = () => {
    if (exerciseName.trim() !== '' && exerciseReps.trim() !== '') {
      const newWorkout = {
        id: Date.now().toString(),
        name: exerciseName,
        reps: exerciseReps,
      };
      setCustomWorkouts([...customWorkouts, newWorkout]);
      setExerciseName('');
      setExerciseReps('');
      setModalVisible(false);

      // Success Alert
      Alert.alert('Success', 'Your workout has been successfully added!');
    } else {
      Alert.alert('Error', 'Please enter valid workout details!');
    }
  };

  const toggleTimer = id => {
    setTimers(prevTimers => {
      const isRunning = prevTimers[id]?.running;
      if (isRunning) {
        return {
          ...prevTimers,
          [id]: {...prevTimers[id], running: false},
        };
      } else {
        return {
          ...prevTimers,
          [id]: {running: true, startTime: Date.now(), elapsedTime: 0},
        };
      }
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimers(prevTimers => {
        const updatedTimers = {};
        Object.keys(prevTimers).forEach(id => {
          if (prevTimers[id].running) {
            updatedTimers[id] = {
              ...prevTimers[id],
              elapsedTime: Math.floor(
                (Date.now() - prevTimers[id].startTime) / 1000,
              ),
            };
          } else {
            updatedTimers[id] = prevTimers[id];
          }
        });
        return updatedTimers;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView
      style={[
        styles.container,
        isDarkMode ? styles.darkContainer : styles.lightContainer,
      ]}>
      <View
        style={[
          styles.headerContainer,
          isDarkMode ? styles.darkHeader : styles.lightHeader,
        ]}>
        <Text
          style={[
            styles.header,
            isDarkMode ? styles.darkText : styles.lightText,
          ]}>
          Workout Plans
        </Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.addButtonText}>+ Add Workout</Text>
        </TouchableOpacity>
      </View>

      <SectionList
        sections={[
          ...workoutPlans,
          {title: 'Your Custom Workouts', data: customWorkouts},
        ]}
        keyExtractor={item => item.id.toString()}
        renderSectionHeader={({section: {title}}) => (
          <View
            style={[
              styles.planTitle,
              isDarkMode ? styles.darkPlanTitle : styles.lightPlanTitle,
            ]}>
            <Text
              style={[
                styles.planText,
                isDarkMode ? styles.darkText : styles.lightText,
              ]}>
              {title}
            </Text>
          </View>
        )}
        renderItem={({item}) => (
          <View
            style={[
              styles.exerciseItem,
              isDarkMode ? styles.darkExerciseItem : styles.lightExerciseItem,
            ]}>
            <View style={styles.exerciseDetails}>
              <Text
                style={[
                  styles.exerciseName,
                  isDarkMode ? styles.darkText : styles.lightText,
                ]}>
                {item.name}
              </Text>
              <Text
                style={[
                  styles.exerciseReps,
                  isDarkMode ? styles.darkText : styles.lightText,
                ]}>
                {item.reps}
              </Text>
              <Text style={styles.timerText}>
                Time: {timers[item.id]?.elapsedTime || '0'} sec
              </Text>
            </View>
            <TouchableOpacity
              style={
                timers[item.id]?.running
                  ? styles.stopButton
                  : styles.startButton
              }
              onPress={() => toggleTimer(item.id)}>
              <Text style={styles.startButtonText}>
                {timers[item.id]?.running ? 'Stop' : 'Start'}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Modal for Adding Workout */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.modalContainer}>
          <View
            style={[
              styles.modalContent,
              isDarkMode ? styles.darkModalContent : styles.lightModalContent,
            ]}>
            <Text
              style={[
                styles.modalTitle,
                isDarkMode ? styles.darkText : styles.lightText,
              ]}>
              Add Workout
            </Text>
            <TextInput
              style={[
                styles.input,
                isDarkMode ? styles.darkInput : styles.lightInput,
              ]}
              placeholder="Exercise Name"
              placeholderTextColor={isDarkMode ? '#bbb' : '#333'}
              value={exerciseName}
              onChangeText={setExerciseName}
            />
            <TextInput
              style={[
                styles.input,
                isDarkMode ? styles.darkInput : styles.lightInput,
              ]}
              placeholder="Reps / Time"
              placeholderTextColor={isDarkMode ? '#bbb' : '#333'}
              value={exerciseReps}
              onChangeText={setExerciseReps}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.saveButton} onPress={addWorkout}>
                <Text style={styles.buttonText}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </SafeAreaView>
  );
};
