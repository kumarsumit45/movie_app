
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppImages from "@/constants/appImages"
import AppIcons from "@/constants/icons"
import { useFavorites } from '@/context/FavoritesContext'

const Profile = () => {
  const { favorites } = useFavorites();

  const ProfileSection = ({ icon, title, value, showArrow = true }) => (
    <TouchableOpacity style={styles.sectionItem}>
      <View style={styles.sectionLeft}>
        {icon ? <Image source={icon} style={styles.sectionIcon} /> : null}
        <Text style={styles.sectionTitle}>{title}</Text>
      </View>
      <View style={styles.sectionRight}>
        {value !== undefined && value !== null ? (
          <Text style={styles.sectionValue}>{value}</Text>
        ) : null}
        {showArrow ? <Image source={AppIcons.arrow} style={styles.arrowIcon} /> : null}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Image source={AppImages.bg} style={styles.bgImage} />

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false} >
        {/* Profile Header */}
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            <Image source={AppIcons.person} style={styles.avatar} />
          </View>
          <Text style={styles.userName}>Movie Enthusiast</Text>
          <Text style={styles.userEmail}>moviefan@cinema.com</Text>
        </View>

        {/* Stats Section */}
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>{favorites.length}</Text>
            <Text style={styles.statLabel}>Favorites</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Watchlist</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Reviews</Text>
          </View>
        </View>

        {/* Account Section */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Account</Text>
          <View style={styles.sectionContent}>
            <ProfileSection icon={AppIcons.person} title="Edit Profile" />
            <ProfileSection icon={AppIcons.save} title="My Favorites" value={favorites.length} />
            <ProfileSection icon={AppIcons.play} title="Watch History" />
          </View>
        </View>

        {/* Preferences Section */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Preferences</Text>
          <View style={styles.sectionContent}>
            <ProfileSection icon={AppIcons.star} title="Language" value="English" />
            <ProfileSection icon={AppIcons.search} title="Content Preferences" />
            <ProfileSection title="Notifications" />
          </View>
        </View>

        {/* About Section */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>About</Text>
          <View style={styles.sectionContent}>
            <ProfileSection title="Help & Support" />
            <ProfileSection title="Terms of Service" />
            <ProfileSection title="Privacy Policy" />
            <ProfileSection title="About App" value="v1.0.0" showArrow={false} />
          </View>
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Sign Out</Text>
        </TouchableOpacity>

        <View style={styles.bottomSpacing} />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0D23'
  },
  bgImage: {
    position: "absolute",
    width: "100%",
    zIndex: 0,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#AB8BFF30',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#AB8BFF',
  },
  avatar: {
    width: 50,
    height: 50,
    tintColor: '#AB8BFF',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 14,
    color: '#ffffff70',
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: '#1A1730',
    marginHorizontal: 20,
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    justifyContent: 'space-around',
  },
  statBox: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#AB8BFF',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#ffffff70',
  },
  statDivider: {
    width: 1,
    backgroundColor: '#ffffff20',
  },
  section: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 12,
    paddingLeft: 5,
  },
  sectionContent: {
    backgroundColor: '#1A1730',
    borderRadius: 15,
    overflow: 'hidden',
  },
  sectionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff10',
  },
  sectionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  sectionIcon: {
    width: 24,
    height: 24,
    tintColor: '#AB8BFF',
    marginRight: 12,
  },
  sectionTitle: {
    fontSize: 15,
    color: '#ffffff',
    fontWeight: '500',
  },
  sectionRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionValue: {
    fontSize: 14,
    color: '#ffffff70',
    marginRight: 8,
  },
  arrowIcon: {
    width: 16,
    height: 16,
    tintColor: '#ffffff40',
    transform: [{ rotate: '180deg' }],
  },
  logoutButton: {
    backgroundColor: '#b556e430',
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#a961f1ff',
  },
  logoutText: {
    color: '#ffffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomSpacing: {
    height: 100,
  },
})

export default Profile