import {
  View,
  Text,
  Image,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import AppIcons from "@/constants/icons";
import useFetch from "@/services/useFetch";
import { fetchMoviesDetails } from "@/services/api";

// Type Definitions
interface Genre {
  id: number;
  name: string;
}

interface ProductionCompany {
  id: number;
  name: string;
  logo_path?: string;
  origin_country?: string;
}

interface Movie {
  id: number;
  title: string;
  poster_path?: string;
  backdrop_path?: string;
  overview?: string;
  release_date?: string;
  runtime?: number;
  vote_average?: number;
  vote_count?: number;
  budget?: number;
  revenue?: number;
  genres?: Genre[];
  production_companies?: ProductionCompany[];
}

interface MovieInfoProps {
  label: string;
  value?: string | number | null;
}

const MovieInfo = ({ label, value }: MovieInfoProps) => (
  <View style={styles.movieInfoContainer}>
    <Text style={styles.movieInfoLabel}>{label}</Text>
    <Text style={styles.movieInfoValue}>{value || "N/A"}</Text>
  </View>
);

const MovieDetails = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const { data: movie, loading } = useFetch<Movie>(() =>
    fetchMoviesDetails(id as string)
  );

  if (loading)
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#fff" />
      </SafeAreaView>
    );

  

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <View>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`,
            }}
            style={styles.posterImage}
            resizeMode="stretch"
          />

          <TouchableOpacity style={styles.playButton}>
            <Image
              source={AppIcons.play}
              style={styles.playIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{movie?.title}</Text>

          <View style={styles.metaRow}>
            <Text style={styles.metaText}>
              {movie?.release_date?.split("-")[0]} •{" "}
            </Text>
            <Text style={styles.metaText}>{movie?.runtime}m</Text>
          </View>

          <View style={styles.ratingContainer}>
            <Image source={AppIcons.star} style={styles.starIcon} />
            <Text style={styles.ratingText}>
              {Math.round(movie?.vote_average ?? 0)}/10
            </Text>
            <Text style={styles.votesText}>
              ({movie?.vote_count} votes)
            </Text>
          </View>

          <MovieInfo label="Overview" value={movie?.overview} />

          <MovieInfo
            label="Genres"
            value={movie?.genres?.map((g) => g.name).join(" • ") || "N/A"}
          />

          <View style={styles.budgetRevenueRow}>
            <MovieInfo
              label="Budget"
              value={`$${(movie?.budget ?? 0) / 1_000_000} million`}
            />
            <MovieInfo
              label="Revenue"
              value={`$${Math.round((movie?.revenue ?? 0) / 1_000_000)} million`}
            />
          </View>

          <MovieInfo
            label="Production Companies"
            value={
              movie?.production_companies?.map((c) => c.name).join(" • ") ||
              "N/A"
            }
          />
        </View>
      </ScrollView>

     
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Image
          source={AppIcons.arrow}
          style={styles.backArrow}
          tintColor="#fff"
        />
        <Text style={styles.backButtonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0F0D23",
    flex: 1,
  },
  loadingContainer: {
    backgroundColor: "#0F0D23",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  posterImage: {
    width: "100%",
    height: 550,
  },
  playButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  playIcon: {
    width: 24,
    height: 28,
    marginLeft: 4,
  },
  detailsContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 8,
  },
  metaText: {
    color: "#A8B5DB",
    fontSize: 14,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#221F3D",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    gap: 4,
    marginTop: 8,
    alignSelf: "flex-start",
  },
  starIcon: {
    width: 16,
    height: 16,
  },
  ratingText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  votesText: {
    color: "#A8B5DB",
    fontSize: 14,
  },
  movieInfoContainer: {
    marginTop: 20,
  },
  movieInfoLabel: {
    color: "#A8B5DB",
    fontSize: 14,
    fontWeight: "normal",
  },
  movieInfoValue: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 8,
  },
  budgetRevenueRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
  },
  backButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#AB8BFF",
    borderRadius: 8,
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 50,
  },
  backArrow: {
    width: 20,
    height: 20,
    marginRight: 4,
    transform: [{ rotate: "180deg" }],
  },
  backButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default MovieDetails;