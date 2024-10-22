import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';

const DashboardScreen = () => {
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
      <View style={styles.actionIconContainer}>
        <Feather name={icon} size={24} color="#666" />
      </View>
      <Text style={styles.actionButtonText}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.date}>January 23, 2024</Text>
        <Text style={styles.day}>Monday</Text>
      </View>

      <View style={styles.dashboardGrid}>
        {/* Employees Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <MaterialIcons name="groups" size={20} color="#FFD700" />
            <Text style={styles.cardTitle}>Employees</Text>
          </View>
          <Text style={styles.totalNumber}>868</Text>
          <View style={styles.statsRow}>
            <View>
              <Text style={styles.statNumber}>800</Text>
              <Text style={styles.statLabel}>Present</Text>
            </View>
            <View>
              <Text style={styles.statNumber}>68</Text>
              <Text style={styles.statLabel}>Absent</Text>
            </View>
          </View>
        </View>

        {/* Wallet Balance Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <MaterialIcons name="account-balance-wallet" size={20} color="#FFD700" />
            <Text style={styles.cardTitle}>Wallet balance</Text>
          </View>
          <Text style={styles.amount}>₹1,08568</Text>
          <TouchableOpacity style={styles.transactionButton}>
            <Text style={styles.transactionButtonText}>Transactions</Text>
            <Feather name="arrow-right" size={16} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtonsGrid}>
        <ActionButton icon="calendar" label="Attendance" />
        <ActionButton icon="users" label="Emp transfer" />
        <ActionButton icon="package" label="Receive Products" />
        <ActionButton icon="credit-card" label="Petty cash" />
        <ActionButton icon="file-text" label="Leave request" />
        <ActionButton icon="truck" label="Trip" />
      </View>

      {/* Harvesting Details */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Harvesting Details</Text>
          <TouchableOpacity>
            <Text style={styles.viewMore}>View more</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.harvestGrid}>
          {harvestingData.map((item, index) => (
            <View key={index} style={styles.harvestCard}>
              <Text style={styles.harvestQuantity}>{item.quantity}</Text>
              <Text style={styles.harvestProduct}>{item.product}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Today's Attendance */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Today's Attendance</Text>
          <TouchableOpacity>
            <Text style={styles.viewMore}>View more</Text>
          </TouchableOpacity>
        </View>
        {attendanceData.map((item) => (
          <View key={item.id} style={styles.attendanceRow}>
            <Text style={styles.attendanceId}>{item.id}</Text>
            <Text style={styles.attendanceName}>{item.name}</Text>
            <Text
              style={[
                styles.attendanceStatus,
                { color: item.status === 'Present' ? '#4CAF50' : '#F44336' },
              ]}
            >
              {item.status}
            </Text>
          </View>
        ))}
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
          <Feather name="home" size={24} color="#FFD700" />
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
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 16,
    backgroundColor: '#1B5E20',
  },
  date: {
    color: '#fff',
    fontSize: 16,
  },
  day: {
    color: '#fff',
    fontSize: 14,
    opacity: 0.8,
  },
  dashboardGrid: {
    flexDirection: 'row',
    padding: 16,
    gap: 16,
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 16,
    color: '#333',
  },
  totalNumber: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  statNumber: {
    fontSize: 18,
    fontWeight: '500',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  amount: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  transactionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 8,
    marginTop: 8,
  },
  transactionButtonText: {
    fontSize: 14,
    color: '#333',
  },
  actionButtonsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    gap: 16,
  },
  actionButton: {
    width: '30%',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
  },
  actionIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  actionButtonText: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
  section: {
    padding: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '500',
  },
  viewMore: {
    color: '#FFD700',
  },
  harvestGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  harvestCard: {
    width: '47%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
  },
  harvestQuantity: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  harvestProduct: {
    fontSize: 14,
    color: '#666',
  },
  attendanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  attendanceId: {
    width: 40,
    fontSize: 14,
    color: '#666',
  },
  attendanceName: {
    flex: 1,
    fontSize: 16,
  },
  attendanceStatus: {
    fontSize: 14,
    fontWeight: '500',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 8,
  },
  activeNavItem: {
    borderBottomWidth: 2,
    borderBottomColor: '#FFD700',
  },
  navText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  activeNavText: {
    color: '#FFD700',
  },
});

export default DashboardScreen;