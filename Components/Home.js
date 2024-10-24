import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Bottom from './Bottom';

const IntegratedDashboard = () => {
  const harvestingData = [
    { product: 'Cardamom', quantity: '3260Kg' },
    { product: 'Pepper', quantity: '320Kg' },
    { product: 'Clove', quantity: '260Kg' },
    { product: 'Pepper', quantity: '320Kg' },
  ];

  const attendanceData = [
    { id: '01', name: 'Frances Swann', status: 'Absent' },
    { id: '02', name: 'Frances Swann', status: 'Present' },
    { id: '03', name: 'Frances Swann', status: 'Present' },
    { id: '04', name: 'Frances Swann', status: 'Present' },
  ];

  const ActionButton = ({ icon, label }) => (
    <TouchableOpacity style={styles.actionButton}>
      <View style={styles.iconWrapper}>
        <View style={styles.halfCircle} />
        <View style={styles.actionIconContainer}>
          <Feather name={icon} size={24} color="#403F32" />
        </View>
      </View>
      <Text style={styles.actionButtonText}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerBackground}>
      <ImageBackground
        source={require('../assets/images/bg111.png')} // Make sure to add your image in the assets folder
        style={styles.headerBackground}
      ></ImageBackground>
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
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtonsGrid}>
        <ActionButton icon="calendar" label="Attendance" color='#403F32'/>
        <ActionButton icon="users" label="Emp transfer" />
        <ActionButton icon="package" label="Receive Products" />
        <ActionButton icon="credit-card" label="Petty cash" />
        <ActionButton icon="file-text" label="Leave request" />
        <ActionButton icon="truck" label="Trip" />
      </View>

      {/* Harvesting Details */}
      <Bottom/>
      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
          <Feather name="home" size={24} color="#38A169" />
          <Text style={[styles.navText, styles.activeNavText]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Feather name="users" size={24} color="#666" />
          <Text style={styles.navText}>Employees</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Feather name="package" size={24} color="#666" />
          <Text style={styles.navText}>Warehouse</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Feather name="dollar-sign" size={24} color="#666" />
          <Text style={styles.navText}>Accounts</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  halfCircle: {
    width: 115, // Full width of the circle
    height: 60, // Half the height of the full circle
    backgroundColor: '#FFF1B3', // Circle color
    borderTopLeftRadius: 0, // Radius for top-left
    borderTopRightRadius: 0, // Radius for top-right
    borderBottomLeftRadius: 100, // No bottom left radius
    borderBottomRightRadius: 100, // No bottom right radius
  },
  container: {
    flex: 1,
    backgroundColor: '#fdfeec',
  },
  headerBackground: {
    width: 420, // Full width of the circle
    height: 385, // Half the height of the full circle
    backgroundColor: 'rgba(49, 142, 93, 0.8)', // Circle color
    borderTopLeftRadius: 0, // Radius for top-left
    borderTopRightRadius: 0, // Radius for top-right
    borderBottomLeftRadius: 100, // No bottom left radius
    borderBottomRightRadius: 100,
    marginBottom: 20,
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
    backgroundColor: '#38A165',
    borderRadius: 50,
    padding: 16,
    height: 240,
    borderRadius:40
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
    marginVertical: 10,
  },
  employeeSection: {
    flex: 1.2,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 20,
    marginRight: 10,
    minHeight: 10,
  },
  walletSection: {
    flex: 1.2,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 20,
    marginLeft: 10,
    minHeight: 100,
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
  sectionTitleDark: {
    color: '#1F2937',
    fontSize: 18,
    fontWeight: '500',
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
  actionButtonsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    gap: 10,
    justifyContent: 'space-between',
  },
  actionButton: {
    width: '30%',
    alignItems: 'center',
    backgroundColor: '#fbfdd3',
    borderRadius: 20,
    padding: 0,
    marginBottom: 16,
  },
  actionIconContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    marginLeft:3,
  },
  actionButtonText: {
    fontSize: 12,
    color: '#403F32',
    textAlign: 'center',
    marginBottom: 15,
  },
  section: {
    padding: 16,
  },
  viewMore: {
    color: '#38A169',
  },
  harvestGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  harvestCard: {
    width: '47%',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
  },
  harvestQuantity: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  harvestProduct: {
    fontSize: 14,
    color: '#6B7280',
  },
  attendanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  attendanceId: {
    width: 40,
    fontSize: 14,
    color: '#6B7280',
  },
  attendanceName: {
    flex: 1,
    fontSize: 16,
    color: '#1F2937',
  },
  attendanceStatus: {
    fontSize: 14,
    fontWeight: '500',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 8,
  },
  activeNavItem: {
    borderBottomWidth: 2,
    borderBottomColor: '#38A169',
  },
  navText: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
  },
  activeNavText: {
    color: '#38A169',
  },
});

export default IntegratedDashboard;