export interface StillWatersUser {
  name: string;
  email: string;
  joinedAt: string;
}

const USER_KEY = 'stillwaters:user';
const COMPLETED_KEY = 'stillwaters:completedMeditations';
const STREAK_KEY = 'stillwaters:streak';
const LAST_VISIT_KEY = 'stillwaters:lastVisit';

export function saveUser(user: StillWatersUser) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function loadUser(): StillWatersUser | null {
  const raw = localStorage.getItem(USER_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as StillWatersUser;
  } catch {
    return null;
  }
}

export function clearUser() {
  localStorage.removeItem(USER_KEY);
}

export function getCompletedMeditations(): string[] {
  const raw = localStorage.getItem(COMPLETED_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw) as string[];
  } catch {
    return [];
  }
}

export function markMeditationComplete(id: string) {
  const completed = new Set(getCompletedMeditations());
  completed.add(id);
  localStorage.setItem(COMPLETED_KEY, JSON.stringify(Array.from(completed)));
}

function todayKey(date: Date = new Date()) {
  return date.toISOString().slice(0, 10);
}

export function touchStreak(): number {
  const today = todayKey();
  const lastVisit = localStorage.getItem(LAST_VISIT_KEY);
  let streak = Number(localStorage.getItem(STREAK_KEY) || '0');

  if (lastVisit === today) {
    return streak;
  }

  if (lastVisit) {
    const yesterday = todayKey(new Date(Date.now() - 86400000));
    streak = lastVisit === yesterday ? streak + 1 : 1;
  } else {
    streak = 1;
  }

  localStorage.setItem(LAST_VISIT_KEY, today);
  localStorage.setItem(STREAK_KEY, String(streak));
  return streak;
}
