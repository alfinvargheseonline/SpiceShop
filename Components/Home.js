import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={require('../assets/images/bg.png')} style={styles.headerBackground}>
        <View style={styles.overlayContent}>
          <View style={styles.header}>
            <View style={styles.menuPlaceholder} />
            <View style={styles.locationContainer}>
              <Feather name="user" size={14} color="#D1FAE5" />
              <Text style={styles.locationText}>Kattappana Estate</Text>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.dateContainer}>
              <View style={styles.dateWrapper}>
                <Feather name="calendar" size={16} color="#D1FAE5" />
                <Text style={styles.dateText}>January 23, 2024</Text>
              </View>
              <Text style={styles.dayText}>Monday</Text>
            </View>

            <View style={styles.cardContainer}>
              <View style={styles.employeeSection}>
                <View style={styles.sectionHeader}>
                  <Feather name="users" size={16} color="#D1FAE5" />
                  <Text style={styles.sectionTitle}>Employees</Text>
                </View>
                <Text style={styles.totalEmployees}>868 <Text style={styles.totalLabel}>Total</Text></Text>
                <View style={styles.employeeDetails}>
                  <Text style={styles.presentEmployees}>800 Present</Text>
                  <Text style={styles.absentEmployees}>68 Absent</Text>
                </View>
              </View>

              <View style={styles.walletSection}>
                <View style={styles.sectionHeader}>
                  <Feather name="credit-card" size={16} color="#D1FAE5" />
                  <Text style={styles.sectionTitle}>Wallet bal...</Text>
                </View>
                <Text style={styles.walletBalance}>₹1,08568</Text>
                <TouchableOpacity style={styles.transactionsButton}>
                  <Text style={styles.transactionsText}>Transactions</Text>
                  <Feather name="arrow-right" size={16} color="#38A169" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerBackground: {
    width: '100%',
    height: 450,
    marginBottom:20 
  },
  overlayContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 70,
  },
  menuPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  locationText: {
    color: '#D1FAE5',
    fontSize: 14,
    marginLeft: 6,
  },
  card: {
    marginTop: 20, 
    backgroundColor: 'rgba(15, 43, 19, 0.5)',
    borderRadius: 30,
    padding: 16,
    height: 280,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  dateWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    color: '#D1FAE5',
    fontSize: 14,
    marginLeft: 8,
  },
  dayText: {
    color: '#D1FAE5',
    fontSize: 14,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20, 
  },
  employeeSection: {
    flex: 1.2, 
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 20, 
    marginRight: 10, 
    minHeight: 180,
  },
  walletSection: {
    flex: 1.2, 
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 20, 
    marginLeft: 10, 
    minHeight: 180, 
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionTitle: {
    color: '#D1FAE5',
    fontSize: 14,
    marginLeft: 8,
  },
  totalEmployees: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  totalLabel: {
    fontSize: 12,
    color: '#D1FAE5',
    fontWeight: 'normal',
  },
  employeeDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  presentEmployees: {
    color: '#D1FAE5',
    fontSize: 12,
  },
  absentEmployees: {
    color: '#D1FAE5',
    fontSize: 12,
  },
  walletBalance: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  transactionsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  transactionsText: {
    color: '#38A169',
    marginRight: 8,
    fontSize: 12,
  },
});

export default Home;
