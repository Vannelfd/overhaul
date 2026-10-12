import type { ReactNode } from 'react'
import { ForgotScreen, ForgotSentScreen, LoginScreen, SignupScreen } from './account/AccountScreens'
import { CalendarListScreen, MyCalendarScreen } from './calendar/CalendarExtraScreens'
import { CalendarScreen } from './calendar/CalendarScreen'
import { CollectionScreen, CollectionsScreen, FavoritesScreen, ForYouScreen } from './discover/CollectionsScreens'
import { DiscoverScreen, GenreScreen, GenresScreen, MonthScreen, TagScreen } from './discover/DiscoverScreens'
import { HomeScreen } from './home/HomeScreen'
import {
  ContactScreen,
  CookiesScreen,
  HelpScreen,
  MenuScreen,
  NotFoundScreen,
  PrivacyScreen,
  TeamScreen,
  TermsScreen,
} from './info/InfoScreens'
import { ArticleScreen, DailyScreen, EditoScreen, NewsScreen, PlayerScreen, PressScreen, VideosHubScreen } from './news/NewsScreens'
import { ActorScreen, MemberProfileScreen, MembersScreen } from './people/PeopleScreens'
import { LibraryScreen, ProfileScreen, ToWatchScreen, WishlistScreen } from './profile/ProfileScreens'
import { CreateListScreen, FriendRequestsScreen, FriendsScreen, HistoryScreen, ListsScreen } from './profile/SocialScreens'
import { FiltersScreen } from './search/FiltersScreen'
import { SearchScreen } from './search/SearchScreen'
import { AddToLibraryScreen } from './series/AddToLibraryScreen'
import { CommunityScreen } from './series/CommunityScreen'
import { EpisodeScreen } from './series/EpisodeScreen'
import { ReviewsScreen } from './series/ReviewsScreen'
import { SeasonScreen } from './series/SeasonScreen'
import { SeasonsScreen } from './series/SeasonsScreen'
import { SeriesNewsScreen } from './series/SeriesNewsScreen'
import { SeriesScreen } from './series/SeriesScreen'
import { SeriesShopScreen } from './series/SeriesShopScreen'
import { VideosScreen } from './series/VideosScreen'
import { WatchScreen } from './series/WatchScreen'
import { ShopScreen } from './shop/ShopScreen'

// Registre de la planche. Les sections suivent le parcours utilisateur de l'app :
// chaque section = une ligne de la planche, chaque écran = un frame mobile.
// `full` = écran complet (toute la page défilée) ; sinon 390 × 844.
export type Screen = { label: string; full?: boolean; render: () => ReactNode }
export type SectionDef = { title: string; description?: string; screens: Screen[] }

const s = (label: string, render: () => ReactNode, full = true): Screen => ({ label, full, render })

export const sections: SectionDef[] = [
  {
    title: 'Compte',
    description: 'Premier contact : connexion, inscription et récupération du mot de passe (hors barre d’onglets).',
    screens: [
      s('Connexion', () => <LoginScreen />),
      s('Inscription', () => <SignupScreen />),
      s('Mot de passe oublié', () => <ForgotScreen />),
      s('Email envoyé', () => <ForgotSentScreen />, false),
    ],
  },
  {
    title: 'Accueil',
    description: 'Onglet Accueil : à la une, tendances, actus, nouveautés et vidéos. Le menu ☰ ouvre la navigation complète.',
    screens: [s('Accueil', () => <HomeScreen />), s('Menu (☰)', () => <MenuScreen />)],
  },
  {
    title: 'Recherche',
    description: 'Depuis le champ « Rechercher une série » : résultats par type, puis filtres en panneau du bas.',
    screens: [s('Résultats de recherche', () => <SearchScreen />), s('Filtres (panneau du bas)', () => <FiltersScreen />, false)],
  },
  {
    title: 'Découvrir',
    description: 'Onglet Découvrir : le hub Séries TV, puis chaque porte d’entrée (mois, genres, tags, collections, coups de cœur, recommandations).',
    screens: [
      s('Séries TV', () => <DiscoverScreen />),
      s('Nouveautés du mois', () => <MonthScreen />),
      s('Genres & tags', () => <GenresScreen />),
      s('Genre Science-fiction', () => <GenreScreen />),
      s('Tag Netflix Original', () => <TagScreen />),
      s('Collections', () => <CollectionsScreen />),
      s('Collection Post-apocalyptiques', () => <CollectionScreen />),
      s('Coups de cœur', () => <FavoritesScreen />),
      s('Pour vous', () => <ForYouScreen />),
    ],
  },
  {
    title: 'Fiche série',
    description: 'En ouvrant une série : la fiche, l’ajout à la sériethèque, saisons → saison → épisode, le parcours pour regarder, puis les onglets de la fiche.',
    screens: [
      s('Fiche série', () => <SeriesScreen />),
      s('Ajouter à ma sériethèque', () => <AddToLibraryScreen />),
      s('Saisons', () => <SeasonsScreen />),
      s('Saison 4', () => <SeasonScreen />),
      s('Fiche épisode', () => <EpisodeScreen />),
      s('Regarder la série', () => <WatchScreen />),
      s('Onglet News', () => <SeriesNewsScreen />),
      s('Onglet Communauté', () => <CommunityScreen />),
      s('Onglet Avis & notes', () => <ReviewsScreen />),
      s('Onglet Trailers', () => <VideosScreen />),
      s('Onglet Shop', () => <SeriesShopScreen />),
    ],
  },
  {
    title: 'Calendrier',
    description: 'Onglet Calendrier : la semaine (vue Semaine ou Liste), et le calendrier personnel de l’utilisateur.',
    screens: [
      s('Calendrier, vue semaine', () => <CalendarScreen />),
      s('Calendrier, vue liste', () => <CalendarListScreen />),
      s('Mon calendrier', () => <MyCalendarScreen />),
    ],
  },
  {
    title: 'News & vidéos',
    description: 'Onglet News : le magazine, un article, Le Daily et son édito, les critiques presse, puis les vidéos.',
    screens: [
      s('News & articles', () => <NewsScreen />),
      s('Article', () => <ArticleScreen />),
      s('Le Daily', () => <DailyScreen />),
      s('Article éditorial', () => <EditoScreen />),
      s('La presse en parle', () => <PressScreen />),
      s('Vidéos', () => <VideosHubScreen />),
      s('Lecteur vidéo', () => <PlayerScreen />),
    ],
  },
  {
    title: 'Communauté & personnes',
    description: 'Les personnes derrière les séries et la communauté : fiche acteur, annuaire des membres, profil public d’un membre.',
    screens: [
      s('Fiche acteur', () => <ActorScreen />),
      s('Les membres', () => <MembersScreen />),
      s('Profil d’un membre', () => <MemberProfileScreen />),
    ],
  },
  {
    title: 'Profil',
    description: 'Onglet Profil : le feed personnel puis chaque sous-onglet (sériethèque, à voir, wishlist, listes, historique, amis).',
    screens: [
      s('Profil', () => <ProfileScreen />),
      s('Sériethèque', () => <LibraryScreen />),
      s('Épisodes à voir', () => <ToWatchScreen />),
      s('Wishlist', () => <WishlistScreen />),
      s('Mes listes', () => <ListsScreen />),
      s('Créer une liste', () => <CreateListScreen />),
      s('Historique', () => <HistoryScreen />),
      s('Amis', () => <FriendsScreen />),
      s('Demandes d’amis', () => <FriendRequestsScreen />),
    ],
  },
  {
    title: 'Shop',
    description: 'La boutique générale (accessible depuis le menu et les fiches série).',
    screens: [s('Shop série', () => <ShopScreen />)],
  },
  {
    title: 'Informations',
    description: 'Pages de service accessibles depuis le menu : aide, contact, équipe, mentions légales et page d’erreur.',
    screens: [
      s('Centre d’aide', () => <HelpScreen />),
      s('Contact', () => <ContactScreen />),
      s('Notre équipe', () => <TeamScreen />),
      s('Politique de cookies', () => <CookiesScreen />),
      s('Données personnelles', () => <PrivacyScreen />),
      s('CGU', () => <TermsScreen />),
      s('Page 404', () => <NotFoundScreen />),
    ],
  },
]
