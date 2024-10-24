import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Bottom = () => {
  // Move the data inside the Bottom component
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

  return (
    <View>
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitleDark}>Harvesting Details</Text>
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
          <Text style={styles.sectionTitleDark}>Today's Attendance</Text>
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
                { color: item.status === 'Present' ? '#38A169' : '#DC2626' },
              ]}
            >
              {item.status}
            </Text>
          </View>
        ))}
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  section: {
    padding: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionTitleDark: {
    color: '#1F2937',
    fontSize: 18,
    fontWeight: '500',
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
})

export default Bottom