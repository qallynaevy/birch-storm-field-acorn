import { useCallback, useEffect, useState } from "react";
import { kitItems } from "@/lib/data/kit";

const KIT_KEY = "siagaku:kit";
const FAMILY_KEY = "siagaku:family";

export type FamilyMember = {
  id: string;
  name: string;
  phone: string;
  relation: string;
};

export type FamilyPlan = {
  members: FamilyMember[];
  meetingPoint: string;
  altMeetingPoint: string;
  outOfArea: string;
  notes: string;
};

const emptyPlan: FamilyPlan = {
  members: [],
  meetingPoint: "",
  altMeetingPoint: "",
  outOfArea: "",
  notes: "",
};

function readJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function useKitProgress() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setChecked(readJson<Record<string, boolean>>(KIT_KEY, {}));
    setReady(true);
  }, []);

  const toggle = useCallback((id: string) => {
    setChecked((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      localStorage.setItem(KIT_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const done = kitItems.filter((item) => checked[item.id]).length;
  const total = kitItems.length;
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);

  return { checked, toggle, done, total, percent, ready };
}

export function useFamilyPlan() {
  const [plan, setPlan] = useState<FamilyPlan>(emptyPlan);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setPlan(readJson<FamilyPlan>(FAMILY_KEY, emptyPlan));
    setReady(true);
  }, []);

  const save = useCallback((next: FamilyPlan) => {
    setPlan(next);
    localStorage.setItem(FAMILY_KEY, JSON.stringify(next));
  }, []);

  const patch = useCallback(
    (partial: Partial<FamilyPlan>) => {
      setPlan((prev) => {
        const next = { ...prev, ...partial };
        localStorage.setItem(FAMILY_KEY, JSON.stringify(next));
        return next;
      });
    },
    [],
  );

  const filled =
    (plan.meetingPoint.trim() ? 1 : 0) +
    (plan.altMeetingPoint.trim() ? 1 : 0) +
    (plan.outOfArea.trim() ? 1 : 0) +
    (plan.members.length > 0 ? 1 : 0);
  const total = 4;
  const percent = Math.round((filled / total) * 100);

  return { plan, save, patch, filled, total, percent, ready };
}

export function readinessScore(kitPercent: number, familyPercent: number) {
  return Math.round(kitPercent * 0.65 + familyPercent * 0.35);
}
