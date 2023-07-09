/* eslint-disable prettier/prettier */
import {openDatabase} from 'react-native-sqlite-storage';

const db = openDatabase({name: 'PatientDatabase.db'});

export default db;
