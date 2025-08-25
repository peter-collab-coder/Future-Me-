export interface User {
    id: string;
    name: string;
    email: string;
    coins: number;
    streak: number;
    level: number;
    completedTasks: number;
    totalTasks: number;
}

export interface Goal {
    id: string;
    title: string;
    description: string;
    createdAt: Date;
    dueDate: Date;
    completed: boolean;
}

export interface Progress {
    week: number;
    completedGoals: number;
    totalGoals: number;
    mood: string; // could be an emoji or a string representing mood
}

export interface Reward {
    id: string;
    type: 'coin' | 'badge' | 'streak';
    description: string;
    value: number;
}

export interface RoadmapStep {
    id: string;
    goalId: string;
    description: string;
    completed: boolean;
}