import { z } from "zod";

const talkingPointsSchema = z.object({
  cleanlinessLevel: z.string().min(0, "Please provide a valid cleanliness level"),
  workLevel: z.string().min(0, "Please provide a valid work level"),
  sleepSchedule: z.string().min(0, "Please provide a valid sleep schedule"),
  cleaningHabit: z.string().min(1, "Please provide cleaning habits"),
  financialHabit: z.string().min(1, "Please provide financial habits"),
  cookingHabit: z.string().min(1, "Please provide cooking habits"),
  decorationStyle: z.string().min(1, "Please provide decoration style"),
  communicationStyle: z.string().min(1, "Please provide communication style"),
  mediaType: z.string().min(1, "Please provide media type"),
  cleanlinessRate: z.string().min(1, "Please provide cleanliness rate"),
  cookingDescription: z.string().min(1, "Please provide cooking description"),
  houseMateRelation: z.string().min(1, "Please provide housemate relation"),
  financialHabitDescription: z.string().min(1, "Please provide financial habit description"),
  communicationStyleDescription: z.string().min(1, "Please provide communication style description"),
  petFriendlyDescription: z.string().min(1, "Please provide pet friendly description"),
  hostFriend: z.string().min(1, "Please provide hosting habits"),
  workRoutine: z.string().min(1, "Please provide work routine"),
  sleepDescription: z.string().min(1, "Please provide sleep description"),
  vapingProduct: z.string().min(1, "Please provide vaping product usage"),
  consumeAlcohol: z.string().min(1, "Please provide alcohol consumption details"),
  drugDescription: z.string().min(1, "Please provide drug usage details"),
  potentialDescription: z.string().min(1, "Please provide potential description"),
  regardingHealth: z.string().min(1, "Please provide health-related habits"),
  relagiouseDescription: z.string().min(1, "Please provide religious beliefs"),
  haveAllergies: z.string().min(1, "Please provide allergy details"),
});

export default talkingPointsSchema;
