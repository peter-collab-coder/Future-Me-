export const generateRoadmap = (goals: string[]): string[] => {
    const roadmap: string[] = [];

    goals.forEach(goal => {
        if (goal.includes('exam')) {
            roadmap.push('Create a study schedule, allocate time for each subject, and take practice tests.');
        } else if (goal.includes('coding')) {
            roadmap.push('Start with basic tutorials, build small projects, and gradually increase complexity.');
        } else if (goal.includes('fitness')) {
            roadmap.push('Set a workout routine, track progress, and adjust diet for better results.');
        } else if (goal.includes('learn')) {
            roadmap.push('Identify topics of interest, find resources, and set a learning timeline.');
        } else {
            roadmap.push('Define your goal clearly and break it down into actionable steps.');
        }
    });

    return roadmap;
};